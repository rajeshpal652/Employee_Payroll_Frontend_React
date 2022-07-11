import logo from './logo.svg';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';
import Home from './components/home/home';
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>  
      <Routes>
      <Route path="/addemployee" element={<PayrollForm />} ></Route> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/Employeeform/:id" element={<PayrollForm />}></Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App;
