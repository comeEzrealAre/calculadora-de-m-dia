var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());


app.get('/calculadorademedia/:nome/:nota1/:nota2', function (req, res) {
    {
        var algumnome, nt1, nt2

        algumnome = req.params.nome
        nt1 = parseFloat(req.params.nota1)
        nt2 = parseFloat(req.params.nota2)
        var media = (nt1 + nt2) / 2

        if (media >= 5)
            msg = algumnome + ' aprovado!'
        else
            msg = algumnome + ' reprovado!'


        var dados = [{
            nome: algumnome,
            nota1: nt1,
            nota2: nt2,
            media: media,
            mensagem: msg

        }

        ];


        res.send(JSON.stringify(dados));
    }
});



app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000.');
});