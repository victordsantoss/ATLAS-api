## Running the project 

This project was developed using NestJs and yarn as package manager. To running in your machine, please follow the instructions bellow:

### Connection to PostgreSQL database

Using postgis container
```docker
docker run --name geodatabase --ip 172.17.0.2 -e POSTGRES_PASSWORD=12345 -d postgis/postgis
```
Postgis Container for ARM64 architecture:
```docker
docker run  --name postgis -p 5432:5432 -e POSTGRES_PASSWORD=12345 -e POSTGRES_USER=postgres -d gangstead/postgis:13-3.1-arm
```

Compile migrations with container
```docker
docker build -t migrations ./
```
```docker
docker run migrations --rm

```
### Connection to NestJs api
Create NestJs Image
``` shell
docker build -t nest-cloud-run .
```

Create NestJs Container
``` shell
docker run -p 8080:8080 nest-cloud-run
```
