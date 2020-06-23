# desafio-cielo-frontend
Esse projeto corresponde a etapa de desafio no processo seletivo da Cielo

## Dependências para build
1. Node 10+
2. Agular CLI
3. Docker

## Tecnologias Utilizadas
1. Angular 9
2. Bootstrap 4

## Run local
1. npm install
2. ng serve --open
3. <a href="http://localhost:4200">http://localhost:4200</a>

## Docker Build
1. docker build -t desafio-cielo-frontend .
2. docker run --name desafio-cielo-frontend -d -p 5000:80 desafio-cielo-backend:latest
3. <a href="http://localhost:5000">http://localhost:5000</a>
