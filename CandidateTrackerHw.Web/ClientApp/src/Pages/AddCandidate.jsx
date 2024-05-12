import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCandidate = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const onSubmitClick = async () => {
        await axios.post('/api/candidate/add', { firstName, lastName, email, phoneNumber, notes  })
        navigate('/')
    }

    return (
        <div className="container" style={{ marginTop: 80 }} >
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <form>
                            <input type="text" name="firstName" placeholder="First Name" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <br />
                            <input type="text" name="lastName" placeholder="Last Name" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                            <br />
                            <input type="text" name="email" placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                            <br />
                            <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                            <br />
                            <textarea rows="5" className="form-control" name="notes" value={notes} onChange={e => setNotes(e.target.value)} ></textarea>
                            <br />
                            <button onClick={onSubmitClick} className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCandidate;