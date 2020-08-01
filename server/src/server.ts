import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";

const app = express();


mongoose.connect('mongodb://localhost:27017/nome-data-base', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

app.use(express.json());
app.use(routes);
app.use(cors());


app.listen(3333);