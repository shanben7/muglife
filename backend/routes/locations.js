const Router = require('koa-router');
const router = new Router();
const LocationsController = require('../controllers/locations');

// GET /locations -> Returns all locations in db
router.get('/', LocationsController.fetchAll);

// POST /locations -> Create new location
router.post('/', LocationsController.create);

// PUT /locations/1 -> Update location with id of 1
router.put('/:id', LocationsController.update);

// DELETE /locations/1 -> Delete location with id of 1
router.delete('/:id', LocationsController.remove);

module.exports = router.routes();
