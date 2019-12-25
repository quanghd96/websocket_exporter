const server = require('express')();
const client = require('prom-client');
const { WebSocketClient } = require('./websocket');

const gauge = new client.Gauge({
  name: 'metric_name',
  help: 'metric_help',
  labelNames: ['status']
});

const ws = new WebSocketClient();
ws.open('ws://ws.javisco.com:8105');
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