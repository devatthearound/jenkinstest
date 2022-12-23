pipeline {

    agent any

    branch = env.BRANCH_NAME
   
   tools{
                git "git"
                nodejs "nodejs"
            }


    stages {


        // stage('Start') {
        //     agent any
        //     steps {
        //         slackSend (channel: '26-기술개발', color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} GIT 코멘트 ${env.GIT_COMMIT} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        //     }
        // }

        stage('download') {
            steps {
                /* `make check` returns non-zero on test failures,
                * using `true` to allow the Pipeline to continue nonetheless
                */
                // git credentialsId: 'devatthearound', url: 'https://github.com/devatthearound/jenkinstest.git'
                echo "${env.BRANCH_NAME}"
 
            }
        }

        stage('Build') {
            steps {
               echo "${env.GIT_BRANCH}"
            }
        }

    //       stage('Building our image') { 
    //       steps { 
    //           script { 
    //               dockerImage = docker.build repository + ":$BUILD_NUMBER" 
    //           }
    //       } 
    //   }

    //   stage('Login'){
    //       steps{
    //           sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin' // docker hub 로그인
    //       }
    //   }
    //   stage('Deploy our image') { 
    //       steps { 
    //           script {
    //             sh 'docker push $repository:$BUILD_NUMBER' //docker push
    //           } 
    //       }
    //   } 
    //   stage('Cleaning up') { 
	// 	  steps { 
    //           sh "docker rmi $repository:$BUILD_NUMBER" // docker image 제거
    //       }
    //   } 



        // stage('s3upload') {
        //     steps {
        //         echo "s3upoad"
        //         withAWS(credentials:'s3', region:'ap-northeast-2') {
        //            s3Delete(bucket:'thearoundjenkins', path:'./')
        //            s3Upload(file:'./', bucket:'thearoundjenkins', path:'./')
        //         }
        //     }
        // }


    }
    //  post {
    //     success {
    //         slackSend (channel: '26-기술개발', color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} ${env.GIT_COMMIT} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    //     }
    //     failure {
    //         slackSend (channel: '26-기술개발', color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} ${env.GIT_COMMIT} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    //     }
    // }
}