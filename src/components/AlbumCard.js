import React from 'react';
//import components
import styled from 'styled-components';
import StarRating from "./StarRating";

const AlbumCard = ({name, artist, genre, photoFile}) => {
  return (
    <StyledDiv>
      <img src={photoFile} alt={name}/>
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <p>{genre}</p>
      <StarRating/>
    </StyledDiv>
  );
}

export default AlbumCard;

const StyledDiv = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
boarder-radius: 5px;
width: 40%;
text-align: center;
margin: auto;
padding: 60px 20px 40px 10px;
background-color: #ADD8E6;

`;