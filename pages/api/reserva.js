import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";


export default async function handler(req, res) {
    const { method, body, query } = req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const reserva= db.collection("reserva");
    switch (method) {
        case "GET":
                try {
                    //traer todos los datos de la coleccion que el email sea igual al email que se esta pasando por query
                    console.log(query.email);
                    const data = await reserva.find({ usuario: query.email }).toArray();
                    console.log(data);
                    res.status(200).json({ success: true, data: data });
                } catch (error) {
                    console.log(error);
                    res.status(400).json({ success: false });
                }

            break;
        case "POST":
            try {

            //    console.log(body);

               //crear un dato en la coleccion
                const data = await reserva.insertOne({
                    ...body,
                });

                res.status(201).json({ success: true, data: data });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;

           }    
            
        }
    