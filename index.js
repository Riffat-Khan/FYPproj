const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app.use(cors({
//     origin :[" http://locahost:5173"],
//     methods : ["POST", "GET"],
//     Credentials : true
// }));

const salt = 10;

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'signup'
});

db.connect((err) => {
    if(err) console.log(err);
    else console.log('Connected...')
})


// app.get('/authCheck' , verifyJWT, (req, res) => {
//     return res.json("Authenticated!");
// });


app.post('/signin', (req, res) =>{
    
    const sql = "SELECT * FROM data WHERE `email` = ?";

    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error : 'Login error in server!'});

        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error : 'Password compare error!'});
                if(response) {
                    const name = data[0].name;
                    const token = jwt.sign({name}, 'jwtSecretKey', {expiresIn: 300});
                    // res.cookie('token', token);
                    return res.json({Status : 'Success'});
                }
                else return res.json({Error : 'Password not matched'})
            })
        }
        else return res.json({Error : 'Email does not exist!'});
    });
});


app.post('/signup', (req, res) =>{
    
    const sql = "INSERT INTO data(`username`, `email`, `password`) VALUES(?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error : 'Error for hashing password!'});

        const VALUES = [
            req.body.username,
            req.body.email,
            hash
        ];

        db.query(sql, [VALUES], (err, result) => {
            if(err) res.json({Error : 'Inserting data Error in the server!'});
            return res.json({Status : 'Success!'});
        });
    })
});

app.listen(3030, () => {
    console.log('Listening...');
});

