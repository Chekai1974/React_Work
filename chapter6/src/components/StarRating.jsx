import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

function StarRating({ style, totalStars = 5 }) {
    let starColor = "grey"
    const [selectedStar,setSelectedStar] = useState(0)
    const Star = ({ selected = false, onSelect }) => {
        switch (selectedStar) {
        case 1:
            starColor = "#FF3333";
            break;
        case 2:
            starColor = "#FF9933";
            break;
        case 3:
            starColor = "#FFFF33";
            break;
        case 4:
            starColor = "99FF33";
            break;
        case 5:
            starColor = "00FF00";
            break;
        default:
            starColor = "grey";
    }
        return <FaStar color={selected ? starColor : "grey"}
        onClick={onSelect}></FaStar>
    }
    function createArray(length) {
        return[...Array(length)];
    }
    
    return (
        <div style={{ padding: "5px", ...style }}>
            {createArray(totalStars).map((elem, index) => <Star
                key={index}
                selected={selectedStar > index}
                onSelect={() => setSelectedStar(index + 1)} />)}
            <p>{selectedStar} of {totalStars} Stars</p>
        </div>
    )
}

export default StarRating