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

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';

         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data; // true o false
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         console.log(error);
      }
  }
   
   const onSearch = async (id) => {
      try {
         if ( characters.find(char => char.id === Number(id))) {
            return alert("Ya existe esa carta")
         }
         
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         
      } catch (error) {
         console.log(error);
         // alert('¡No hay personajes con este ID!');
      }

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
