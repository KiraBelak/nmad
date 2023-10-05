import { useState } from "react";
import axios from "axios";
// import Image from "next/image";
import NextImage from "next/image";
import Link from "next/link";

export default function UploadVaquitaPage() {
  // const { t } = useTranslation(["home"]);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleImagenChange = (e) => {
    clearErrors("imageSrc");

    //to set errors in react hook form image field
    const setImageError = (message) => {
      setError("imageSrc", {
        type: "custom",
        message: message,
      });
      e.target.value = "";
      setImage(null);
    };

    //should be at least 500x500
    const img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function () {
      const width = img.naturalWidth,
        height = img.naturalHeight;
      URL.revokeObjectURL(img.src);
      if (width < 500 || height < 500) {
        setImageError(
          `Tamaño: ${width}x${height}px - La imagen debe de ser al menos de 500x500px`
        );
        return false;
      }
    };

    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  };

  const onSubmit = async (data) => {
    setSubmitted(false);
    setIsLoading(true);
    if (!image) {
      setIsLoading(false);
      toast.error("Please upload a picture");
      return;
    }

    // Handle form submission

    const { email, name } = data;

    // Leer los datos de la imagen como un Data URL
    const reader = new FileReader();
    reader.readAsDataURL(image);

    //Evento, se ejecuta cuando ya tiene imágen automaticamente
    reader.onloadend = async () => {
      setIsLoading(true);
      const imageDataURL = reader.result;

      // Subir la imagen a Cloudinary
      try {
        const { data: cloudinaryData } = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            file: imageDataURL,
            folder: "vaquitas",
            upload_preset: "d5vtifkp",
          }
        );

        if (!cloudinaryData || !cloudinaryData.secure_url) {
          toast.error("Ocurrió un error subiendo tu imagen");
          return;
        }

        const imageUrl = cloudinaryData.secure_url;
        const vaquitaData = {
          email,
          name,
          imageUrl,
        };

        console.log("image uploaded to cloudinary =>", imageUrl);

        await axios.post("/api/newvaquita", vaquitaData);
        toast.success("Thanks for submitting your Vaquita!");
        setSubmitted(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Ocurrió un error", error);
        const errorMsg = error?.response?.data?.message;
        toast.error(errorMsg || "Ocurrió un error");
        setIsLoading(false);
      }
    };
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center w-full my-16">
        <div className="wrapper max-w-7xl px-4 md:mx-32 ">
          <div className="toptext">
            <div className="toptext flex justify-center items-center">
              <NextImage
                src="/images/vaquitatransparent.png"
                width={200}
                height={200}
                alt="VaquitaNFT Logo"
              />
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center my-8 flex-col">
              <LoadingCircle color="#000000" />
              <p className="my-4">
                <span className="mr-2">{t("loadingcircle")}.</span>
              </p>
            </div>
          ) : submitted ? (
            <div className="textwrapper flex flex-col items-center justify-center font-bold text-2xl">
              <p>{t("thanksup")}</p>
              <p>
                <span className="mr-2">{t("contactsoon")} ✌️</span>
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl text-center font-bold">
                {t("upload")} 🎨
              </h1>
              <p className="mt-2 text-center">{t("fillout")}</p>
              <form onSubmit={handleSubmit(onSubmit)} className="my-8">
                <div className="my-4 field">
                  <Input
                    name="name"
                    type="text"
                    placeholder={t("name")}
                    className="text-lg w-full mt-1 block  border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    register={{
                      ...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                      }),
                    }}
                    errorMessage={errors.name?.message}
                  />
                </div>
                <div className="my-4 field">
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("email")}
                    className="text-lg w-full mt-1 block  border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    register={{
                      ...register("email", {
                        pattern: {
                          value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i,
                          message: "Please enter a valid email address",
                        },
                        required: {
                          value: true,
                          message: "Please enter a valid email address",
                        },
                      }),
                    }}
                    errorMessage={errors.email?.message}
                  />
                </div>

                <div className="my-4 field">
                  <p className="text-xs">{t("imgreq")}</p>

                  <Input
                    name="picture"
                    type="file"
                    accept="image/*"
                    className="text-lg w-full mt-1 block  border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    onChange={(e) => handleImagenChange(e)}
                  />
                  {errors.imageSrc && (
                    <p className="text-xs text-red-500 mt-4">
                      {errors.imageSrc.message}
                    </p>
                  )}
                </div>
                <div className="buttoncontainer my-6">
                  <button
                    type="submit"
                    className=" w-full mb-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {t("submit")}
                  </button>
                </div>
                <Link href="/terms">
                  <a>
                    <p className="text-center text-indigo-700 underline">
                      {t("readterms")}
                    </p>
                  </a>
                </Link>
              </form>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}