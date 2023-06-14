import {SongPlayer} from './SubComponents/';
import ListContainer from './ListContainer';
import '../Assets/Styles/player.css'
import data from '../Data/Mock.json'
import { useState } from 'react';

const Player = ()=> {

    const songs = data.songs;

    const [index,setIndex] = useState(0);

    const handleSongChange = (id)=>{

        const songid = songs.filter((song)=>{
            return (song.id === id && song)
        });
        const i = songs.indexOf(songid[0]);
        setIndex(i);

    }
    
    
    return(
        <div className="player">
            <SongPlayer songs={songs} index={index}/>
            <ListContainer songs={songs} onSongChange={handleSongChange}/>
        </div>
    )
};

export default Player;