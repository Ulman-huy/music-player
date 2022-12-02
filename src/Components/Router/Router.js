import { Routes, Route } from 'react-router-dom';
import Song from '../song/Song';
import Photos from '../photos/Photos';
function Router() {
    return (
        <Routes>
            <Route path='/EDM' element={<Song />} />
            {/* <Route path='/VIETNAM' element={<SongVIET />} /> */}
            {/* <Route path='/FOREIGN' element={<SongFORIGN />} /> */}
            <Route path='/PHOTOS' element={<Photos />} />
        </Routes>
    )
}

export default Router