pipeline {
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
  }
}