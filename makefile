.PHONY: install start stop restart test clean build

install: start
	docker-compose exec node npm install


start:
	docker-compose up --detach node

stop:
	docker-compose down --rmi local --remove-orphans --volumes

restart: stop start

test: start
	docker-compose exec node npm test

clean: start
	docker-compose exec node rm -rf .config .node_repl_history .npm .nyc_output node_modules

build: start
	docker-compose exec node npm run build
