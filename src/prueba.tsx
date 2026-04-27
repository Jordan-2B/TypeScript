import { useState } from 'react'
import './style/sidebar.css'
import Scroll from './scroll'

export default function Sidebar() {
  const [ocultar, setOcultar] = useState<boolean>(true)


  
  return (
 <div>
   
    <button onClick={() => setOcultar(!ocultar)}>Click</button>
     
    {!ocultar && <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Inicio</li>
        <li>Tarea</li>
        <li>Perfil</li>
      </ul>
    </div>}
    <div className='content'>
        <Scroll/>
    </div>
 </div>
 
  );
}
