import { useState } from 'react'
import './starrating.css'
import { FaStar } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
const StarRating = ({ starsCount = 5 }) => {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = () => {
        setHover(0)
    }


    return (
        <div className="rating">
            {
                [...Array(starsCount)].map((_, index) => {
                    index += 1; // so star's 1st index start from 1 and not from 0
                    return <FaStar
                        className={rating >= index || hover >= index ? 'fill' : null}
                        key={index}
                        width={40}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                    />
                })
            }
        </div>
    )
}

export default StarRating
