// Code your solution in this file!
const logDriverNames =  function (drivers) {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  return drivers.filter(function (driver) {
    return drivers.location === location
  })
}
