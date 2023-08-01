const express = require('express');
const app = express();
const { addData, updateData, deleteData, getData, searchData } = require('../Mongoose - CRUD/mongoose');

app.use(express.json());

app.get('/api/getData', async (req, res) => {
    const result = await getData();
    res.json(result);
})

app.post('/api/addData', async (req, res) => {
    const result = await addData(req.body);
    res.json(result);
})

app.put('/api/updateData/:id', async (req, res) => {
    const result = await updateData(req.params.id, req.body);
    res.json(result);
})

app.delete('/api/deleteData/:id', async (req, res) => {
    const result = await deleteData(req.params.id);
    res.json(result);
})

app.get('/api/getData/:key', async (req, res) => {
    const result = await searchData(req.params.key);
    res.json(result);
})

app.listen(3000, () => console.log("Server ready at : http://localhost:3000"));