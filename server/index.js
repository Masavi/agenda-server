const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();
const { fudgeController }  = require('../controllers');
router.post('/fudge', fudgeController.create);

app.use('/api/v1', router);

module.exports = app;
