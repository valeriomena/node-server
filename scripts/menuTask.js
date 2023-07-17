import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

const addTask = (description) => {
    const task = {
        id: tasks.length + 1,
        description,
        completed: false
    };
    tasks.push(task);
    console.log(`Tarea "${description}" añadida.`);
};

const removeTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Tarea con id ${id} eliminada.`);
};

const completeTask = (id) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Tarea con id ${id} completada.`);
    } else {
        console.log(`No se encontró tarea con id ${id}.`);
    }
};

const showTasks = () => {
    console.log('Lista de tareas:');
    tasks.forEach(task => {
        const status = task.completed ? '[X]' : '[ ]';
        console.log(`${status} ${task.id}. ${task.description}`);
    });
};

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

const menu = () => {
    console.log(`
Menú:
1. Añadir tarea.
2. Eliminar tarea.
3. Completar tarea.
4. Mostrar tareas.
5. Salir.
`);
};

rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            rl.question('Descripción de la tarea: ', addTask);
            break;
        case '2':
            rl.question('Id de la tarea a eliminar: ', removeTask);
            break;
        case '3':
            rl.question('Id de la tarea a completar: ', completeTask);
            break;
        case '4':
            showTasks();
            break;
        case '5':
            saveTasks();
            rl.close();
            break;
        default:
            console.log('Opción inválida.');
            menu();
            break;
    }
});

loadTasks();
menu();
