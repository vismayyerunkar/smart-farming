const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const InitiateMongoServer = require("./db");
var cors = require('cors');
var nodemailer = require('nodemailer');


// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  
app.post('/sendmail',async (req,res)=>{
  const {alertLabel,alertValue,myMail} = req.body;

  console.log(alertLabel);
  

   const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'uniqueprogrammer4444@gmail.com', // generated ethereal user
              pass: 'ewldhjqwjgdxjcot', // generated ethereal password
            },
    });

    var mailOptions = {
      from: 'procial22@gmail.com',
      to: myMail,
      subject: ` Attention required ! `,
      text: `Warning ! your crops need your attention as ${alertLabel} content level is not as required`
    };

    let info = await transporter.sendMail({
              from: 'procial22@gmail.com', // sender address
              to: myMail,
              subject: ` Attention required ! `,
              html: `Warning ! your crops need your attention as ${alertLabel} content level is not as required
                    Please click this link to visit the sensor values <a href="http://smart-farming-app.netlify.com"}">Verify email</a>
              `, // html body

    });

    console.log(info);
});

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

