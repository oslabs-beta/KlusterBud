<p align='center'>
    <img src='./client/images/Logo.png' alt='klusterbudlogo' width='100px' height='100px'>
</p>
<h1 text align ='center'>KlusterBud<h1>

<h4 text align ='center'> Klusterbud is a Kubernetes developers tool used to detect anomalies in the performance of nodes within a replica set.</h4>

<div align='center'>

## Built Using

![JavaScript](https://img.shields.io/badge/-javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-000000?style=for-the-badge&logo=prometheus&labelColor=000000)
![Helm](https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=Helm&labelColor=0F1689)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## Table of Contents

- [About KlusterBud](#about-klusterbud)
- [Vision Timeline](#vision-timeline)
- [Getting Started](#getting-started-using-klusterbud)
- [Demo](#demo)
- [Publications](#publications)
- [Website](#website)
- [Contributors](#contributors)

## About Klusterbud

KlusterBud makes PromQL queries to the user's running instance of prometheus, collecting metrics from nodes and comparing them to other nodes within the same replica set. When an anomaly is found, the identifying information of the node is served back to the user. Users can choose from a dropdown list of replica sets in their cluster, and start watching for any anomalies.

## Vision Timeline

- ✅ Develop application to pull CPU resonse time from a replica set
- ✅ Consolidate data from a replica set to isolate a single outlier node within it
- ⏳ Containerize application to be deployed directly on monitored cluster
  - ⏳ Remove need for the user to manually initialize their own Prometheus server
- ⏳ Develop functionality for monitoring multiple replica sets concurrently
- 🤝 Allow users to input their own margins and metrics to define outlier nodes
- 🤝 Develop live monitoring features for a production workflow
- 🤝 Generate live monitoring visualization

✅ = Completed
⏳ = Coming soon
🤝 = Seeking Support

## Getting Started Using KlusterBud

- Have Prometheus installed on Kubernetes cluster
- Have Prometheus port-forwarded to `localhost:9090`
- Install the dependencies

  - ```js
    npm install
    npm run build
    npm start
    ```

- Select node from drop down menu

## Demo

<p align='center'>
<img src='./client/images/KlusterGif-Animated Image (Large).gif'>
<p>

## Publications

[![Medium Badge](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)]()

## Website

### Check out our [Website]() and [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/klusterbud)

## Contributors:

### <p text align ='center'>Asher Mitchell-Smith</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/The-Onion-Man) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/asher-mitchell-smith-507683154/)</p>

### <p text align ='center'>Christopher Lu</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/christopher-lu) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christopher-lu19/)</p>

### <p text align ='center'>Fredy Rubio</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/FredyRubio) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fredy-rubio/)</p>

### <p text align ='center'>Michael Wang</p> <p text align ='center'>[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mwang934) [![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()</p>

[Back to top of page](#klusterbud)
