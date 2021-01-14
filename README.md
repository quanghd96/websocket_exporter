# Websocket exporter

## Getting Started

```
docker run -d -p 9189:9189 -e ENDPOINT='websocket-server:8105' --name websocket_exporter -it quanghd96/websocket_exporter
```

That's it! Server is now listening on port 9189.

Environment variable ENDPOINT must be passed to the container.
