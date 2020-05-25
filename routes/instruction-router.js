const router = require('express').Router();
const Instructions = require('../config/instruction-config');

router.get('/', (req, res) => {
    Instructions.find()
        .then(instruction => {
            res.status(200).json(instruction)
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to retrieve instructions'})
        })
})


router.get('/:id', (req, res) => {
    const { id } = req.params;
    Instructions.findById(id)
        .then(instruction => {
            res.status(200).json(instruction)
        })
        .catch(err => {
            res.status(500).json({ message:'Unable to retrieve any instruction with that id'})
        })
});

router.post('/', (req, res) => {
    const newInstruction = req.body;
    Instructions.add(newInstruction)
        .then(instruction => {
            res.status(201).json({ Added: instruction})
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to add instruction'})
        })
})


router.put ('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Instructions.update(id, changes)
        .then(instruction =>{
            res.status(200).json({ Updated: `instruction_id ${id}`})
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to update that instruction'})
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Instructions.remove(id)
    .then(instruction =>{
        res.status(200).json({ Deleted: `instruction_id ${id}`})
    })
    .catch(err => {
        res.status(500).json({message: 'Unable to delete that instruction'})
    })
})

module.exports = router;