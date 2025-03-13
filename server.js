const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`)
const app = express();
const port = 3000;

// la lecture de JSON dans les requetes
app.use(express.json());

// ceci va permettre d'eviter les erreurs de cors 
app.use(cors());


// connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/taskDB')
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.error("Erreur de connexion", err));

// je defini le modele de tache
const Task = mongoose.model(`Task`, {
    title: String
});


// Route pour ajouter les taches
app.post(`/tasks`, async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: `Le title du tache est obligatoire` });
    }
    const newTask = new Task({ title });
    // nous allons sauvegarder dans MongoDB avec
    await newTask.save();
    res.status(200).json(newTask);
})

// Route pour lire les taches avec (GET/tasks) sauvegardee dans MongoDB
app.get(`/tasks`, async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Afficher une tâche spécifique (GET /tasks/:id)

app.get(`/tasks/:id`, async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(400).json({ message: `Tache non trouvé!` })
    }
    res.json(task);
})

// Modifier une tâche (PUT /tasks/:id)
app.put(`/tasks/:id`, async (req, res) => {

    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: `vous devez ajouter une tache` });
    }
    const task = await Task.findByIdAndUpdate(req.params.id, { title }, { new: true });
    if (!task) {
        return res.status(400).json({ message: `Tache non trouvé!` })
    }
    res.json(task);
})

// Supprimer une tâche (DELETE /tasks/:id)
app.delete(`/tasks/:id`, async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    // on va d'abord verifier si la tache existe
    if (!task) {
        return res.status(400).json({ message: `Tache non trouvé!` });
    }
    res.json({ message: `Tache supprimée avec succes` });

});

// Je demarre le serveur
app.listen(port, () => {
    console.log(`Votre serveur est en cours d'execution sur http://localhost:${port}`);

})