import React from "react";

const Form = ({evento=null, carga=null}) => {
  return (
    <div>
      <input type="text" placeholder="Ingrea su matricula" id="matr" />
      <br />
      <input type="text" placeholder="Ingrea su Nombre" id="nomb" />
      <br />
      <select name="carreras" id="car">
        <br />
        <option value="0">--Seleccione--</option>
        <option value="Sistemas computacionales">
          Sistemas computacionales
        </option>
        <option value="Administracion">Administracion</option>
        <option value="Civil">Civil</option>
        <option value="Mecatronica">Mecatronica</option>
      </select> <br/>
      <label>Agrega una foto</label><br/>
      <input id="archivo" type="file" onChange={carga}/>
      <br />
      <br />
      <button onClick={evento}>Agregar alumno</button>
    </div>
  );
};

export default Form;
