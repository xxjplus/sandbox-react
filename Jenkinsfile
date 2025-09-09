pipeline {
    agent {
        docker {
            image 'node:22-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start') {
                    steps {
                        sh 'npm start'
                    }
                }
    }
}