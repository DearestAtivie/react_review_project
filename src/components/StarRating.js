import React from 'react';
import Star from './Star';
const StarRating = () => {
    // Initialize a 'albumRating' state

    const[albumRating, setAlbumRating] = useState(0);


    // Write a function that returns 5 Star components

    const renderStars = () => {
        let stars = [];
        const maxRating = 5;
        for (let i = 0; i < maxRating; i++) {
            stars.push(
                <Star
                    key={i}
                />
            )
        }
        
        return stars;



    }

    // Write an event handler that updates the albumRating state.
    
    const handleSetRating = (rating) => {
        setAlbumRating(rating);
    }
    // Pass the function to a Star component via props
    

    return (
        <ul className='album--stars'>
            {/* Render the Star components */}
            {renderStars()}
        </ul>
    );
}

export default StarRating;