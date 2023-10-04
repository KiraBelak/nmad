import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";


export default async function handler(req, res) {
    const { method, body, query } = req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const exp= db.collection("exp");
    switch (method) {
        case "GET":
            try {
                //traer todos los datos de la coleccion
                const data = await exp.find({}).toArray();

                res.status(200).json({ success: true, data: data });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        // case "POST":
        //     try {
               
        //         //crear un identificador unico para el contrato de 6 digitos y asegurarse de que no se repita while
        //         let id = Math.floor(100000 + Math.random() * 900000);
        //         let claves = await contratos.find({ "clave": id }).toArray();
        //         while (claves.length > 0) {
        //             id = Math.floor(100000 + Math.random() * 900000);
        //             claves = await contratos.find({ "clave": id }).toArray();
        //         }
        //         const date = new Date();

        //         //asegurarse de la data que se esta enviando y crear un json con esa data
        //         const info = {
        //             "clave": parseInt(id), 
        //             "titulo": body.titulo,
        //             "descripcion": body.descripcion,
        //             "integrantes": [body.email],
        //             "ingresos": [
        //                 {
        //                     "titulo": "Cartera",
        //                     "transactions": [],
        //                     "icon": "TableCellsIcon",
        //                 },
        //             ],
        //             "egresos": [
        //                 {
        //                     "titulo": "Comida",
        //                     "transactions": [],
        //                     "icon": "RocketLaunchIcon",
        //                 },
        //             ] ,
        //             "creado": date, 
        //             "categorias":{
        //                 "ingreso":[
        //                     {
        //                         "id": uuidv4(),
        //                         "titulo": "Trabajo",
        //                         "icon": "IoIdCardOutline",
        //                     },
        //                     {
        //                         "id": uuidv4(),
        //                         "titulo": "Regalo",
        //                         "icon": "IoGiftOutline",
        //                     },
        //                 ],
        //                 "gasto":[
        //                     {
        //                         "id": uuidv4(),
        //                         "titulo": "Comida",
        //                         "icon": "IoFastFoodSharp",
        //                     },
        //                     {
        //                         "id": uuidv4(),
        //                         "titulo": "Transporte",
        //                         "icon": "IoBusOutline",
        //                     },
        //                     {
        //                         "id": uuidv4(),
        //                         "titulo": "Entretenimiento",
        //                         "icon": "IoGameControllerOutline",
        //                     },
        //                 ]
        //             }
                        
        //         }

        //         // console.log("this is the info: ", info);



        //         const data = await contratos.insertOne(info);
        //         // console.log("this is the data: ", data);
        //         res.status(201).json({ success: true, data: data });
        //     }
        //     catch (error) {
        //         res.status(400).json({ success: false });
        //     }
        //     break;
        //     //agregar un integrante a un contrato existente por la clave del contrato
        // case "PUT":
        //     try {
        //         const { email } = body;
        //         const { clave } = query;
        //         const claves = parseInt(clave);
        //         const data = await contratos.updateOne({ "clave": claves }, { $push: { "integrantes": email } });
        //         console.log("this is the data: ", data);
        //         res.status(201).json({ success: true, data: data });
        //     }
        //     catch (error) {
        //         res.status(400).json({ success: false });
        //     }
            
        }
    }