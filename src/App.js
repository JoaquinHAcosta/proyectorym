import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav"
import axios from "axios"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error404/Error404';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"

function App() {

   const navigate = useNavigate()
   const location = useLocation()

   const [ characters, setCharacters ] = useState([])

   const [ access, setAccess ] = useState(false)
   const EMAIL = "joaquinacosta397@outlook.com"
   const PASSWORD = "asdf1234"

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
          setAccess(true);
          navigate("/home")
      }
  }
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if ( characters.find(char => char.id === Number(id))) {
               return alert("Ya existe esa carta")
            }
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters( characters.filter(char => char.id !== Number(id)) )
   }

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess}/>}
         <Routes>
            <Route path='*' element={<Error/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
