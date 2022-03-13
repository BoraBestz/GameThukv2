const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "vhaithj2ezjri3a5",
  host: "l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  password: "htf06l6xp0gsgoei",
  database: "bovesv3pjmkwzex5",
});
module.exports = mysql;

//listgamename picture price
app.get("/games_data", (req, res) => {
    db.query("SELECT gd.game_id,gd.game_name,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) group by gd.game_id", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

//listpicturegame
app.get("/games_media", (req, res) => {
  db.query("SELECT * FROM games_media", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//listpricegame
app.get("/games_price_home", (req, res) => {
  db.query("SELECT pc.game_id,pc.now_price FROM price_check pc INNER JOIN games_data gd on (gd.game_id = pc.game_id", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//searchgame
app.get("/search/:gameName", (req,res) => {
  const gameName = req.params.gameName;
  db.query("SELECT gd.game_id,gd.game_name,gd.game_description,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) WHERE gd.game_name LIKE '%"+gameName+"%' group by gd.game_id ",
   [gameName],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//register
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const conpassword = req.body.conpassword;
  const email = req.body.email;

  db.query(
    "INSERT INTO user_data (username, password, conpassword, email) VALUES (?,?,?,?)",
    [username, password, conpassword, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//login
app.post("/login", (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user_data WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({err:err});
      } 

      if (result.length > 0){
        res.send(result);
        console.log(result)
      } else {
        // res.send({massage:"Wrong username/password"});
        res.status(200).json({ message: 'ไม่พบชื่อผู้ใช้หรือรหัสผ่านผิด' })
        console.log("Wrong username/password")
      }
    }
  );
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});