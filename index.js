// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometown));
}

function driversByRevenue(drivers) {
  return Object.drivers.sort(revenueSorter);
}

function revenueSorter (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};
