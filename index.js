const server = require('express')();
const client = require('prom-client');
const { WebSocketClient } = require('./websocket');
const ENDPOINT = process.env.ENDPOINT

const gauge = new client.Gauge({
  name: 'websocket',
  help: 'websocket_help',
  labelNames: ['status']
});

const ws = new WebSocketClient();
ws.open(ENDPOINT);
ws.onopen = function (e) {
  gauge.labels('status').set(1);
}
ws.onerror = function (e) {
  gauge.labels('status').set(0);
}

server.get('/metrics', (req, res) => {
  res.end(client.register.metrics());
});

server.listen(9189);
