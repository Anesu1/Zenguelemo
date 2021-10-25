import React from 'react';
import styled from 'styled-components';

function BookCard({img, name}) {
    return (
        <div className="book-inner">
          <img src={img} alt="" /> 
            <div className="text">
                <h4>{name}</h4>
                <a href="#">View Details</a>
            </div>
          <div className="book_now" >
                <p>Book Now</p>
            </div>
        </div>
    )
}

export default BookCard
