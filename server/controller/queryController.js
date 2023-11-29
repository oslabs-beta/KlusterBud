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
    arr.sort(function(a, b) {
        return a - b;
    });

    var n = arr.length;
    var median;

    if (n % 2 === 0) {
        var midLeft = arr[n / 2 - 1];
        var midRight = arr[n / 2];
        median = (midLeft + midRight) / 2;
    } else {
        median = arr[Math.floor(n / 2)];
    }

    return median;
  }
  const median = medianArr(Object.values(RSPods).map(ele => ele[1]))
  console.log(median)
  

  console.log(RSPods)
  // console.log(RSPods["destroy-prod-86568647b5-8pvvt"][1] )
  for(const key in RSPods){
    if(RSPods[key][1] > (2*median) ){
      res.locals.pod = key
      res.locals.medianSec = median
      res.locals.errorFound = true
      console.log(res.locals.pod)
      return next();
    } 
  }
  res.locals.pod = 'no anomalies found yet...'
  res.locals.medianSec = median
  res.locals.errorFound = false
  return next();
};

  module.exports = queryController;