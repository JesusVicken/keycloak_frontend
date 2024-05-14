import express from "express";
const router = express.Router();

let data = {
    'jesus.viccken@gmail.com': [
        'DEV JESUS',
        'documentos',
        'protegidos',
        'pela',
        'rota segura'
        
    ],
    'jorge.canellas@camara.leg.br': [
        'Chefe',
        'Da',
        'Seção',
        'de',
        'Data center'
    ],
};


const getDocuments = async (req, res) => {
    try {
        const email = req.user;

        res.status(200).send(data[email]);
    } catch (err) {
        res.status(500).send(err)
    }
}


router.get('/', getDocuments)

export default router;
