pipeline {
    agent any

    tools{
        git "git"
        nodejs "nodejs"
    }

    stages {

        stage('Start') {
            agent any
            steps {
                slackSend (channel: '#migrator', color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            }
        }
        stage('download') {
            steps {
                /* `make check` returns non-zero on test failures,
                * using `true` to allow the Pipeline to continue nonetheless
                */
                git credentialsId: '데브', url: 'https://github.com/devatthearound/jenkinstest.git'
            }
        }

        stage('Build') {
            steps {
                echo "빌드"
            }
        }

        stage('s3upload') {
            steps {
                echo "s3upoad"
                withAWS(credentials:'s3', region:'ap-northeast-2') {
                   s3Delete(bucket:'thearoundjenkins', path:'./')
                   s3Upload(file:'./', bucket:'thearoundjenkins', path:'./')
                }
            }
        }

        post {
        success {
            slackSend (channel: '#migrator', color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        failure {
            slackSend (channel: '#migrator', color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
    }
}