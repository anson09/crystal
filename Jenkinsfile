#!/usr/bin/env groovy
pipeline {
    agent any

    stages {
            stage('ST Prepare') {
                when {
                     branch 'dev'
                }
                steps {
                    sh "echo -e 'PUBLIC_PATH=/crystal/' > .env"
                }
            }
            stage('Online Prepare') {
                when {
                     branch 'release'
                }
                steps {
                    sh "echo -e 'CDN=https://assets.ricequant.com\nPUBLIC_PATH=/crystal/' > .env"
                }
            }
            stage('Build') {
                steps {
                    sh "npm run clean"
                    sh "npm run build"
                }
            }
            stage('ST Deploy') {
                when {
                     branch 'dev'
                }
                steps {
                    sh "rsync -aczvh --stats --delete dist/ jenkins@172.30.0.14:/static/st/crystal"
                }
            }
            stage('Online Deploy') {
                when {
                     branch 'release'
                }
                steps {
                    sh "rsync -aczvh --stats --delete dist/ /static/crystal"
                    build job: 'ship'
                }
            }            
    }

    post {
        failure {
            script {
                if (env.BRANCH_NAME == 'dev') {
                    EMAIL_RECIPIENTS = 'anson@ricequant.com'
                }
                else {
                    EMAIL_RECIPIENTS = 'xxx@ricequant.com'
                }
                mail (to: "${EMAIL_RECIPIENTS}",
                     subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                     body: "Something is wrong with ${env.BUILD_URL}")
            }
        }
    }
}