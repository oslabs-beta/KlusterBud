const queryController = {};


//get the cpu response time of all nodes in our cluster from the prometheus server
queryController.fetch = (req, res, next) => {
  console.log('/QUERY ROUTE IS RUNNING', req.params.string)
    fetch('http://localhost:9090/api/v1/query?query=container_cpu_usage_seconds_total')
    .then(response => {
        return response.json()})
    .then(data => {
      const items = {};
      data.data.result.forEach(element => {
        items[element.metric.pod] = element.value;
      });
      console.log(items);
        // console.log(data.data.result);
        // Send only the data.data.result part to the client
        res.locals.data = items;
        return next();
    })
}

//reduces information down to array of only the nodes in our chosen replica set, then returns an anomaly node OR 'no anomalies found yet'
queryController.sort = (req, res, next) => {
  console.log(req.params.string)
  const RSPods = {};
  Object.keys(res.locals.data).forEach(element => {
    if(element.includes(req.params.string)) {
      RSPods[element] = res.locals.data[element];
    }
  })
  res.locals[req.params.string] = RSPods;
  
  //function acceps an array of values, returns the median value
  function medianArr(arr){
    arr.sort(function(a, b) {
        return a - b;
    });

    const n = arr.length;
    let median;

    if (n % 2 === 0) {
        const midLeft = arr[n / 2 - 1];
        const midRight = arr[n / 2];
        median = (midLeft + midRight) / 2;
    } else {
        median = arr[Math.floor(n / 2)];
    }

    return median;
  }
  //find the median of the cpu response times of our nodes
  const median = medianArr(Object.values(RSPods).map(ele => ele[1]))
  console.log(median)
  

  console.log(RSPods)
  //go through our pods, compare their cpu usage to the median 
  for(const key in RSPods){
    //if its > 2x the median we assign it to res.locals for our response
    if(RSPods[key][1] > (2*median) ){
      res.locals.pod = key
      res.locals.medianSec = median
      res.locals.errorFound = true
      console.log(res.locals.pod)
      return next();
    } 
  }
  //if we get to this point, just send back 'no anomalies found yet'
  res.locals.pod = 'no anomalies found yet...'
  res.locals.medianSec = median
  res.locals.errorFound = false
  return next();
};

  module.exports = queryController;