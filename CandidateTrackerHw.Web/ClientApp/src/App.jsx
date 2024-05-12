import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Confirmed from './Pages/Confirmed';
import Pending from './Pages/Pending';
import Refused from './Pages/Refused';
import AddCandidate from './Pages/AddCandidate';
import Details from './Pages/Details';
import CandidateStatusContext from './Pages/CandidateStatusContext';

const App = () => {
    return (
        <CandidateStatusContext>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addcandidate' element={<AddCandidate />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/refused' element={<Refused />} />
                    <Route path='/details/:id' element={<Details />} />

                </Routes>
            </Layout>
        </CandidateStatusContext>
    );
}

export default App;