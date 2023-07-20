import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

let tasks = [];

const addTask = (description) => {
    const task = {
        id: tasks.length + 1,
        description,
        completed: false,
    };
    tasks.push(task);
    console.log(`Tarea "${description}" añadida.`);
};

// Resto del código del servidor...

app.get('/sripts/menuTask.js', (req, res) => {
    res.json(tasks);
});

const saveTasks = () => {
    const data = JSON.stringify(tasks);
    fs.writeFileSync('tasks.json', data);
};

const loadTasks = () => {
    try {
        const data = fs.readFileSync('tasks.json');
        tasks = JSON.parse(data);
        console.log('Tareas cargadas.');
    } catch (error) {
        console.log('No se pudo cargar las tareas.');
    }
};

// Resto del código del servidor...

loadTasks();

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
