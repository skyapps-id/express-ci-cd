pipeline {
  environment { 
    registry = "rootduck/express" 
    registryCredential = 'docker-hub-credentials' 
    dockerImage = '' 
  }
  agent any
  tools {nodejs "node"}
  stages {
    stage('Git') {
      steps {
        git branch: 'master',
            credentialsId: '7113ac5f-decd-4229-ad1d-91d91793d6ac',
            url: 'https://github.com/skyapps-id/express-ci-cd.git'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Building our image') { 
      steps { 
        script { 
          dockerImage = docker.build registry + ":$BUILD_NUMBER" 
        }
      } 
    }
    stage('Deploy our image') { 
      steps { 
        script { 
          docker.withRegistry( '', registryCredential ) { 
            dockerImage.push() 
          }
        } 
      }
    } 
    stage('Cleaning up') { 
      steps { 
        sh "docker rmi $registry:$BUILD_NUMBER" 
      }
    } 
  }
}