import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homediv5 from './components/Homediv5'
import Dashboard from './pages/admin/Dashboard'
import Appointments from './pages/appointment/Appointments'
import CreateAppointment from './pages/appointment/CreateAppointment'
import UpdateAppointment from './pages/appointment/UpdateAppointment';
import Doctorspage from './pages/home/Doctorspage'
import Home from './pages/home/Home'
import Servicespage from './pages/home/Servicespage'
import AddDoctor from './pages/patient/AddDoctor'
import DoctorsPg from './pages/patient/DoctorsPg'
import UpdateDoctor from './pages/patient/UpdateDoctor'
import AddService from './pages/Service/AddService'
import ServicesPg from './pages/Service/ServicesPg'
import UpdateService from './pages/Service/UpdateService'
import { LoginNav } from "./components/LoginNav";
import { LoginHome } from "./components/LoginHome";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";



function App() {

  return (
    <div>
      <BrowserRouter>
      <LoginNav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admindash' element={<Dashboard />}></Route>
          <Route path='/doctors' element={<DoctorsPg />}></Route>
          <Route path='/add' element={<AddDoctor />}></Route>
          <Route path='/updatedoctor/:id' element={<UpdateDoctor />}></Route>
          <Route path="/contact" element={<Homediv5 />} />
          <Route path='/doctorspage' element={<Doctorspage />}></Route>
          <Route path='/addservice' element={<AddService />}></Route>
          <Route path='/services' element={<ServicesPg />}></Route>
          <Route path='/updateservice/:id' element={<UpdateService />}></Route>
          <Route path='/servicespage' element={<Servicespage />}></Route>
          <Route path='/createAppointment' element={<CreateAppointment />}></Route>
          <Route path='/updateAppointment/:id' element={<UpdateAppointment />} />
          <Route path='/Appointments' element={<Appointments />}></Route>
          <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
