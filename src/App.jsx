import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Layout from './Components/Layout';
import About from './Components/About';
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login'; 
import LogoutButton from './Components/Auth/LogoutButton';
import { useAuth } from './config/AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {

  const {currentUser} = useAuth();

  return(
  <Router>
     <NavBar /> 
     <div className="App"> {currentUser ? ( 
      <> <h1>Welcome, {currentUser.email}</h1>
       <LogoutButton /> 

       <Routes>
         {/* <Route path="/" element={<Layout />} /> */}
         <Route path="/about" element={<About />} /> 
         </Routes> </>
        ) : (
           <Routes>
            
           <Route path="/signup" element={<SignUp />} /> 
           <Route path="/login" element={<Login />} />
           <Route path="/about" element={<About />} /> 

            <Route path="/" element={<SignUp />} /> 
            </Routes> 
            )}
             </div>
              </Router>
              );} 

export default App;
