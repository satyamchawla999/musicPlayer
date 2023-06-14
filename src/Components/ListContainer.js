import '../Assets/Styles/listContainer.css'
import {ListItems} from './SubComponents'

const ListContainer = (props)=> {

    const songs = props.songs;
    const onSongChange = props.onSongChange;

    return(
        <div className="listContainer">

            {
                songs.map((song)=>(
                    <ListItems
                        onSongChange={onSongChange}
                        song={song}
                        key={song.id}
                    />
                ))
            }
        </div>
    )
};

export default ListContainer;