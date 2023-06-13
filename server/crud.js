// CREATE READ UPDATE DELETE JS
const express = require('express');
const app = express();

app.use(express.json());
let ulTask = [];
                                // Routes
// All Tasks 
app.get('/ulTask', (req , res) =>{
    res.json(ulTask);
});
// Create task
app.get('/ulTask', (req , res) =>{
    const newTask = req.body;
    ulTask.push(newTask);
    res.status(201).json(newTask);
});
// Edits 
app.put('/ulTask/:id', (req, res) =>{
    const taskID = req.params.id;
    const updatedTask = req.body;
    ulTask[taskID] = updatedTask;
    res.json(updatedTask);
});
// Deletes
app.delete('/ulTask/:id', (req, res) =>{
    const taskID = req.params.id;
    ulTask.splice(taskID, 1);
    res.sendStatus(204);
});
app.listen(3000, () => {
    console.log('Server up and running on Port 3000')
});