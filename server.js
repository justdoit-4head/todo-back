// const express = require('express')
// const mongoose = require('mongoose')


// const cors = require('cors')

import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())



mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:9UfkfrXls7Npcgi2@todo.prr5owq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=> {console.log('connected to the database')})
.then(()=>{app.listen(5000, ()=>{console.log('server running on port 5000 bruv')})})

// Models
import Todo from './models/Todo.js'

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
})

app.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;

	todo.save();

	res.json(todo);
});
