<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">
</script>
import axios from "axios";
import { useState } from "react";

export default function Fotos() {
  const [file, setFile] = useState(null)
  const sube = async () => {
    console.log("click");
    const datos = "";
    console.log(file)

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
      <input type="file" onChange={async(e)=>(await setFile(e.target.value))} />

      <br />
      
    <button className="cloudinary-button" onClick={sube}>
          subir
      </button>

      <p></p>
      <div id="divuploadedimage"></div>
      <p></p>
      
    <img  
      id="uploadedimage" 
      src="api/foto1.jpg">
    </img>
    </>
  );
}
