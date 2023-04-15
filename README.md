### Templating Engines

integrating-templating-into-RESTful-APIs branch

To open sql:
mysql -uroot

show databases;

USE <database name>;
USE asl_project;

show tables;

npx sequelize-cli model:generate --name=Quiz --attributes=name:string,weight:integer

npx sequelize-cli model:generate --name=Question --attributes=name:string

npx sequelize-cli model:generate --name=Choice --attributes=name:string

After creating model, run the command:
npx sequelize-cli db:migrate
to add them to the sql tables 