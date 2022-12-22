pipeline {
    agent any

    tools{
        git "git"
        nodejs "nodejs"
    }

    stages {
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
                s3Upload acl: 'PublicRead', bucket: 'https://thearoundjenkins.s3.ap-northeast-2.amazonaws.com', cacheControl: '', excludePathPattern: '', file: '*.*', includePathPattern: '', metadatas: [''], path: './', redirectLocation: '', sseAlgorithm: '', tags: '', text: '', workingDir: ''
            }
        }
    }
}