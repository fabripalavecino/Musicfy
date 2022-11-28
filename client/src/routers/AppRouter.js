import List from '../components/List';
import CreateAlbum from '../components/CreateAlbum';
import UpdateAlbum from '../components/UpdateAlbum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import ListSongs from '../components/ListSongs';
import NewSong from '../components/NewSong';
import UpdateSong from '../components/UpdateSong';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/album' element={<CreateAlbum />} />
                    <Route path='/list' element={<List />} />
                    <Route path='/album/:id' element={<UpdateAlbum />} />
                    <Route path='/album/:id/songs'element={<ListSongs />} />
                    <Route path='/song' element={<NewSong />} />
                    <Route path='/album/:id/songs/:songId' element={<UpdateSong />} />          
                </Routes>
            </Router>
        </div>
    )
} 

export default AppRouter;