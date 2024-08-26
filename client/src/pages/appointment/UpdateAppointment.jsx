import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './UpdateAppointment.css';

function UpdateAppointment() {
    const { id } = useParams();
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

    useEffect(() => {
        axios.get('http://localhost:3001/getAppointment/' + id)
            .then(result => {
                console.log(result.data);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
                setDob(result.data.dob);
                setGender(result.data.gender);
                setDate(result.data.date);
                setTime(result.data.time);
                setPhone(result.data.phone);
                setDoctor(result.data.doctor);
                setReason(result.data.reason);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/UpdateAppointment/" + id, {
            name, email, age, dob, gender, date, time, phone, doctor, reason
        })
            .then(result => {
                console.log(result);
                navigate('/admindash');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container update-form">
    <form onSubmit={Update}>
        <h2 className="form-heading">Update Appointment</h2>
        <div className="form-grid">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label htmlFor="dob">DOB</label>
                <input type="date" placeholder="Enter Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <input type="text" placeholder="Enter Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="doctor">Doctor</label>
                <input type="text" placeholder="Enter Doctor Name" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
            </div>
            <div className="full-width">
                <label htmlFor="reason">Reason</label>
                <input type="text" placeholder="Enter Reason" value={reason} onChange={(e) => setReason(e.target.value)} />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input type="time" placeholder="Enter Time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
        </div>
        <button type="submit" className="submit-btn" style={{ backgroundColor: 'green' }}>Update</button>
    </form>
</div>

    );
}

export default UpdateAppointment;
