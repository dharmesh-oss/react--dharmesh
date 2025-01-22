
const express = require("express");
const port = 8081;
const app = express();


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let tasks = [
    { id: 1, task: "phone recharge", completed: false },
    { id: 2, task: "store dilevery", completed: false },
    { id: 3, task: "pack product", completed: false },
    { id: 4, task: "net recharge", completed: false },
    { id: 5, task: "upadate product data", completed: false }
];



app.get("/", (req, res) => {
    return res.render("index", { user:tasks });
});

app.post("/insertData", (req, res) => {
    let obj = {
        id: tasks.length + 1,  
        task: req.body.task,
    };
    tasks.push(obj); 
    return res.redirect("back");
});


app.get("/editData", (req, res) => {
    let taskId = req.query.id;

    let data = tasks.filter((val) => {
        return val.id == taskId;
    });

    return res.render("edit", { user: data[0] });
});


app.post("/editData", (req, res) => {
    let taskId = req.body.id;

    tasks = tasks.map((currentData) => {
        if (currentData.id == taskId) {
            currentData.task = req.body.task;
        }
        return currentData;
    });

    return res.redirect("/");
});

app.get("/deleteData", (req, res) => {
    let taskId = req.query.id;

    tasks = tasks.filter((val) => val.id != taskId);

    return res.redirect("back");
});
app.post("/toggleTask", (req, res) => {
    const taskId = parseInt(req.body.id, 10);
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    res.redirect("/");
});


app.listen(port, (error) => {
    if (error) {
        console.log("Server Not Start");
    }
    console.log("http://localhost:"+port);
});
