const queryController = {};

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

queryController.sort = (req, res, next) => {
  console.log(req.params.string)
  const RSPods = {};
  Object.keys(res.locals.data).forEach(element => {
    if(element.includes(req.params.string)) {
      RSPods[element] = res.locals.data[element];
    }
  })
  res.locals[req.params.string] = RSPods;
  //from every key in RSPods, compare key[1]
  function medianArr(arr){
    arr.sort((a,b) => a - b)

    const length = arr.length;
    let median;
    if(length % 2 === 0){
      const mid1 = arr[length/2-1];
      const mid2 = arr[length/2];
      median = (mid1+mid2)/2;
    }else {
      median = arr[Math.floor(length/2)];
    }

    return median;
  }
  const median = medianArr(Object.values(RSPods))
  console.log(median)

  console.log(RSPods)
  // console.log(RSPods["destroy-prod-86568647b5-8pvvt"][1] )
  for(const key in RSPods){
    if(RSPods[key][1] > (2*median[1]) ){
      res.locals.pod = key
      console.log(res.locals.pod)
      return next();
    } 
  }
  res.locals.pod = 'no anomalies found yet...'
  return next();
};

  module.exports = queryController;