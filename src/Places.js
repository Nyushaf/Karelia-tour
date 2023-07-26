import { useState } from "react"
import { data } from "./data"

function Places() {
    const [places, setPlaces] = useState(data);
    const [showText, setShowText] = useState(false);
    const removePlace = (id) => {
        let newPlaces = places.filter(place => place.id !== id);
        setPlaces(newPlaces);
    }
    const showTextClick = (item) => {
        item.showMore = !item.showMore;
        setShowText(!showText);
    }
    return(
    <div>
        <div className='container'>
            <h1>Топ {places.length} достопримечательностей Карелии</h1>
        </div>
        {places.map(item => {
            const {id, placeName, description, image, source, showMore} = item;
            return(
                <div key={id}>
                    <div className='container'>
                        <h3>{id} - {placeName}</h3>
                    </div>
                    <div className='container'>
                        <p>{showMore ? description : description.substring(0, 170) + "...."}
                            <button onClick = {() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
                        </p>
                    </div>
                    <div className='container'>
                        <img src={image} alt="place" width="400px" />
                    </div>
                    <div className='container'>
                        <p><a href={source}>Узнать больше тут</a></p>
                    </div>
                    <div className='container'>
                        <button className='btn' onClick = {() => removePlace(id)}>Удалить</button>
                    </div>
                </div>
        )
    })}
        <div className='container'>
            <button className='btn rem' onClick = {() => setPlaces([])}>Удалить все</button>
        </div>
    </div>
    );
}
export default Places;