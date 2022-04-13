# Figma JSON getter 
Simple web application for getting JSON files from existing Figma designs.  

## About

This project has 2 main services, React based frontend and Spring Boot based backend service which are desined to launch in the same time with Docker. 
The app was created using:
- `React v17.0.2`
- `Spring Boot v2.6.4 (Java 8)`
- `Docker Compose v3.8`

## Dependencies
For launching the app on your computer or laptop you must have installed this software:
1. [Git](https://git-scm.com/downloads)
2. [Docker](https://www.docker.com/products/docker-desktop/)

## Launching the app

### Option 1️⃣ - pull existing Docker images
1. Clone the **docker-hub** branch  
`git clone -b docker-hub https://github.com/lupkon21/figma_json_getter.git`

2. Change your current working directory  
`cd figma_json_getter`

3. Run the app using Docker Compose  
`docker-compose up`

4. Visit localhost on port 3000 in your browser  
`localhost:3000`

### Option 2️⃣ - build Docker images locally
1. Clone this repository  
`git clone https://github.com/lupkon21/figma_json_getter.git`

2. Change your current working directory  
`cd figma_json_getter`

3. Run the app using Docker Compose  
`docker-compose up`

4. Visit localhost on port 3000 in your browser  
`localhost:3000`

> This project is not affiliated with Figma.  
> Thanks for reading!
