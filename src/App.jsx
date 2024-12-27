import NavBar from './components/nav-bar'
import './App.css'
import ProjectManagement from './components/management/project'
import Contact from './components/contact'
import Notes from './components/notes'

function App() {

  return (
      <><NavBar />
      <ProjectManagement/>
      <Contact/>
      <Notes/>
    </>

  )
}

export default App
