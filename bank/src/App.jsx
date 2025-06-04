import React from 'react';
import Header from './Components/Header';
import BodyText from './Components/BodyText';
import Cards from './Components/Cards';
import ComparePlans from './Components/ComparePlans';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
 
  return (
    <div className="App">
    <Header/>
     <BodyText/>
     <Cards/>
     <ComparePlans/>
     <Footer/>
    </div>
  )
}

export default App;
