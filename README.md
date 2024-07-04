# NestJS Hexagonal Architecture Demo

This repository explores the Hexagonal Architecture and how to implement it in applications developed with NestJS. Through a series of practical examples, you will understand and learn how to apply this powerful design pattern in your projects.

The project includes a small payment system that allows different customers to make new payments and get details of the payments made. This practical example facilitates the understanding of the Hexagonal Architecture and its application in a real context.

I hope this repository will be useful and help you to implement Hexagonal Architecture in your projects!

## Developing

First, we will need to create our .env file, we can create a copy from the example one:

```
cp .env.example .env
```

The project is fully dockerized 🐳, if we want to start the app in development mode, we just need to run:

```
docker-compose up -d my-service-dev
```

This development mode with work with hot-reload and exposing a debug port, the 9229, so later we can connect from our editor to it.

Now, you should be able to start debugging configuring using your IDE. For example, if you are using vscode, you can create a .vscode/launch.json file with the following configuration:

```
{
  "version": "0.1.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to docker",
      "restart": true,
      "port": 9229,
      "remoteRoot": "/app"
    }
  ]
}
```

Also, if you want to run the production mode, you can run:

```
docker-compose up -d my-service-production
```

This service is providing just a health endpoint which you can call to verify the service is working as expected:

```
curl --request GET \
  --url http://localhost:3000/health
```

If you want to stop developing, you can stop the service running:

```
docker-compose down
```

## Building

```
npm run build
```

## ✅ Testing

The service provide different scripts for running the tests, to run all of them you can run:

```
npm run test
```

If you are interested just in the unit tests, you can run:

```
npm run test:unit
```

Or if you want e2e tests, you can execute:

```
npm run test:e2e
```

## Linting

To run the linter you can execute:

```
npm run lint
```

And for trying to fix lint issues automatically, you can run:

```
npm run lint:fix
```
