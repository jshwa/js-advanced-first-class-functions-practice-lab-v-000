// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  logDriversNames(filter(driver => driver.location === location))
}
