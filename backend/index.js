//import works only when package.json has "type": "module"
import express from 'express';
import mysql from 'mysql2';

const app = express();
app.use(express.json())//used to to send json data to server
const port = 8800;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vikram@123',
    database: 'test'
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET ALL USERS
app.get('/api/users',(req,res)=>{
    const q= 'SELECT * FROM users';
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

//CREATE USER
app.post('/api/users',(req,res)=>{
    const q = 'INSERT INTO users (username,email,password) VALUES (?)'
    const values=[
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User registered");
    })
    // res.json(req.body);
})

//DELETE USER
app.delete("/api/:id",(req,res)=>{
    const q = 'DELETE FROM users WHERE id = ?'
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User deleted");
    })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});