const { response } = require("express");

const RSController = {};

RSController.fetch = (req, res, next) => {
    fetch('http://localhost:9090/api/v1/query?query=kube_deployment_spec_replicas')
    .then(response => response.json())
    .then(data => {
        const replicaSets = [];
        // populate the replicaSets array with the name(stored under 'deployment') of every replica set
        data.data.result.forEach(element => {
            replicaSets.push(element.metric.deployment);
        });
        console.log(replicaSets);
          // console.log(data.data.result);
          // Send only the data.data.result part to the client
          res.locals.replicaSets = replicaSets;
          return next();
      })
    .catch(err => {console.log(err)})
}

module.exports = RSController;