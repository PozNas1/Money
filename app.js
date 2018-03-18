const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.use(express.static('public'));

app.get('/getCurrancyRate', function(req, res) {
    const AllCurrency = [currency1, currency2, currency3, currency4, currency5];
    let AllRatesByDate = [];

    console.log(req.query.date);
    console.log("Hi, lol");
    for(let i = 0; i < AllCurrency.length; i++){
        AllRatesByDate.push(FindRateByDate(AllCurrency[i], req.query.date))
    }
    console.log(AllRatesByDate);
    res.json(AllRatesByDate);
});

const currency1 = [
                    {
                        "date": "01-01-2001",
                        "rate": 100,
                        "curencyID": 1
                    },
                    {
                        "date": "01-01-2000",
                        "rate": 10,
                        "curencyID": 1
                    },
                    {
                        "date": "01-01-2005",
                        "rate": 150,
                        "curencyID": 1
                    },
                    {
                        "date": "01-01-2010",
                        "rate": 150,
                        "curencyID": 1
                    },
                    {
                        "date": "01-01-2015",
                        "rate": 25,
                        "curencyID": 1
                    }
                ];

const currency2 = [
                    {
                        "date": "01-01-2000",
                        "rate": 50,
                        "curencyID": 2
                    },
                    {
                        "date": "01-01-2002",
                        "rate": 5,
                        "curencyID": 2
                    },
                    {
                        "date": "01-01-2005",
                        "rate": 55,
                        "curencyID": 2
                    },
                    {
                        "date": "01-01-2010",
                        "rate": 550,
                        "curencyID": 2
                    },
                    {
                        "date": "01-01-2015",
                        "rate": 300,
                        "curencyID": 2
                    }
                ];

const currency3 = [
                    {
                        "date": "01-01-2000",
                        "rate": 200,
                        "curencyID": 3
                    },
                    {
                        "date": "01-01-2005",
                        "rate": 20,
                        "curencyID": 3
                    },
                    {
                        "date": "01-01-2007",
                        "rate": 25,
                        "curencyID": 3
                    },
                    {
                        "date": "01-01-2010",
                        "rate": 250,
                        "curencyID": 3
                    },
                    {
                        "date": "01-01-2015",
                        "rate": 200,
                        "curencyID": 3
                    }
                ];

const currency4 = [
                    {
                        "date": "01-01-2000",
                        "rate": 150,
                        "curencyID": 4
                    },
                    {
                        "date": "01-01-2004",
                        "rate": 2,
                        "curencyID": 4
                    },
                    {
                        "date": "01-01-2005",
                        "rate": 22,
                        "curencyID": 4
                    },
                    {
                        "date": "01-01-2010",
                        "rate": 220,
                        "curencyID": 4
                    },
                    {
                        "date": "01-01-2015",
                        "rate": 222,
                        "curencyID": 4
                    }
                ];

 const currency5 = [
                    {
                        "date": "01-01-2000",
                        "rate": 4000,
                        "curencyID": 5
                    },
                    {
                        "date": "01-01-2006",
                        "rate": 40,
                        "curencyID": 5
                    },
                    {
                        "date": "01-01-2005",
                        "rate": 45,
                        "curencyID": 5
                    },
                    {
                        "date": "01-01-2010",
                        "rate": 450,
                        "curencyID": 5
                    },
                    {
                        "date": "01-01-2015",
                        "rate": 400,
                        "curencyID": 5
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





