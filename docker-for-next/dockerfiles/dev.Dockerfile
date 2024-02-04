FROM node:18-alpine AS base

WORKDIR /app

RUN sed -i 's/^node:x:1000:1000:/node:x:NEW_UID:NEW_GID:/g' /etc/passwd && \
    sed -i 's/^node:x:1000:/node:x:NEW_GID:/g' /etc/group

RUN sed -i 's/^root:x:1000:1000:/root:x:NEW_UID:NEW_GID:/g' /etc/passwd && \
    sed -i 's/^root:x:1000:/root:x:NEW_GID:/g' /etc/group

