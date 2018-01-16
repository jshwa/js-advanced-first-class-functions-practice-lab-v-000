// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  return drivers.filter(function (driver) {
    return driver.location === location
  }).map(driver => console.log(driver.name))
}
