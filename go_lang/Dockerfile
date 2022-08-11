FROM golang:alpine AS build

WORKDIR /src

COPY . .

RUN go mod download

RUN go build -o app 

#multistage building
FROM scratch
WORKDIR /
COPY --from=build /src / 
ENTRYPOINT [ "./app" ]
