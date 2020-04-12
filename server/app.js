/**
 * Main application file
 */

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';

import expressConfig from './config/express';
import registerRoutes from './routes';

// Connect to DynamoDB

// Setup server
var app = express();
var server = http.createServer(app);

expressConfig(app);
registerRoutes(app);

// Start server
function startServer() {
    app.angularFullstack = server.listen(config.port, config.ip, function() {
        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
}


setImmediate(startServer);

// Expose app
exports = module.exports = app;
