# MERN Shop

## eCommerce built with MERN Stack

Simple shop made using React on the Frontend, Express on the Backend and MongoDB as the Database. <br>
Pretty straightforward, probably with tons of bad practices, but this was my first that practical dive into the React & Redux.

## Getting started:

### Local setup (`main` branch)

Build compose images

```powershell
docker-compose build
```

Create compose containers

```powershell
docker-compose up
```

### Azure setup (`azure-prod` branch)

Login to Azure with DockerCLI

```
docker login azure
```

Create ACI context

```
docker context create aci <aci_name>
```

Make sure you are using the default context

```
docker context use default
```

Change the Docker ID in the docker-compose.yml
tobiwankenobii -> <your_id>

Build docker images

```
docker-compose build
```

Push docker images

```
docker-compose push
```

Change the context to one you created previously

```
docker context use <aci_name>
```

Start the containers (yes, docker-compose without the dash)

```
docker compose up
```

All good, `docker ps` should show you the IPs.

## Environment Variables

| Variable name    | Value |
| ---------------- | ----- |
| NODE_ENV         |       |
| PORT             |       |
| MONGO_URL        |       |
| JWT_SECRET       |       |
| PAYPAL_CLIENT_ID |       |

<br>
<strong>Credits to Brad Traversy, who is an author of the course which helped me build this shop.</strong>
