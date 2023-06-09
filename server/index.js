import express from 'express';
import mongoose from 'mongoose';
import router from './routers/user-route';
import carsRouter from './routers/car-route';
import cors from 'cors'

const app = express();
app.use(cors())
mongoose.connect('mongodb+srv://Naveen:Naveen123@cluster0.jjdwkie.mongodb.net/?retryWrites=true&w=majority')
    .then(() => app.listen(5000)).then(
        () => console.log("mongoose and server at 5000 is connect")
    ).catch((err) => console.log(err))

app.use(express.json());
app.use("/api/user", router);
app.use("/api/car", carsRouter);

// MitRPx9TqYBEpviH