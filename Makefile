set_pwd:
	PWD=`pwd`

eslint:
	docker run -v `pwd`:/app -w /app/apps/surveys-ui-angular -ti node /app/bin/docker-lint-init.sh

npm-install:
	docker run -v `pwd`:/app -w /app/apps/surveys-ui-angular -ti node npm install