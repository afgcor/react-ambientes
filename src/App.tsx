/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/

import { Login } from "./components/Login";
import { Cadastro } from "./components/Cadastro";
import { Item } from "./components/Item";
import "./global.css";

export function App() {
  return (
    <>
      <Login />
      <Cadastro />
      <Item />
    </>
  )
}

export default App
