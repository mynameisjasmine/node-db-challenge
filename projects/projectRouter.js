const express = require('express');

const Projects = require('./project-model.js');
const router = express.Router();

//GET projects
router.get('/', (req, res) => {
Projects.find()
.then(projects => {
res.status(200).json(projects)
})
.catch(err => {
res.status(500).json({error: "Failed to retrieve projects"})
 });
})

//GET projects by ID
router.get('/:id', (req, res) => {
Projects.findById()
.then(project => {
res.status(200).json(project)   
})
.catch(err => {
res.status(500).json({error: "Failed to retrieve project with given id"})
 });
})

//POST projects
router.post('/', (req, res) => {
const newProject = req.body

Projects.add(newProject)
.then(project => {
res.status(201).json(project)
})
.catch(err => {
res.status(500).json({error: "Failed to post project"})
 });
})

//PUT projects
router.put('/:id', (req, res) => {
const id = req.params.id
const changes = req.body

Projects.findById(id)
.then(project => {
if (project) {
Projects.update(chenges, id)
.then(updateProject => {
res.json(updateProject)
});
} else {
res.status(404).json({error: "Failed to find project with given id"})
}
})
.catch(err => {
res.status(500).json({error: "Failed to update project"})
 });
})




module.exports = router;