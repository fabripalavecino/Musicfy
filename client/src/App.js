import React from 'react';
import Header from './components/Header';
import List from './components/List';
import CreateAlbum from './components/CreateAlbum';
import UpdateAlbum from './components/UpdateAlbum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return(
        <div className='ui container'>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/album' element={<CreateAlbum />} />
                    <Route path='/list' element={<List />} />
                    <Route path='/album/:id' element={<UpdateAlbum />} />          
                </Routes>
            </Router>
        </div>
    )
}

export default App;