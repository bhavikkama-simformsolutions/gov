const express = require('express');
const cors = require('cors');

// HTTP Logger
const morgan = require('morgan');

// Body Parse
const bodyParser = require('body-parser');

// Translations
const l10n = require('jm-ez-l10n');
require('../models/index');
const logger = require('../helper/logger');

l10n.setTranslationsFile('en', './language/en.json');

const app = express();
app.set('port', process.env.PORT);
app.use(l10n.enableL10NExpress);
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ limit: '1gb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '1gb' }));
app.use(cors({ preflightContinue: true }));
app.use('/api', require('../routes'));

app.use((err, req, res) => {
  logger.error(` ${req.url}
    name -> ${err.name}
    message -> ${err.message}
    ${err.dest}
    ${err.stack}
  `);
  res.status(500).json({ error: err.toString() });
});

module.exports = app;
