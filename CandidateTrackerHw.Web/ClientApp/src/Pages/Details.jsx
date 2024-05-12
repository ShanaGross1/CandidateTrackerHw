import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useStatusCounts } from '../Pages/CandidateStatusContext'
import { useNavigate } from "react-router-dom";

const Details = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { refreshStatusCount } = useStatusCounts();

    const [candidate, setCandidate] = useState({});
    const { firstName, lastName, email, phoneNumber, status, notes } = candidate;

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/getbyid?id=${id}`)
            setCandidate(data);
        }

        getCandidate();
    }, []);

    const onUpdateStatusClick = async (status) => {
        await axios.post('/api/candidate/update', { ...candidate, status })
        refreshStatusCount();
        navigate('/');
    }

    return (<div className="container" style={{ marginTop: 80 }} >
        <div className="row"><div className="col-md-6 offset-md-3">
            <div className="card card-body bg-light">
                <h4>Name: {firstName} {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phoneNumber}</h4>
                <h4>Status: {status}</h4>
                <h4>Notes:</h4>
                <p>{notes}</p>
                <div>
                    <button className="btn btn-primary" onClick={() => onUpdateStatusClick('Confirmed')}>Confirm</button>
                    <button className="btn btn-danger" onClick={() => onUpdateStatusClick('Refused')}>Refuse</button>
                </div>
            </div>
        </div>
        </div>
    </div>)
}

export default Details;