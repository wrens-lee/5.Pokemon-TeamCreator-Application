import express from 'express';
//still need to import router

const app = express();
const port = process.env.PORT || 3000;

//so that server knows how to read the json React sends
app.use(express.json());

app.listen(port, (err)=>{
    if(err){
        throw err;
    }
    console.log(`Express app is listening on port ${port}`);
});