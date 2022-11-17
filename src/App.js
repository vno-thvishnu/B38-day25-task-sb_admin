import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./sb-admin-2.css"
import './App.css';
import '../src/fontawesome-free/css/all.min.css'
// import '../src/chart/Chart.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Mainpage from './mainPage';
import Cards from './cards';
import Buttons from './Buttons'; 
import Colors from './Colors';
import Border from './Border';
import Animation from './Animation';
import Other from './Other';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ErrorPage from './ErrorPage';
import Blankpage from './Blankpage';
import Charts from './Charts';
import Tables from './Tables';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route  path="/login" element={<Login/>}> </Route>
  <Route  path="/register" element={<Register/>}> </Route>
  <Route  path="/forgotpassword" element={<ForgotPassword/>}> </Route>



    <Route  path="/" element={<Mainpage/>}>
    <Route  path="/" element={<Dashboard/>}> </Route>
    <Route  path="/buttons" element={<Buttons/>}> </Route>
    <Route  path="/cards" element={<Cards/>}> </Route>
    <Route  path="/colors" element={<Colors/>}> </Route>
    <Route  path="/borders" element={<Border/>}> </Route>
    <Route  path="/animations" element={<Animation/>}> </Route>
    <Route  path="/other" element={<Other/>}> </Route>
    <Route  path="/404pages" element={<ErrorPage/>}> </Route>
    <Route path="/blankpages" element={<Blankpage/>}></Route>
    <Route path="/charts" element={<Charts/>}></Route>
    <Route path="/tables" element={<Tables/>}></Route>










    </Route>


  </Routes>
  </BrowserRouter>
 
</>

  );
}

export default App;
