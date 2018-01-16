// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter(function (driver) {
    return driver.hometown === hometown
  }))
}
