import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Card, Row, Col, Modal, Button } from "react-bootstrap";



const SliderCarousel = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <Modal show={showModal} onHide={closeModal}>
        <div className='bg-dark'>
          <Modal.Header>
            <Modal.Title style={{ color: '#F0E6D2' }}>{selectedCharacter && selectedCharacter.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCharacter && (
              <>
                <div className='d-flex justify-content-center'>
                  <img className='' src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`} alt="avatar" style={{ width: '10rem', height: 'auto', borderRadius: '8px' }} />

                </div>
                <div className='p-2'>
                  <p style={{ color: '#F0E6D2' }}>Descripción: {selectedCharacter.description}</p>
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button style={{background:'#F0E6D2', color:'black', border:'none'}} onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>


      {characters.length ?
        <Slider {...settings}>
          {characters.map((card, index) => (
            <Row key={index}>
              <Col>
                <Card onClick={() => openModal(card)} className='bg-transparent cursor-pointer' style={{ width: '14rem', backgroundColor: 'transparent', border: '2px solid #3C3C41', backgroundImage: "url('https://png.pngtree.com/background/20230403/original/pngtree-futuristic-sci-fi-advanced-city-background-picture-image_2266997.jpg')" }}>
                  <Card.Body style={{ textAlign: 'center', color: 'white' }}>
                    <Card.Title style={{ fontSize: '10px', color: '#F0E6D2' }}>{card.name}</Card.Title>
                    <div className='d-flex justify-content-center'>
                      <img src={`${card.thumbnail.path}.${card.thumbnail.extension}`} alt="avatar" style={{ width: '8vw', height: '16vh', borderRadius: '50%' }} />
                    </div>
                    <div style={{ height: '2rem', borderRadius: '5px', border: '1px solid #5B5A56' }} className='my-3'> <span style={{ color: '#F0E6D2' }}>Comics: {card.comics.available}</span></div>
                    <div style={{ height: '2rem', borderRadius: '5px', border: '1px solid #5B5A56' }} className='my-2'> <span style={{ color: '#F0E6D2' }}>Películas: {card.series.available}</span></div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          ))}
        </Slider> : (
          <div style={{ color: '#F0E6D2' }}>cargando...</div>
        )
      }
    </>
  );
};

export default SliderCarousel;
