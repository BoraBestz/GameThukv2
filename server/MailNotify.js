// main.js
const nodemailer = require("nodemailer");
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
db.query(
  "SELECT ul.game_id,gd.game_name,ul.sale_price ,min(pc.now_price)as lowest_price,pc.market_url,email FROM user_library ul inner join games_data gd on (gd.game_id = ul.game_id ) inner join price_check pc on (gd.game_id = pc.game_id ) inner join user_data ud on (ud.user_id = ul.user_id ) WHERE ud.username  LIKE 'xcxzzxbest' and ul.sale_price > pc.now_price and pc.now_price > 0 and pc.market_id != '11' group by gd.game_id",
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      const email = result[0].email;
      const gameName = result[0].game_name;
      const gamePrice = result[0].lowest_price;
      const gameUrl = result[0].market_url;
      if (email != null) {
        // setup mail transporter service
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "gamethukbot@gmail.com", // your email
            pass: "GameThuk55!", // your password
          },
        });

        // setup email data with unicode symbols
        const mailOptions = {
          from: '"GameThuk 🎮" <gamethukbot@gmail.com>', // sender
          to: email, // list of receivers
          subject: "กำลังมีเกมที่คุณติดตามลดราคา!", // Mail subject
          html: "<b>เกม "+gameName+" กำลังลดราคาเหลือ "+gamePrice+" บาท"+"</b>"+ "<br> ซื้อเลยที่เว็บ: "+gameUrl, // HTML body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) console.log(err);
          else console.log(info);
        });
        
      }
    }
  }
);
