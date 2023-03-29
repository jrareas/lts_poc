****Dev Instructions****

This instructions work better if you use WSL. Refer to the docs below to configure your environment to install docker desktop and WSL2. Use Ubuntu 22.04 linux distro

https://docs.docker.com/desktop/windows/wsl/

**Linux Workspce**

After installing WSL in your environment you can open a Linux terminal. For that, just type the command below in a windows powershell:

```wsl```

Now you are inside a Linux terminal but still within a Windows volume.

```/mnt/c/Users/....```

To move to a linux volume and levarage the power of the Linux filesystem, you just need to type the command below from a Linux shell prompt

```cd ~```

you were now taken to the user workspace of your linux filesystem. You can now create a folder under it to hold your projects:

```
mkdir -p Projects/
cd Projects
```

****SSH Key to access Github****
In order to access your repo from github, you will need to create ssh key in your Linux system and save it to your github account. Please refer to the link below:

*Generating SSH KEY(Only required if you dont have it already)*
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

*Adding key to Github*

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

***cloning the project***
```
git clone <path to the project>
```

***Running the application***
Before you run the application you need to make sure dependencies exist in your local machine as they will be mapped to the container. For that run:
```
cd ~/Projects/<project_folder>
make npm-instal
```
Now you can bring up the docker containers as follow
```
docker-compose up
```

*** Accessing the API ***

https://localhost:5001/hello

*** Accessing the Frontend Stub ***

http://localhost:4200


*** install angular modules ***
First get a bash shell with your node environment

```
docker run --rm -ti -v `pwd`:/app -w /app/apps/surveys-ui-angular/ node:latest bash
```
When a bash prompt opens up, install angular client as below:

```
npm install -g @angular/cli
```

Install module:

```ng generate component 
ng generate module app-routing --flat --module=app
```