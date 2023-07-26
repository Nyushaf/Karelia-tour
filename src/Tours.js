import { useState } from "react";
import { data } from "./dataTwo";


function Tours() {
    const [tour, setTour] = useState(0);
    const {id, nameTour, duration, price, image} = data[tour];
    const nextTour = () => {
        setTour((tour => {
            tour++;
            if (tour > data.length - 1) {
            tour = 0;
            }
            return tour;
        }))
    }
    const previousTour = () => {
        setTour((tour => {
            tour--;
            if (tour < 0) {
            tour = data.length -1;
            }
            return tour;
        }))
    }
    return(
        <div>
            <div className="container">
                <h2>Подбери себе тур!</h2>
            </div>
            <div className="box">
                <button onClick={previousTour} className="slide">«</button>
                <div key={id}>
                    <div className="container">
                        <img src={image} alt="tour" height="350px" />
                    </div>
                    <div className="container">
                        <h3>{nameTour}</h3>
                    </div>
                    <div className="container">
                        <h4>{duration}</h4>
                    </div>
                    <div className="container">
                        <h3 className="price">{price}</h3>
                    </div>
                </div>
                <button onClick = {nextTour} className="slide">»</button>
            </div>
        </div>
    )
}
export default Tours;