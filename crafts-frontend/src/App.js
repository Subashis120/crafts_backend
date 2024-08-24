import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import LogIn from './view/LogIn';
import Home from './view/Home';
import ItemDesc from './components/ItemDesc';
import Logout from './components/Logout';
import Error from './view/Error';


function App(){
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<LogIn/>}/>
        <Route exact path='/item' element={<ItemDesc/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/error' element={<Error/>}/>

        {/* <Route exact path='/business' element={<News key={"busines"} pageSize={5} category={'business'}/>}/>
        <Route exact path='/general' element={<News key={"general"} pageSize={5} category={'general'}/>}/>
        <Route exact path='/health' element={<News key={"health"} pageSize={5} category={'health'}/>}/>
        <Route exact path='/science' element={<News key={'science'} pageSize={5} category={'science'}/>}/>
        <Route exact path='/sports' element={<News key={'sports'} pageSize={5} category={'sports'}/>}/>
        <Route exact path='/technology' element={<News key={'technology'} pageSize={5} category={'technology'}/>}/> */}
        </Routes>
      </Router>
  );
}

export default App;
