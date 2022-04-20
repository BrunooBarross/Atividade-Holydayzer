import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.get("/holidays", (req, res) => {
    res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
    let hoje = new Date();
    hoje = hoje.toLocaleDateString('en-us');
    for(let i = 0; i<holidays.length; i++) {
        if(holidays[i].date === hoje){
            return res.send(`Sim hoje é ${holidays[i].name}`);
        }
    }
    return res.send('Não, hoje não é feriado');
});

app.get("/holidays/:idDoMes", (req, res) => {
    const id = parseInt(req.params.idDoMes);
    if(id === 1){res.send("Janeiro");}
    if(id === 2){res.send("Fevereiro");}
    if(id === 3){res.send("Março");}
    if(id === 4){res.send("Abril");}
    if(id === 5){res.send("Maio");}
    if(id === 6){res.send("Junho");}
    if(id === 7){res.send("Julho");}
    if(id === 8){res.send("Agosto");}
    if(id === 9){res.send("Setembro");}
    if(id === 10){res.send("Outubro");}
    if(id === 11){res.send("Novembro");}
    if(id === 12){res.send("Dezembro");}
});

app.listen(5000);