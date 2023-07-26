import React, { useState } from "react";
import Form from "./Form";
import Popup from "./Popup";
import Editar from "./Editar";
import "../css/tablas.css"

const ListaAlumno = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  const [matricula, setmatricula] = useState("sindatos");
  const [nomreishon, setnomreishon] = useState("sindatos");
  const [estudios, setestudios] = useState("sindatos");

  const alumnos = [
  ];
  const [Alumnos, setAlumnos] = useState(alumnos);
  let imageUrl;

  function Cargarimagen(event) {
    const file = event.target.files[0];
    imageUrl = URL.createObjectURL(file);
  }

  const AgregarAlumno = () => {
    const matricula = document.getElementById("matr");
    const nombre = document.getElementById("nomb");
    const carrera = document.getElementById("car");
    const archivo = document.getElementById("archivo");
    if (
      (matricula.value === "") |
      (nombre.value === "") |
      (carrera.value === 0) |
      (archivo.value === "")
    ) {
      alert("Completa los campos por favor");
    } else {
      setAlumnos([
        ...Alumnos,
        {
          id: matricula.value,
          nombre: nombre.value,
          carrera: carrera.value,
          urls: imageUrl,
        },
      ]);
      matricula.value = null;
      nombre.value = null;
      carrera.value = 0;
      archivo.value = "";
      setShowPopup(false);
    }
  };

  const Eleiminar = (id) => {
    const idEliminar = id;
    const nuevos = Alumnos.filter((item) => item.id !== idEliminar);
    setAlumnos(nuevos);
  };

  const AbrirEdti = (mat) => {
    let nuevos = Alumnos.filter((item) => item.id === mat);
    nuevos.map((items) => {
      setmatricula(items.id);
      setnomreishon(items.nombre);
      setestudios(items.carrera);
    });

    setShowPopup1(true);
  };

  const Edit = () => {
    const nmat = document.getElementById("matract");
    const nNombre = document.getElementById("nombact");
    const nCarrera = document.getElementById("caract");
    const nArchivo = document.getElementById("archivoact");
    var nuevos

    if (nArchivo.value === "") {
      nuevos = {id:nmat.value, nombre:nNombre.value, carrera: nCarrera.value };
    } else {
      nuevos = {
        id: nmat.value,
        nombre: nNombre.value,
        carrera: nCarrera.value,
        urls: imageUrl,
      };
    }
    setAlumnos(
      Alumnos.map((objeto) => {
        if (objeto.id === matricula) {
          return { ...objeto, ...nuevos };
        } else {
          return objeto;
        }
      })
    );
    setShowPopup1(false);
  };

  return (
    <section className="tablas">
      <div>
        <button onClick={() => setShowPopup(true)}>Agregar alumno</button>
        {showPopup && (
          <Popup
            onClose={() => setShowPopup(false)}
            elemento={
              <Form evento={() => AgregarAlumno()} carga={Cargarimagen} />
            }
            titulo="Agregar alumnos"
          />
        )}
      </div>

      <table className="table">
        <thead>
          <td>Matricula</td>
          <td>Nombre</td>
          <td>Carrera</td>
          <td>Foto</td>
          <td></td>
          <td></td>
        </thead>

        <tbody>
          {Alumnos.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.carrera}</td>
              {item.urls && (
                <td>
                  <img className="foto" src={item.urls} />
                </td>
              )}
              <td>
                <button onClick={() => AbrirEdti(item.id)}>Editar</button>
              </td>
              <td>
                <button onClick={() => Eleiminar(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup1 && (
        <Popup
          onClose={() => setShowPopup1(false)}
          elemento={
            <Editar
              matri={matricula}
              nomb={nomreishon}
              car={estudios}
              evento={() => Edit()}
              carga={Cargarimagen}
            />
          }
          titulo="Editar Datos"
        />
      )}
    </section >
  );
};

export default ListaAlumno;
