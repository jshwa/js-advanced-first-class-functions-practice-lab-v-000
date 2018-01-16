// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  const new_drivers = return drivers.filter(function (driver) {
    return drivers.location === location
  })

}
