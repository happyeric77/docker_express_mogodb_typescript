# Run full-stack app by docker compose

1. make sure cd into app dir and npm install all the package.

```
npm install
npm run build
```

2. Under ./app, run following command to boot up all containers

```
docker-compose -f docker-compose.yaml up -d
```

3. Start the application locally

```
npm run start
```
