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
                echo "다운로드"
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
            }
        }
    }
}