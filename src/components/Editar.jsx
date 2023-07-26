import React, { useState } from "react";

const Editar = ({evento=null, carga=null, matri = 'sin datos', nomb = 'sin datos', car=0}) => {
    const [textonom, settextonom] = useState(nomb)

    const cambiaNomb = (event)=>{
        settextonom(event.target.value)
    }
    const [textomat, settextomat] = useState(matri)

    const cambiamat = (event)=>{
        settextomat(event.target.value)
    }

  return (
    <div>
      <input type="text" id="matract" value={textomat} onChange={cambiamat}/>
      <br />
      <input type="text"  id="nombact" value={textonom} onChange={cambiaNomb}/>
      <br />
      <select name="carreras" id="caract">
        <br />
        <option value={car}>{car}</option>
        <option value="Sistemas computacionales">
          Sistemas computacionales
        </option>
        <option value="Administracion">Administracion</option>
        <option value="Civil">Civil</option>
        <option value="Mecatronica">Mecatronica</option>
      </select>{" "}
      <br />
      <label>Agrega una foto</label>
      <br />
      <input id="archivoact" type="file" onChange={carga} />
      <br />
      <br />
      <button onClick={evento}>Actualizar</button>
    </div>
  );
};

export default Editar;
