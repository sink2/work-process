import express from 'express';
import test from './config/config'

const app = express();

//Set 
app.use(express.static('src'))

// app.listen(3000)

console.log(test('aaa').get('a'))