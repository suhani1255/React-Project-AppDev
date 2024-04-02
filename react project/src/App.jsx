import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pdf from '../Documents/resPDF.pdf';

function AboutMe({props}){
  return <h4>I am a {props.major} major graduating in 2027!</h4>;

}

function AboutMeP() {
  const year = "2027";
  const major = "Computer Science";
  return (
    <>
    <h1>About Me</h1>
    <AboutMe major = {major}/>
    </>
  );
}


// Navbar component
function NavBar() {
  return (
    <nav>
      <div>
        <h1 className="logo">Suhani Patel</h1>
      </div>
      <ul className="nav-links">
        <li>
          Home
        </li>
        <li>
          Resume
        </li>
        <li>
          Hobbies
        </li>
        <li>
          Contact
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>About Me</h1>
      <div className="about">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
