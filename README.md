
# TODO App




## Frontend Setup

after cloning this repo go inside frontend Folder

```bash
  npm run i
```




## Environment Variables

you will need to add the following environment variables in .env file inside your frontend folder 

`VITE_API_KEY`=localhost:<PORT>/api


## Server Setup

Inside server Folder

```bash
  npm run i
```



## Environment Variables

you will need to add the following environment variables in .env file inside your server folder 

`PORT`=<PORT>

If Your Postgres Takes Passwword 


`DATABASE_URL`="postgresql://username:password@localhost:5432/Todo?schema=public"

Else

`DATABASE_URL`="postgresql://postgres@localhost:5432/Todo?schema=public"




## Migrate Schema Into Your DATABASE

## IMPORTANT!

`npx prisma migrate dev --name init`
