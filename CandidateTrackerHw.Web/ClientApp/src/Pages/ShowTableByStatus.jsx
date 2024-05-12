import axios from 'axios';
import { useState, useEffect } from 'react';

const ShowTableByStatus = ({props}) => {

    const [candidates, setCandidates] = useState([]);
    const [toggleNotes, setToggleNotes] = useState('false');

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidate/get');
            setCandidates(data.filter(c => c.status === props))
        }

        getCandidates();
    }, []);

    return (
        <div>
            <h1>{props}</h1>
            <div>
                <button className="btn btn-success" onClick={() => setToggleNotes(!toggleNotes)}>Toggle Notes</button>
                <table className="table table-hover table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {toggleNotes && <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(c => (
                            <tr key={c.id}>
                                <td>{c.firstName}</td>
                                <td>{c.lastName}</td>
                                <td>{c.phoneNumber}</td>
                                <td>{c.email}</td>
                                {toggleNotes && <td>{c.notes}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowTableByStatus;