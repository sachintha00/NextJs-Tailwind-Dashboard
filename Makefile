include .env

.PHONY: ssh
ssh:
	ssh -i $(SSH_PRIVATE_KEY_PATH) ${SSH_USER}@${SSH_IP}

copy-files:
	scp -r -i $(SSH_PRIVATE_KEY_PATH) \
	docker-compose-prod.yml \
	${SSH_USER}@${SSH_IP}:/root/

push:
	ssh-copy-id -i ./ssh/server.pub ${SSH_USER}@${SSH_IP}

build:
	docker build -f ./production.Dockerfile -t ghcr.io/sachintha00/optiomax-app:v1.1.0 .

up:
	VERSION=v1.1.0 docker compose -f docker-compose-prod.yml up -d --build --remove-orphans

down:
	docker compose -f docker-compose-prod.yml down --remove-orphans
