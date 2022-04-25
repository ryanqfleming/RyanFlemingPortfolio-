import { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas , useFrame, useThree} from "@react-three/fiber"
import { OrbitControls, Stars, ScrollControls } from "@react-three/drei"
import './App.css'
import Header from './components/Header.jsx'


function Box(){
 const myMesh = useRef()
//  console.log(myMesh)
 useFrame(({ clock })=>{
   myMesh.current.rotation.x = myMesh.current.rotation.x + 0.005
   myMesh.current.rotation.y = myMesh.current.rotation.x + 0.008
  //  console.log(clock.getElapsedTime())
 })
 return(
   <mesh ref={myMesh} position={[0,2,0]}>
     <boxBufferGeometry attach="geometry" />
     <meshLambertMaterial attach="material" color="hotpink" />
   </mesh>
 )
}function Plane(){

 return(
   <mesh position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]}>
     <planeBufferGeometry attach="geometry" args={[100,100]} />
     <meshLambertMaterial attach="material" color="lightblue" />
   </mesh>
 )
}


// animate()
function App() {
 App.add 
  return (
    <div className="App bg-slate-900 h-screen">
   <Header /> 
  <Canvas className=' h-96'>
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <spotLight position={[10,15,10]} angle={0.3} />
    <Stars />
    <Box />
    <Plane />
    {/* <Animate /> */}
  </Canvas>
    </div>
  )
}

export default App
