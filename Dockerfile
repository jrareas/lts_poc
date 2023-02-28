FROM mcr.microsoft.com/dotnet/sdk:6.0 AS debug
WORKDIR /app
COPY ./apps/surveys-api/surveys-api.csproj /app
RUN dotnet tool install dotnet-ef --global --version 6.0.2
RUN dotnet restore
COPY ./apps/surveys-api/ /app

RUN mkdir /out/
RUN dotnet publish --no-restore --output /out/ --configuration Development

#RUN dotnet build ./surveys-api/surveys-api.csproj -o /app/dist
RUN apt-get update
RUN apt-get install -y procps
RUN apt-get install -y unzip
RUN curl -sSL https://aka.ms/getvsdbgsh | /bin/sh /dev/stdin -v latest -l ~/vsdbg
RUN dotnet dev-certs https
EXPOSE 7024
CMD dotnet run
# CMD dotnet /app/dist/surveys-api.dll

FROM debug as base
CMD dotnet /app/dist/surveys-api.dll

FROM node AS angular
RUN npm install -g @angular/cli