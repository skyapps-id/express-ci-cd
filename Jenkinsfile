pipeline {
  environment { 
    registry = 'rootduck/express' 
    registryCredential = 'docker-hub-credentials' 
    dockerImage = '' 
  }
  agent none
  tools {nodejs 'node'}
  stages {
    stage("Build and test the project") {
      agent {
        label any
      }
      stages {
        stage('Git') {
          steps {
            git branch: 'master',
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
      }
    }
  }
}
