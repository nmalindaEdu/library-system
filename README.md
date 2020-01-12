# library-system
clone repo

## Backend
get backend to the terminal

### Install dependencies
###### yarn

### Make a mysql database named 'lms'
### Use below given envirenmantal variables

##### DATABASE_HOST = 127.0.0.1
##### DATABASE_USER = root
##### DATABASE_PASSWORD = 123
##### DATABASE_NAME = lms

### Make tables
###### yarn global add knex
###### yarn knex migrate:latest
       
### Add initial data
###### yarn knex seed:run

### Run the server
###### yarn dev

## Frontend
get frontend to the terminal

### Install dependencies
###### yarn

### Run the server
###### yarn start
