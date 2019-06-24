var mysql=require(`mysql`);
var express=require(`express`);
var app=express();
app.use(express.json());

var mysqlConnection = mysql.createConnection ({
host:'localhost',
user:'root',
password :'abhishekb@dwise',
database:'Organisation_structure',
});
mysqlConnection.connect((err)=>{
if(!err)
console.log('DB connection succeded.');
else
console.log('DB connection failed\n error:');
});




app.get('/employees',(req,res)=>{
    mysqlConnection.query('SELECT*FROM Office',(err,rows,columns)=>{
    if(!err)
    res.json(rows);
    else
    status(400).json(err);
    });
    });

    

app.listen(3000,()=>console.log('express server is running at port no:3000'));


