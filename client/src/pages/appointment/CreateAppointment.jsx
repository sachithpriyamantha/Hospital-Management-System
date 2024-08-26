import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './CreateAppointment.css';

function CreateAppointment() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');
    const [doctor, setDoctor] = useState('');
    const [reason, setReason] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createAppointment", { name, email, age, dob, gender, date, time, phone, doctor, reason })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar/>
        <div className="container">
            
            <form onSubmit={Submit}>
                <h3>Make An Appointment</h3>
                <div className="form-grid">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Your Name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="text" placeholder="Enter Your Age" name="age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="dob">DOB</label>
                        <input type="date" placeholder="Enter Your Date of Birth" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input type="text" placeholder="Enter Your Gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="doctor">Doctor</label>
                        <input type="text" placeholder="Enter the Doctor Name" name="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)} /><br />
                    </div>
                    <div className="full-width">
                        <label htmlFor="reason">Reason</label>
                        <input type="text" placeholder="Enter The Reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" placeholder="Enter The Date" name="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="time" placeholder="Enter The Time" name="time" value={time} onChange={(e) => setTime(e.target.value)} /><br />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default CreateAppointment;
