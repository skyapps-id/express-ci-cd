pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/skyapps-id/express-ci-cd.git'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn add .'
      }
    }  
    stage('Test') {
      steps {
        sh 'yarn run test'
      }
    }
  }
}