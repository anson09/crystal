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
            stage('Deploy') {
                steps {
                    sh "rsync -avh --stats --delete -e 'ssh -p 28888' dist/ rice@anka:/static/st/crystal/"
                }
            }
    }

    post {
        unstable {
            mail (to: "anson@ricequant.com",
                  subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                  body: "Something is wrong with ${env.BUILD_URL}")
        }
    }
}