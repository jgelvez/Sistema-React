import { useState } from "react";
import "./App.css";
import { Prueba, Frase, Casado } from "./Prueba"
import {Button} from "./Button"
import {TaskCard} from "./Task"
import {Saludar} from "./Saludar"
import {Posts} from "./Posts"
// usar librerías https://react-icons.github.io/react-icons/icons?name=di ---- https://mui.com/
function App() {
  
  // hs 2:23
  return (
    <>
      <Button text='Apretame'/>
      <Button name='Coso'/>
      <TaskCard />
      <Saludar />
        {/* 
        <Prueba valor={25} valor2={30} />
        <Prueba valor="Julian" />
        <Frase
          name="David"
          surname="Gallo"
          address={{ calle: 'Mitre', altura: '2585' }}
          cp={9100}
          brothers={['Giuliana', 'Ale', 'Sabri']} />
          */}

      <Posts />
      
    </>
  );
}

export default App;
