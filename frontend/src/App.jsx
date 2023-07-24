import { useState } from 'react'
import './style.css';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Loginsignup from './Loginsignup'
// import Main from './Main'
import Registration from './Registration';
import Loginsignup from './Loginsignup';
import About from './About';
import Help from './Help';
import Contact from './Contact';
import Payment from './Payment'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MobileRechargePlans from './MobileRechargePlans';
import SignUp from './SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Routes>
    <Route exact path='/'element={<Registration/>}/>
    <Route path="/Loginsignup"element={<Loginsignup/>}/>
    <Route path="/About"element={<About/>}/>
    <Route path="/Payment"element={<Payment/>}/>
    <Route path="/Help"element={<Help/>}/>
    <Route path="/Contact"element={<Contact/>}/>
<Route path='/MobileRechargePlans' element={<MobileRechargePlans/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
    </Routes>

   </Router>
  )
}
export default App;