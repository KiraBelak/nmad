import axios from "axios";
import { useState } from "react";

export default function Fotos() {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  const sube = async (e) => {
    console.log("click");
    const datos = "";
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    // formData.append("folder", "images");
    formData.append("upload_preset", "s0uookdo");
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );
    // console.log(res);
    // console.log(res.data.secure_url);
    setImg(res.data.secure_url)


    // const { data: cloudinaryData } = await axios.post(
    //   `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    //   {
    //     file: imageDataURL,
    //     folder: "nmad",
    //     upload_preset: "d5vtifkp",
    //   }
    // );

    // const res = await axios.post("/api/fotos", datos);
  };

  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }
        }
      />

      <br />

      <button className="cloudinary-button" onClick={sube}>
        subir
      </button>

      <p></p>
      <div id="divuploadedimage">
        {img}
      </div>
      <p></p>

      <img id="uploadedimage" src={img}></img>
    </>
  );
}
