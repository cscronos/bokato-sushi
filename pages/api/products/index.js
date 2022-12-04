import { pool } from "../../../config/db";

export default async function handler (req, res){
    switch (req.method) {
        case 'GET':
            return await getProduct(req, res)
        case 'POST':
            return await saveProduct(req, res)
        default:
            break
    }
}

const getProduct = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `donTito`')
    return res.status(200).json(result)
}

const saveProduct = async (req, res) => {
    console.log("INSERT =>");
    const {id, name, cientos, costo} = req.body
    const [result] = await pool.query('INSERT INTO donTito set ?',{
        id,
        name,
        cientos,
        costo,
    })
    // console.log(req.body);
    return res.status(200).json(result)
}