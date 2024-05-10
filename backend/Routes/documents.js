import express from "express";
const router = express.Router();

let data = ['oi', 'documentos',  'aleatórios', 'importantes'];

const getDocuments = async (req, res) => {
    try {
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err)
    }
}


router.get('/',getDocuments)

export default router;
