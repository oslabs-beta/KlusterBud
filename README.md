<p align='center'>
    <img src='./client/images/Logo.png' alt='klusterbudlogo' width='100px' height='100px'>
</p>
<h1 text align ='center'>KlusterBud<h1>

#### Klusterbud is a running Kubernetes developers tool to monitor the status of the nodes deployed in a Kubernetes cluster. Kubernetes nodes are volitile and lack monitoring to identify where areas of potential failure may occur.

<div align='center'>

## Built Using

![JavaScript](https://img.shields.io/badge/-javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F2F4F9?style=for-the-badge&logo=grafana&logoColor=orange&labelColor=F2F4F9)
![Grafana Loki](https://img.shields.io/badge/grafana_loki-F2F4F9?style=for-the-badge&labelColor=2C3239&logo=data:image/png;base64,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)
![Prometheus](https://img.shields.io/badge/Prometheus-000000?style=for-the-badge&logo=prometheus&labelColor=000000)
![Helm](https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=Helm&labelColor=0F1689)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## About Klusterbud

KlusterBud utilizes Prometheus to scrape metrics from the controller manager via making HTTP requests using it's intrinsic query language called PromQL.
Users can select from a dropdown menu of common metrics needed to effectivly run a Kubernetes cluster which will display details of a node that is exhibiting non-normal behavior

## Table of Contents

- [Getting Started](#getting-started-using-klusterbud)
- [Demo](#demo)
- [Publications](#publications)
- [Website](#website)
- [Contributors](#contributors)

## Getting Started Using KlusterBud

- Have Prometheus installed on Kubernetes cluster
- Have Prometheus port-forwarded to `localhost:9090`
- Install the dependencies

  - ```js
    npm install
    npm run build
    npm run dev
    ```

- Select node from drop down menu

## Demo

## Publications

[![Medium Badge](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)]()

## Website

### Check out our [Website]() and [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()

## Contributors:

### <p text align ='center'>Asher Mitchell-Smith</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/The-Onion-Man) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/asher-mitchell-smith-507683154/)</p>

### <p text align ='center'>Christopher Lu</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/christopher-lu) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christopher-lu19/)</p>

### <p text align ='center'>Fredy Rubio</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/FredyRubio) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fredy-rubio/)</p>

### <p text align ='center'>Michael Wang</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mwang934) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()</p>

[Back to top of page](#klusterbud)
