import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../../../lib/api";
import { useParams } from "react-router-dom";
import { TrashSimple, X } from "@phosphor-icons/react";

export function Modalimage(props) {
  const [preview, setPreview] = useState(null);
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    function getImege() {
      setPreview(props.image);
    }
    getImege();
  }, [props.image]);

  async function handleUpdate(data) {
    console.log(data);
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const formData = new FormData();
    formData.append("file", data.file);
    if (preview) {
      const responseImge = await api.post(`/upload/image`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("imagem", responseImge);
      if (responseImge.status === 200) {
        const response = await api.put(
          `/road/${params.id}/patology/${props.id}/update`,
          {
            screenshotUrl: responseImge.data.url,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          window.alert("Imagem atualizado com sucesso");
        }
      }
    }
  }

  function handleImage(event) {
    setPreview(URL.createObjectURL(event.target.files[0]));
  }

  async function handleDelteImage() {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const result = window.confirm("Certeza que deseja deletar a imagem? ");
    if (result) {
      const response = await api.put(
        `/road/${params.id}/patology/${props.id}/update`,
        {
          screenshotUrl: "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setPreview("");
        window.alert("Imagem deletada com sucesso");
      }
    }
  }

  console.log(preview);
  return (
    <DialogPortal>
      <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="w-3/4 h-3/4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        {preview ? (
          <img className="w-full h-full " src={preview} alt="" />
        ) : (
          <div
            className="w-full h-full flex justify-center items-center text-4xl text-gray-400"
            src={preview}
            alt=""
          >
            <h1>Não possui imagem</h1>
          </div>
        )}

        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="w-full mt-4 p-4 flex gap-4 justify-center "
        >
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                className="p-2 bg-white rounded-md p-2"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  field.onChange(e.target.files[0]), handleImage(e);
                }}
              />
            )}
          />
          <button
            type="submit"
            className="p-2 bg-sky-600 text-white rounded-md px-4"
          >
            Atualizar
          </button>

          <button
            type="button"
            onClick={() => {
              handleDelteImage();
            }}
            className=" gap-1 bg-red-500 px-4  rounded-md text-white"
          >
            Delete
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
