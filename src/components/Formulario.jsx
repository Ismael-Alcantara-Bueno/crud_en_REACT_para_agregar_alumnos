import React, { useState } from "react";
import "../css/main.css";

export const Formulario = () => {

    //const [formState, setFormState] = useState({ txtMatricula: '', txtNombre: '', cmbCarrera: ''});

    const [matriculaActualizar, setMatriculaA] = useState("");
    const [nombreActualizar, setNombreA] = useState("");
    const [estudiosActualizar, setEstudiosA] = useState("--Seleccione Una Carrera--");


    const renombrarMat = (event) => {
        setMatriculaA(event.target.value)
    }

    const renombrarNomb = (event) => {
        setNombreA(event.target.value)
    }


    const alumnos = [
        {
            id: '201901',
            nombre: 'Daniel Chimal',
            carrera: 'Sistemas Computacionales',
            urls: 'a'
        },
        {
            id: '201902',
            nombre: 'Kimberly Cruz',
            carrera: 'Civil',
            urls: 'a'
        },
        {
            id: '201903',
            nombre: 'Kevin Nuñes',
            carrera: 'Quimica',
            urls: 'a'
        }
    ];

    

    const [Alumnos, setAlumnos] = useState(alumnos);
    let imageUrl;



    function Cargarimagen(event) {
        const file = event.target.files[0];
        imageUrl = URL.createObjectURL(file);
    }

    const Agregar = () => {
        const matricula = document.getElementById("txtMatricula");
        const nombre = document.getElementById("txtNombre");
        const carrera = document.getElementById("cmbCarrera");
        const archivo = document.getElementById("archivo");

        /*console.log(matricula);
        console.log(nombre);
        console.log(carrera);
        console.log(archivo);*/


        if ((matricula.value === "") | (nombre.value === "") | (carrera.value === "--Seleccione Una Carrera--") | (archivo.value === "")
        ) {
            alert("Completa Todos Los Campos");
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
            setMatriculaA("");
            setNombreA("");
            setEstudiosA("--Seleccione Una Carrera--");
            archivo.value = "";
            carrera.value = "--Seleccione Una Carrera--"
        }
    };

    const Eliminar = (id) => {
        const idEliminar = id;
        const nuevos = Alumnos.filter((item) => item.id !== idEliminar);
        setAlumnos(nuevos);
    };

    const AbrirEdi = (mat) => {
        let nuevos = Alumnos.filter((item) => item.id === mat);

        nuevos.map((items) => {
            setMatriculaA(items.id);
            setNombreA(items.nombre);
            setEstudiosA(items.carrera);
        });

    }

    const actualizar = () => {
        console.log("Hola")

        const matricula = document.getElementById("txtMatricula");
        const nombre = document.getElementById("txtNombre");
        const carrera = document.getElementById("cmbCarrera");
        const archivo = document.getElementById("archivo");

        let comosea

        if (archivo.value === "") {
            comosea = {
                id: matricula.value,
                nombre: nombre.value,
                carrera: carrera.value
            }
        } else {
            comosea = {
                id: matricula.value,
                nombre: nombre.value,
                carrera: carrera.value,
                urls: imageUrl
            }
        }

        setAlumnos(
            Alumnos.map((item)=>{
                if(item.id === matricula.value){
                    return {...item, ...comosea}
                }else{
                    return item
                }
            })
        )
            setMatriculaA("");
            setNombreA("");
            setEstudiosA("--Seleccione Una Carrera--");
            archivo.value = "";
            carrera.value = "--Seleccione Una Carrera--";
    }


    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>



            <div class="limiter">
                <div class="container-login100">
				<div class="title">
					<span class="login100-form-title-1">
						Bienvenidos
					</span>


                        <div class="p-t-31 p-b-9">
                            <span class="label-input100">Matricula</span>
						<span class="focus-input100"></span>
					</div>
                        <div class="wrap-input100 validate-input" data-validate="Escriba Su Matricula">
                            <input class="input100" type="text" id="txtMatricula" value={matriculaActualizar} onChange={renombrarMat} />
                            <span class="focus-input100"></span>
                        </div>

                        <div class="p-t-31 p-b-9">
                            <span class="txt1">
                                NOMBRE
                            </span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Escriba Su Nombre">
                            <input class="input100" type="text" id="txtNombre" value={nombreActualizar} onChange={renombrarNomb} />

                        </div>

                        <div class="p-t-31 p-b-9">
                            <span class="txt1">
                                CARRERA
                            </span>
                        </div>
                        <div >
                            <select class="form-select" aria-label="Default select example" id="cmbCarrera">
                                <option value={estudiosActualizar}>{estudiosActualizar}</option>
                                <option value="Sistemas Computacionales">Sistemas Computacionales</option>
                                <option value="Civil">Civil</option>
                                <option value="Quimica">Quimica</option>
                                <option value="Administracion">Administracion</option>
                                <option value="Mecatronica">Mecatronica</option>
                            </select>
                            <br />

                        </div>
                        <br />
                        <div class="container-login100-form-btn m-t-17">
                            <label>Subir Imagen ........</label><br />
                            <input id="archivo" type="file" onChange={Cargarimagen} />
                            <br />
                            <br />
                        </div>
                        <br />

                        <div div class="container-login100-form-btn m-t-17">
                            <button class="login100-form-btn" onClick={Agregar}>
                                Guardar
                            </button>
                        </div>



                    </div>
                </div>
                
         </div>
         <section className="tablas hide" id="tab">
                <span class="login100-form-title p-b-53">
                    LISTA DE ALUMNOS
                </span>

                <table class="table" border={3}>
                    <thead>
                        <tr>
                            <td>Matricula</td>
                            <td>Nombre</td>
                            <td>Carrera</td>
                            <td>Foto</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody border={3}>
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
                                    <button class="login100-form-btn" onClick={() => AbrirEdi(item.id)}>Editar</button>
                                </td>
                                <td>
                                    <button class="login100-form-btn" onClick={() => Eliminar(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <br />
                <br />

            </section >

            <button class="login100-form-btn1" onClick={() => actualizar()}>
                Actualizar Alumno
            </button>

            

        </>
    )
}

export default Formulario
