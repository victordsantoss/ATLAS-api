## Running the project 

This project was developed using NestJs and yarn as package manager. To running in your machine, please follow the instructions bellow:


Create NestJs Image
``` shell
docker build -t nest-cloud-run .
```

Create NestJs Container
``` shell
docker run -p 8080:8080 nest-cloud-run
```

If necessary, for testing, upload a local bank:
``` shell
docker run —name postgres -e POSTGRES_PASSWORD=your_bank_password -p 5432:5432 -d postgres
```