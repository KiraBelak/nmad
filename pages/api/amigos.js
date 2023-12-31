import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";


export default async function handler(req, res) {
    const { method, body, query } = req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const exp= db.collection("exp");
    const users = db.collection("users");
    switch (method) {
        case "GET":
            try {
                //traer todos los datos de la coleccion
                const data = await exp.find({}).toArray();
                //si existe el query.id, traer solo ese dato

                
                if (query.id) {
                    //de los datos, filtrar el que tenga el id del query
                    //el id convertirlo a numero
                    // const ide = parseInt(query.id);
                    const dato = []
                    data.forEach((element) => {
                        element.exp.forEach((e) => {
                            // console.log(e);
                            // const id = parseInt(e.id);
                            if (e.id == query.id) {
                                const email = element.email;
                                //traer el usuario
                                const user = users.find({email: email});
                                return res.status(200).json({ success: true, data: e, user: user });

                            }
                        })
                    })
                    //si existe el dato, devolverlo
                    if (dato.length > 0) {
                        return res.status(200).json({ success: true, data: dato });
                    }
                    

                }else{
                   return res.status(200).json({ success: true, data: data });

                }


            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {

                // console.log(body);
                const id = uuidv4();
                const expi ={
                    id: id,
                    titulo: body.title,
                    descripcion: body.descripcion,
                    lat: body.ubicacion.latitude,
                    long: body.ubicacion.longitude,
                    categoria: body.categoria,
                    img : body.imagen,
                }
                // console.log(expi);
                //buscar el usuario por el email
                const experiencias = await exp.findOne({ email: body.email })
        

                //si no existe el usuario, crearlo
                if (!experiencias) {
                    await exp.insertOne({
                        email: body.email,
                        exp: [expi],
                    });
                } else {
                    //si existe, agregar la experiencia
                    await exp.updateOne(
                        { email: body.email },
                        { $push: { exp: expi } }
                    );
                }


                //crear un dato en la coleccion
                // const data = await exp.insertOne({
                //     ...body,
                //     id: uuidv4(),
                // });

                res.status(201).json({ success: true, data: "se creo" });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;

           }    
            
        }
    