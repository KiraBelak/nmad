<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">
</script>


const cloudName = "dzc1tlo5h"; // replace with your own cloud name
const uploadPreset = "s0uookdo"; // replace with your own upload preset

// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference

var myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        //document
          //.getElementById("uploadedimage")
          //.setAttribute("src", result.info.secure_url);

        document
        .getElementById("divuploadedimage")
        .innerHTML(result.info.data.secure_url); 
         // .getElementById("uploadedimage")
         // .setAttribute("src", result.info.secure_url); 
      }
    }
  );
  


function subirImagen(req, res) {
    const { method, body, query } = req;
    switch (method) {
        case "POST":
            myWidget.open(null, body.img);
            

            //return url
            return res.info;
        
        break;
            //agregar un integrante a un contrato existente por la clave del contrato
        case "PUT":

        break;
        
            
        }
    }