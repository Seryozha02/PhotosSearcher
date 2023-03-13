import "./Photos.css"

function Photos({photos}) {


    return(
        <div className="imageDiv">
            {photos.map(photo => {
                return(<div className="images" key={Math.random()}>
                    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} alt="" />
                </div>)
            })}
        </div>
    )
}

export default Photos;