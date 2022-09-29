
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  const apiKey = "vDsILmZXZ0He7zVUvXAyc30O3JxE7277";
  const from = req.body.from;
  const to = req.body.to;
  const date = req.body.date;
  const amount = 1;
  const url = "https://api.apilayer.com/fixer/convert?from=" + from + "&to=" + to + "&amount=" + amount + "&date=" + date + "&apikey=" + apiKey;

  https.get(url, function(response){
    response.on("data", function(data){
      const currencyData = JSON.parse(data);
      console.log(currencyData);
      const rate = currencyData.info.rate;
        res.render("mainChart", {from: from, to: to, rate: rate});
    });
  });

});

// no need
app.get("/chart", function(req, res){
  // res.sendFile(__dirname + "/chart.html");
  // res.render("mainChart");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
