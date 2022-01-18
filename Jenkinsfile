//START-OF-SCRIPT
node {
    def SONARQUBE_HOSTNAME = 'sonarqube'

    stage('prep') {
        git url: 'https://github.com/codemakeracademy/french-toast-weekly-report-2.git'                
    }

    stage('sonar-scanner') {
      def sonarqubeScannerHome = tool name: 'sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      withCredentials([string(credentialsId: 'sonar', variable: 'sonarLogin')]) {
        sh "${sonarqubeScannerHome}/bin/sonar-scanner -e -Dsonar.host.url=http://${SONARQUBE_HOSTNAME}:9000 -Dsonar.login=${sonarLogin} -Dsonar.projectName=WeeklyReport2 -Dsonar.projectVersion=${env.BUILD_NUMBER} -Dsonar.projectKey=WR2 -Dsonar.sources=src  -Dsonar.language=js"
      }
    }

}
//END-OF-SCRIPT
