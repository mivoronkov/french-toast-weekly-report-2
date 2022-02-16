pipeline {
  agent {
    kubernetes {
      
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: node
            image: node:16
            command: ["cat"]
            tty: true
          - name: terraform
            image: hashicorp/terraform:latest
            command: ["cat"]
            tty: true
          - name: cli
            image: amazon/aws-cli
            command: ["cat"]
            tty: true
          - name: docker
            image: docker:19.03.1-dind
            securityContext:
                privileged: true
            env:
              - name: DOCKER_TLS_CERTDIR
                value: ""
        '''
    }
  }
  
  
    
  stages {
    stage('node') {
      steps {
        container('node') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    
        
    stage('cli') {
      steps {
        container('cli') {
          sh 'aws ecr get-login-password --region us-west-2 > token.txt'
        }
      }
    }


    stage('docker build') {
      steps{
        container('docker') {
          sh 'docker version'

          sh 'docker login --username AWS --password-stdin < token.txt 529396670287.dkr.ecr.us-west-2.amazonaws.com'
          sh 'docker build -t 529396670287.dkr.ecr.us-west-2.amazonaws.com/mv_front:v6 .'
          sh 'docker push 529396670287.dkr.ecr.us-west-2.amazonaws.com/mv_front:v6'
        }
      }
    }

  }
}
