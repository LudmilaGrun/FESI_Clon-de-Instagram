import axios from "axios";

const URL =
  "https://api.thecatapi.com/v1/images/search?limit=10";

export const obtenerGatos = async () => {
  try {
    const respuesta = await axios.get(URL);

    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};