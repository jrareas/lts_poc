set_pwd:
	PWD=`pwd`

eslint: set_pwd
	docker run -v ${PWD}:/app -w /app/apps/surveys-ui-angular -ti node /app/bin/docker-lint-init.sh

npm-install: set_pwd
	docker run -v ${PWD}:/app -w /app/apps/surveys-ui-angular -ti node npm install