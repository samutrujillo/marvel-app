import React, { useState } from 'react'
import Header from './header/header'
import MainContent from './mainContent'
import { Container } from 'react-bootstrap';


const Homeview = () => {
  const [showCards, setShowCards] = useState(false);

  const showMarvelCards = () => {
    setShowCards(true);
  }


  return (
    <>
      <Header/>
      <Container fluid style={{height:'100vh',backgroundImage: "url('https://png.pngtree.com/background/20230403/original/pngtree-futuristic-sci-fi-advanced-city-background-picture-image_2266997.jpg')"}} >
        <MainContent/>
      </Container>  

    </>
  )
}

export default Homeview