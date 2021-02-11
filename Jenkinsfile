pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/skyapps-id/express-ci-cd'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}