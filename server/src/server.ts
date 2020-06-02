import express from 'express';

const app = express();

app.get('/users', (request,response)=>{
    console.log('listagem de  usuarios')
    response.json(['jorge','cassio','rita','gerson'])
})

app.listen(3333)