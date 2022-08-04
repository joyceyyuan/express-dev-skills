const express = require ('express');
const router = express.Router();
const skillController = require('../controllers/skills');

//Get users listening /skills because we need to mount in the server.js as /skills

router.get ('/', skillController.index);
router.get('/new', skillController.new);
router.get ('/:id', skillController.show);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete);


module.exports = router;