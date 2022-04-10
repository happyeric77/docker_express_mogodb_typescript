# Run full-stack app by docker compose

See the full doc from my [blog](https://hackmd.io/@happyeric77/HJE2oRyV5)

1. Build the docker image through the following command

```
docker build . -t my-app
```

2. Run docker compose to start up all containers

```
docker-compose -f docker-compose.yaml up -d
```

3. Create database, collection and user through mongo-express

- go the localhost:8080
- create a new database "user-account"
- create a new collection "users"
- create one object

```
{
  userid: 1,
  name: "colerfullife"
  email: "colorfullife.example.com"
  interests: "coding"
}
```

3. Access localhost:3000 to enjoy the application

4. Close al containers through the following command

```
docker-compose -f docker-compose.yaml down
```
