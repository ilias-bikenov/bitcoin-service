# Bitcoin Service

## This service allows to retrieve current mid Bitcoin price with applied service commission

`GET /price`

## Development

`node` version `18.16.1`

### Run locally:

```
nvm install 18.16.1
```

```
nvm use 18.16.1
```

The first time, you will need to run

```
npm install
```

Then start the server with

```
npm run start
```

### Run with Docker

```
docker build . -t bitcoin-service
```

```
docker run --env-file .env -p 3000:3000 bitcoin-service

```

### Run tests with

```
npm run test
```
