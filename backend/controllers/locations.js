const Location = require('../models/location');

// TODO: detailed documentation for request, response

// Fetch all Locations from the db and return as payload
async function fetchAll (ctx) {
  const locations = await Location.find({});
  ctx.body = locations;
}

// Create new Location from payload and save it to the db
async function create (ctx) {
  const newLocation = new Location(ctx.request.body);
  newLocation.save();
  ctx.body = newLocation;
}

// Update an existing Location in the db
async function update (ctx) {
  const id = ctx.params.id;
  const location = await Location.findById(id);

  // TODO: use spread syntax for update
  location.name = ctx.request.body.name;
  location.lat = ctx.request.body.lat;
  location.lng = ctx.request.body.lng;
  location.discount = ctx.request.body.discount;

  const updatedLocation = await location.save();
  ctx.body = updatedLocation;
}

// Remove a Location from the db
async function remove (ctx) {
  const id = ctx.params.id;
  const location = Location.findById(id);

  const removedLocation = await location.remove();
  ctx.body = removedLocation;
}

module.exports = {
  fetchAll,
  create,
  update,
  remove,
};



