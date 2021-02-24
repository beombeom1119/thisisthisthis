const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql =require('mysql');

const connection =mysql.createConnection({
	host:conf.host,
	user: conf.user,
	password: conf.password,
	port:conf.port,
	database : conf.database
});
connection.connect();

const multer = require('multer');
const { query } = require('express');
const upload = multer({dest:'./upload'})


app.get('/api/customers',(req, res)=> {
    connection.query(
		"SELECT * FROM m_Tcheck",
		(err, rows, fields) => {
			try {
			res.send(rows);		
			} catch (error) {
			console.log("!!!!!!오류입니다.")	
			}
		
		}
	);
}
);

	app.get('/api/login/:userNum',(req, res)=> {
		connection.query(
			"SELECT * FROM m_Tcheck WHERE userNum = ? ",
			(err, rows, fields) => {
				console.log(rows)
				try {
				res.send(rows);		
				} catch (error) {
				console.log("!!!!!!오류입니다.")	
				}
			
			}
		);
	}
	);
	


	app.use('/image',express.static('./upload'));

	app.post('/api/customers',upload.single('image'),(req,res)=> 
	{
		console.log("!!!");
		let sql = "insert into m_Tcheck values (null,?,?,?,NOW())";
		// let image ='/image/' + req.file.filename;
		let id = req.body.name;
		let userNum =req.body.userNum;
		let distance = req.body.distance;
		let depth = req.body.depth;
		let date = req.body.date;
		let params = [userNum , distance, depth];
		connection.query(sql, params,
			(err,rows,fields)=> {
				res.send(rows);
				console.log(err)
				console.log(rows)
			})
	}
	
	)




app.listen(port, ()=> console.log('잘 돌아갑니다!!!.'))