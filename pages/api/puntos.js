import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";


export default async function handler(req, res) {
    const { method, body, query } = req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const punto= db.collection("puntos");
    switch (method) {
        case "GET":
            try {
                //traer datos por el email del usuario si esta en el array de integrantes
                const data = await punto.find({ "email": body.email }).toArray();
                // console.log("this is the data: ", data);
                return res.status(200).json({ success: true, data: data });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                
                //asegurarse de la data que se esta enviando y crear un json con esa data
                const info = {
                    "puntos": body.puntos,
                    "email" : body.email
                }
                
                console.log("this is the info: ", info);
                const data = await punto.insertOne(info);
                //console.log("this is the data: ", data);
                res.status(201).json({ success: true, data: data });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            //agrega
        case "PUT":
            try {
                const { email } = body;
                const { puntos } = body;
                const valor = 1;
                let data;
                switch (valor){ //este es para el manejo de los puntos 
                    case 1: // Playas Mexico
                        const nuevoPuntosPlayasMexico = parseInt(punto) + 10;
                        data = await punto.updateOne({ "email": email }, { $set: { "puntos": nuevoPuntosPlayasMexico } });
                        break;
                    case 2: //Pueblos Magicos
                        const nuevoPueblosMagicos = parseInt(punto) + 15;
                        data = await punto.updateOne({ "email": email }, { $set: { "puntos": nuevoPueblosMagicos } });
                        break;
                    case 3: //Zonas arqueologicas
                        const nuevoZonasArqueologicas = parseInt(punto) + 20;
                        data = await punto.updateOne({ "email": email }, { $set: { "puntos": nuevoZonasArqueologicas } });
                        break;
                    case 4: //Turismo comunitario
                        const nuevoTurismoComunitario = parseInt(punto) + 25;
                        data = await punto.updateOne({ "email": email }, { $set: { "puntos": nuevoTurismoComunitario } });
                        break;
                    case 5: //Turismo Urbano
                        const nuevoTurismoUrbano = parseInt(punto) + 30;
                        data = await punto.updateOne({ "email": email }, { $set: { "puntos": nuevoTurismoUrbano } });
                        break;
                    case 6: //Ecoturismo
                        const nuevoEcoturismo = parseInt(punto) + 35;
                        data = await punto.updateOne({ "email": email }, { $set: { "puntos": nuevoEcoturismo } });
                        break;
                }
                
                
                
                console.log("Documento actualizado:", data);
                res.status(201).json({ success: true, data: data });
            }
            catch (error) {
                res.status(400).json({ success: false });
                
            }
            
        }
    }