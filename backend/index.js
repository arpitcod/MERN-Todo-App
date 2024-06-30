import express from 'express';
import todoRoutes from './routes/todoRoutes.js'
import connectDb from './db/db.js';
import cors from 'cors'


// connect database 
connectDb();


const app = express();
const port = 2024;


app.use(express.json());
app.use(cors())
app.use('/api/todo',todoRoutes);




app.get('/',(rq,rs)=>{
    rs.status(200).send("hare krishna")
})




app.listen(port,()=>{
    console.log(`your server running on port --> ${port} `)
})

 
