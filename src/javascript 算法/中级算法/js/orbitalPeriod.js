function orbitalPeriod(arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447
  return arr.map(function(v) {
    v.orbitalPeriod = Math.round(2*Math.PI*(earthRadius+v.avgAlt)*Math.sqrt((earthRadius+v.avgAlt)/GM))
    delete v.avgAlt
    return v
  })
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])