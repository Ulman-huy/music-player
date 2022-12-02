import Header from './Components/header/Header'
import Navbar from './Components/navbar/Navbar';
import Content from './Components/content/Content';
import { Songs } from './data/Context';
import DataSongs from './data/songs.json'
import './App.css';
import { useState } from 'react';


function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)

    if(!song) setSong(DataSongs[0])
    else 
        setSong(song)
  }
  return (
    <div className="App">
      <div className='container'> 
        <Header />
        <div className='content'>
          <Navbar />
          <Songs.Provider value={{DataSongs, song, handleSetSong}}>
            <Content />
          </Songs.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
