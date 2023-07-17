import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  // Función para traer los datos de "stays.json".
  const getData = async (useState) => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  // console.log(data);
  // console.log(get)

  const handleChange = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword.length === 0) {
      return getData( setData(data) );
    } 

    const arr = data.filter((data) => {
      return data.city.toLowerCase().includes(keyword);
    });

    setData(arr);
  };

  const handleNumber = (e) => {
    const number = e.target.value;

    if (number.length === 0) {
      return getData( setData(data) );
    }

    const arr = data.filter((data) => {
      return data.maxGuests > +number;
    }
    );

    setData(arr);

  }

  return (
    <>
      <Nav handleChange={ handleChange } handleNumber={ handleNumber }/>
      {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
      <div className="title">
        <h1>Stays in Finland</h1>
        <span>12+ stays</span>
      </div>
      <main>
        <List list={data} />
      </main>
    </>
  );
}

export default App;
