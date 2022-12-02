import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './Song.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Songs } from '../../data/Context';
import clsx from 'clsx';
function SongEDM() {
    const {DataSongs, song, handleSetSong} = useContext(Songs)
    const [idSong, setIdSong] = useState(0)
    const handlePlayer = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    const handleNext = () => {
        if (song.id === DataSongs.length) {
            song.id = 0
            setIdSong(0)
        } else handleSetSong(song.id + 1)
    }
    const handlePrevious = () => {
        if (song.id === 0) {
            song.id = DataSongs.length
            setIdSong(DataSongs.length)
        } else handleSetSong(song.id - 1)
    }

    useEffect(() => {
        setIdSong(song.id)
    }, [song])
    return (
        <>
            <div className={styles.songContainer}>
                <ul className={styles.listSong}>
                    {DataSongs.map((song, index) => (
                        <li className={clsx(styles.song, {
                            [styles.active]: idSong === song.id,
                        })} 
                            key={index} 
                            onClick={() => handlePlayer(song.id)}
                        >
                            <FontAwesomeIcon icon={faMusic} />
                            <span>{song.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.desc}>
                <div className={styles.thumb}>
                    <img src={song.links.images[0].url} alt={song.author}/>
                </div>
                <div className={styles.player}>
                    <span className={styles.author}>{song.author} - {song.name}</span>
                    <AudioPlayer 
                        src={song.url} 
                        showSkipControls={true} 
                        showJumpControls={false} 
                        className={styles.control}
                        onClickNext={handleNext}
                        onClickPrevious={handlePrevious}
                        volume={.6}
                    />
                </div>
            </div>
        </>
    )
}

export default SongEDM