#!/usr/bin/env groovy
pipeline {
    agent any

    stages {
            stage('Prepare') {
                steps {
                    sh "echo -e 'CDN=https://anka.qcdn.ricequant.com\nPUBLIC_PATH=/crystal/' > .env"
                    sh "npm run clean"
                }
            }
            stage('Build') {
                steps {
                    sh "npm run build"
                }
            }
            stage('UAT Deploy') {
                when {
                     branch 'dev'
                }
                steps {
                    sh "rsync -avh --stats --delete -e 'ssh -p 28888' dist/ jenkins@anka.ricequant.com:/static/st/crystal"
                }
            }
            stage('Online Deploy') {
                when {
                     branch 'release'
                }
                steps {
                    sh "rsync -avh --stats --delete dist/ /static/crystal"
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