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

//listAllNewGame
app.get("/games_new_all", (req, res) => {
  db.query(
    "SELECT gd.game_id,gd.game_name,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) WHERE pc.now_price > 0 group by gd.game_id order by date desc ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//listNewGame TOP 12
app.get("/games_new_top12", (req, res) => {
  db.query(
    "SELECT gd.game_id,gd.game_name,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) WHERE pc.now_price > 0 group by gd.game_id order by date desc LIMIT 0, 12 ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//listClick_CountAllGame
app.get("/click_count_all", (req, res) => {
  db.query(
    "SELECT gd.game_id,gd.game_name,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) WHERE pc.now_price > 0 group by gd.game_id order by click_count desc ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//listClick_CountGame TOP 12
app.get("/click_count_top12", (req, res) => {
  db.query(
    "SELECT gd.game_id,gd.game_name,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) WHERE pc.now_price > 0 group by gd.game_id order by click_count desc LIMIT 0, 12",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//searchgame
app.get("/search/:gameName", (req, res) => {
  const gameName = req.params.gameName;
  db.query(
    "SELECT gd.game_id,gd.game_name,gd.game_description,gm.game_image,min(pc.now_price) as now_price FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) WHERE gd.game_name LIKE '%" +
      gameName +
      "%' group by gd.game_id ",
    [gameName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//gameDetail
app.get("/gameprice/:gameName", (req, res) => {
  const gameName = req.params.gameName;
  db.query(
    "SELECT gd.click_count,gd.game_id,gd.game_name,gd.game_description,gd.release_date,gd.developer,gd.publisher,gd.required_age,gm.screenshots_1,gm.screenshots_2,gm.screenshots_3,gm.screenshots_4,screenshots_5,movies,min(pc.now_price) as lowest_price,gs.spec_minimum,gs.spec_recommend FROM games_data gd INNER JOIN games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) INNER JOIN games_spec gs on (gs.game_id = gd.game_id) WHERE gd.game_name LIKE '%" +
      gameName +
      "%' and pc.now_price > 0 group by gd.game_id ",
    [gameName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//gamecount
app.get("/gamecount/:gameName", (req, res) => {
  const gameName = req.params.gameName;
  db.query(
    "UPDATE games_data SET click_count = click_count+1 WHERE game_name LIKE '%" +
      gameName +
      "%'",
    [gameName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//gameTagsList
app.get("/tagsList/:gameName", (req, res) => {
  const gameName = req.params.gameName;
  db.query(
    "SELECT gt.tag_id,td.tag_name,gd.click_count  FROM games_data gd INNER JOIN games_tags_data gt on (gd.game_id = gt.game_id) INNER JOIN tags_data td on (gt.tag_id =  td.tag_id ) WHERE gd.game_name LIKE '%" +
      gameName +
      "%' ",
    [gameName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//gamePriceList
app.get("/priceList/:gameName", (req, res) => {
  const gameName = req.params.gameName;
  db.query(
    "SELECT md.market_id,before_price,now_price,market_url,md.market_name FROM games_data gd INNER JOIN price_check pc on (pc.game_id = gd.game_id) INNER JOIN market_data md on (pc.market_id =  md.market_id ) WHERE gd.game_name LIKE '%" +
      gameName +
      "%' ",
    [gameName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//gameTagSearch
app.get("/gameTagSearch/:gameTag", (req, res) => {
  const gameTag = req.params.gameTag;
  db.query(
    "select gd.game_name,gm.game_image,min(pc.now_price) as now_price from games_data gd inner join games_tags_data gtd on (gd.game_id=gtd.game_id) inner join tags_data td on (gtd.tag_id = td.tag_id ) inner join games_media gm on (gd.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gd.game_id) where td.tag_name LIKE '%" +
      gameTag +
      "%' group by gd.game_id  ",
    [gameTag],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//subscribeGame
app.post("/subscribeGame", (req, res) => {
  const gameId = req.body.gameId;
  const gamePrice = req.body.gamePrice;
  const userId = req.body.userId;
  db.query(
    "INSERT INTO user_library (game_id, need_price, user_id) VALUES (?,?,?)",
    [gameId, gamePrice, userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//getDataFavoriteGame
app.post("/getDataFavoriteGame", (req, res) => {
  const gameId = req.body.gameId;
  const userId = req.body.userId;
  db.query(
    "SELECT * FROM user_library WHERE game_id = ? and user_id = ? ",
    [gameId, userId],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
        console.log(result);
      } else {
        res.status(200).json({ message: "คุณติดตามเกมไว้อยู่แล้ว" });
        console.log("คุณติดตามเกมไว้อยู่แล้ว");
      }
    }
  );
});

//favoriteGame
app.get("/favoriteGame/:userId", (req, res) => {
  const userId = req.params.userId;
  db.query(
    "select gd.game_id,gd.game_name,gm.game_image,min(pc.now_price) as lowest_price,ul.need_price,ul.user_id from user_library ul inner join games_media gm on (ul.game_id=gm.game_id) INNER JOIN price_check pc on (pc.game_id = gm.game_id) INNER JOIN user_data ud on (ud.user_id = ul.user_id) INNER JOIN games_data gd on (gd.game_id  = gm.game_id) where ul.user_id LIKE '%" +
      userId +
      "%' and pc.now_price > 0 group by gd.game_id",
    [userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//deleteFavoriteGame
app.post("/deleteFavoriteGame", (req, res) => {
  const gameId = req.body.gameId;
  const userId = req.body.userId;
  db.query(
    `Delete FROM user_library WHERE game_id = ${gameId} and user_id = ${userId} `,
    [gameId, userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//updatePriceNotifyGame
app.post("/updatePriceNotifyGame", (req, res) => {
  const userNeedPrice = req.body.userNeedPrice;
  const gameId = req.body.gameId;
  const userId = req.body.userId;
  db.query(
    `UPDATE user_library SET need_price = ${userNeedPrice} WHERE game_id = ${gameId} and user_id = ${userId} `,
    [userNeedPrice, gameId, userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//findUser
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  db.query(
    "SELECT user_id FROM user_data gd WHERE username LIKE '" + username + "' ",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
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

//checkRegister
app.get("/checkRegister/:email", (req, res) => {
  const email = req.params.email;
  db.query(
    "SELECT * FROM user_data gd WHERE email LIKE '" + email + "' ",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //  res.send(result);
        if (result.length > 0) {
          res.status(200).json({ message: "พบอีเมล์" });
        } else {
          res.send(result);
          console.log(email);
        }
      }
    }
  );
});

//login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user_data WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
        console.log(result);
      } else {
        // res.send({massage:"Wrong email/password"});
        res.status(200).json({ message: "ไม่พบชื่อผู้ใช้หรือรหัสผ่านผิด" });
        console.log("Wrong email/password");
      }
    }
  );
});

//sendEmailNotify
app.get("/sendEmail/:userName", (req, res) => {
  const userName = req.params.userName;
  db.query(
    "SELECT email FROM user_data gd WHERE username LIKE '" + username + "' ",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
