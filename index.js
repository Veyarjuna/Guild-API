import express from "express";
import cors from "cors";
import UserRoute from "./routers/UserRoute.js";
import RankRoute from "./routers/RankRoute.js";
import RankPointUser from "./routers/RankPointUserRoute.js";
import JobDesk from "./routers/JobDeskRoute.js";
import JobClass from "./routers/JobClassRoute.js";
import Menu from "./routers/MenuRoute.js";

const port = 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));

app.use(UserRoute);
app.use(RankRoute);
app.use(RankPointUser);
app.use(JobDesk);
app.use(JobClass);
app.use(Menu);

app.listen(port, () => console.log(`Server started on port ${port}`));