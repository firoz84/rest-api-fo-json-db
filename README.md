## Rest Api 

this is our rest api 

## At First install the package

```console
$ npm install
```

## our server commend 

```setup

const express= require('express');
const dotenv= require('dotenv').config();


const PORT= process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : false}));

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})

```