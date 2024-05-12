import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const CandidateStatusContext = createContext();

const CandidateStatusContextComponent = (props) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);


    const refreshStatusCount = async () => {
        const { data } = await axios.get('/api/candidate/get');
        setPendingCount(data.filter(c => c.status === 'Pending').length);
        setRefusedCount(data.filter(c => c.status === 'Refused').length);
        setConfirmedCount(data.filter(c => c.status === 'Confirmed').length);
    }

    useEffect(() => {
        refreshStatusCount();
    }, []);

    const obj = {
        pendingCount,
        refusedCount,
        confirmedCount,
        refreshStatusCount
    }

    return <CandidateStatusContext.Provider value={obj}>
        {props.children}
    </CandidateStatusContext.Provider>
}

const useStatusCounts = () => {
    return useContext(CandidateStatusContext);
}

export default CandidateStatusContextComponent;
export { useStatusCounts };
