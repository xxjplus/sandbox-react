pipeline {
    agent {
        docker {
            image 'node:22-alpine'
            args '-p 3000:3000 -u root:root -v /path/on/host/node_modules:/app/node_modules'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'apk add --no-cache python3 make g++'
                sh 'npm install --verbose'
            }
        }
        stage('Start') {
             steps {
                 sh 'npm start'
             }
        }
    }
}