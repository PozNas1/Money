const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.use(express.static('public'));

app.get('/getCurrancyRate', function(req, res) {
    let AllRatesByDate = [];

    console.log(req.query.date);
    console.log("Hi, lol");
    AllRatesByDate.push(FindRateByDate(currency1, req.query.date));
    AllRatesByDate.push(FindRateByDate(currency2, req.query.date));
    console.log(AllRatesByDate);
    res.json(AllRatesByDate);
});

const currency1 = [
                    {
                        "date": "01.01.2001",
                        "rate": 100,
                        "curencyID": 1
                    },
                    {
                        "date": "01.01.2000",
                        "rate": 10,
                        "curencyID": 1
                    }
                ];

const currency2 = [
                    {
                        "date": "01.01.2000",
                        "rate": 50,
                        "curencyID": 2
                    },
                    {
                        "date": "01.01.2002",
                        "rate": 5,
                        "curencyID": 2
                    }
                ];

function FindRateByDate (array, date) {
    let result = {}, max = "01-01-1970";
    for(let i = 0; i < array.length; i++){
        if(Date.parse(array[i].date) === Date.parse(date)) {
            result = array[i];
        } else if((Date.parse(array[i].date) < Date.parse(date)) && (Date.parse(max) < Date.parse(array[i].date))) {
            max = array[i].date;
            result = array[i];
        }
    }
    return result;
};





 