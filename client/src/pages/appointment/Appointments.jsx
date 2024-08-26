import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Appointments.css';

function Appointments() {
    const [Appointments, setUsers] = useState([])
    
    useEffect (()=> {
        axios.get('http://localhost:3001/Appointments')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteAppointment/'+id)
        .then(res => {console.log(res)
       window.location.reload()})
        .catch(err => console.log(err))
    }

  return (
    <div>
        <div>
            
            <h2 className="header">Patient Appointments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Doctor</th>
                        <th>Reason</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                       {
                          Appointments.map((appointment) => {
                            return <tr key={appointment._id}>
                                <td>{appointment.name}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.age}</td>
                                <td>{appointment.dob}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>
                                    <Link to={`/updateAppointment/${appointment._id}`} className="update-link">Update</Link>

                                    <button 
                                    onClick={() => handleDelete(appointment._id)} className="delete-link">Delete</button>
                                </td>
                             </tr>
                          })
                       }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Appointments;