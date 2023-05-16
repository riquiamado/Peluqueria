
import './App.css'
import Navbar from './components/Navbar'
import ProfileCard from './components/Perfil'
import ServicioList from './components/ServicioList'
import { TurnoForm } from './components/TurnosForm'

function App() {

  return (
    <>
     <Navbar/>
    
     <section id='sobre mi'>
     <ProfileCard/>
     </section>
     <section id="servicios">
     <ServicioList/>
      </section>
     
       <section id="turnos">
       <TurnoForm onSubmit={function (): void {
        throw new Error('Function not implemented.')
      } }/>
      </section>
      {/* <section id="productos">
        <Productos />
      </section> */} 
      
    </>
  )
}

export default App
