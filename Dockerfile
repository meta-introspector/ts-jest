FROM node:20

#run yarn add "https://github.com/meta-introspector/jest.git#main"
#run yarn add "https://github.com/meta-introspector/ts-jest.git#main"

run apt update
run apt install -y git
run npm install -g npm@10.8.3

WORKDIR /opt/ts-jest/
add . .
run yarn install
