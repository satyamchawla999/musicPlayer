import '../../Assets/Styles/songPlayer.css'
import '../../Assets/Js/script.js'
import { useState,useEffect } from 'react';

const SongPlayer = (props) => {

    const songs = props.songs
    // const songId = props.songId

    const [toggle, setToggel] = useState(false);

    const [song,setSong] = useState(songs[props.index]);

    useEffect(()=>{
        setSong(songs[props.index])
    },[props.index]);

    const handleClick = (e) => {
        setToggel(!toggle);
    }

    const handleBackward =(e)=>{
        let n = songs.length;
        console.log(n);

        let index = songs.indexOf(song);

        if(index === 0) {
            setSong(songs[n-1]);
        } else {
            setSong(songs[index-1]);
        }
    }

    const handleForward =(e)=>{
        let n = songs.length;
        console.log(n);

        let index = songs.indexOf(song);

        if(index === n-1) {
            setSong(songs[0]);
        } else {
            setSong(songs[index+1]);
        }
    }

    // console.log(props.song)


    return (
        <div className="songPlayer">
            <div className='leftBlock'>
                <img src={song.img} alt='#' />
            </div>

            <div className='rightBlock'>
                <div className='songInfo'>
                    <h1>{song.song}</h1>
                    <p>{song.name}</p>
                </div>

                <div className='songControls'>
                    <input type='range' />
                    <audio style={{ display: "none" }}  src={song.audio} controls/>
                    <ul>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <li onClick={handleBackward}><i className="fa-solid fa-backward"></i></li>
                            <li className="player-button" onClick={handleClick}>
                                {toggle ? <>
                                    <i className="fa-solid fa-pause"></i>
                                </> : <>
                                    <i className="fa-solid fa-play"></i>
                                </>}
                            </li>
                            <li onClick={handleForward}><i className="fa-solid fa-forward"></i></li>
                        </div>

                        <div>
                            <li><i className="fa-solid fa-shuffle"></i></li>
                            <li><i className="fa-solid fa-volume-low"></i></li>
                            <li><i className="fa-solid fa-bars"></i></li>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    )
};

export default SongPlayer;