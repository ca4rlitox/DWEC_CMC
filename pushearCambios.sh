#!/bin/bash

set -e

COMMIT_MSG="$1"

if [ -z "$COMMIT_MSG" ]; then
    read -p "Introduce el mensaje para el commit: " COMMIT_MSG
fi

if [ -z "$COMMIT_MSG" ]; then
    echo "Error: El mensaje del commit no puede estar vacio."
    exit 1
fi

BRANCH=$(git branch --show-current)

if [ -z "$BRANCH" ]; then
    echo "Error: No estas dentro de un repositorio de Git activo."
    exit 1
fi

git add .
git commit -m "$COMMIT_MSG"
git push origin "$BRANCH"

echo "Proceso completado"

