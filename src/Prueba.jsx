export function Prueba({valor, valor2="prueba"}){
    

    return <h1>{valor}, {valor2}</h1> 
}

export function Frase ({name,surname, address,cp,brothers}) {
    return <div>
        <h1 className="text-green-500">{name}, {surname}</h1>
        
        <ul>
            <li>{address.calle}</li>
            <li>{address.altura}</li>
            <li>{cp}</li>
            <li>{brothers}</li>
        </ul>
    </div>
}

export function Casado(){
    const merried = false;
    const persona = {
    firstName: "David",
    lastName: "Gallo",
  };

   return <div>
        <h1 className="text-3xl font-bold underline text-red-500">
        {merried ? "Estoy casado" : "No estoy casado"}
      </h1>
      <h1 className="text-3xl font-bold underline text-yellow-500"> {persona.firstName} </h1>
      <h2 className="text-3xl font-bold underline text-blue-500"> {persona.lastName} </h2>
    </div>
}