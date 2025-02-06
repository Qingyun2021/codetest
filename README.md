# how to set up
## what you have:
after clone from github, you have
1: fback, this is for back end
2: src, this is for front end
3: package.json: this is for looking up angular version, can ignore it.

## Frontend
download Angular, Node.js
then use command: 
ng new ffront
*ffront is the name of folder, user can replace it with other names.
click on css, click on no server side router

then you get an folder names ffront.

click on this folder, then you see the folder src, just delete the src folder of ffront. 
then copy paste the src folder which you get from github.

## backend
I use Java 17.

## to run the programm:
first in backend terminal(suppose you are in the folder fback):
give command:
mvn spring-boot:run

then in front end terminal (suppose you are in the folder ffront):
ng serve

at end click on the link which pops up in front end terminal, it mostly is: http://localhost:4200

now you could try this program out.
