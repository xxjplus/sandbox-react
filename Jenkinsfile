pipeline {
    agent {
        docker {
            image 'node:22.19-alpine3.22'
            args '-p 3000:3000 -u root:root -v /path/on/host/node_modules:/app/node_modules'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'apk add python3 make g++'
                sh 'npm install --verbose'
            }
        }
        stage('Start') {
             steps {
                 sh 'npm start'
             }
        }
    }
    post {
            always {
                echo 'always'
            }
            success {
                echo 'success'
            }
            failure {
                echo 'failure'
            }
            unstable {
                echo 'unstable'
            }
            changed {
                echo 'changed'
            }
        }
}