import '../../Assets/Styles/listItems.css'

const ListItems = (props)=> {
    const song = props.song;
    const onSongChange = props.onSongChange;


    return(
        <div className="listItems" onClick={()=>onSongChange(song.id)}>
            <div className='imgBox'>
                <img src={song.img} alt='#'/>
            </div>

            <div className='infoBox'>
                <div style={{marginBottom:"30px"}}>
                    <p style={{fontSize:"18px",marginBottom:"5px"}}>{song.song}</p>
                    <p>{song.name}</p>
                </div>
                
                <div>
                    <p>{song.duration}</p>
                </div>

            </div>
        </div>
    )
}

export default ListItems;