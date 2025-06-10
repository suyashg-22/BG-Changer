import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("black");

  return (
    <div className='w-full h-screen duration-200 relative' style={{backgroundColor: color}}> 
    <h1 className='text-2xl color text-white flex justify-center items-center' > BGCOLOR</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px- '>
        <div className='flex felx-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("Green")} style={{backgroundColor:'green'}}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("Red")} style={{backgroundColor:'red'}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("violet")} style={{backgroundColor:'violet'}}>violet</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("yellow")} style={{backgroundColor:'yellow'}}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("blue")} style={{backgroundColor:'blue'}}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("magenta")} style={{backgroundColor:'magenta  '}}>magenta</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("brown")} style={{backgroundColor:'brown'}}>brown</button>
        </div>
      </div>    
    </div>
  )
}

export default App
