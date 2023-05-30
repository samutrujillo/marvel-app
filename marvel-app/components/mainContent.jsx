import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {Row, Col, Container } from 'react-bootstrap/';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SliderCarousel from './SliderCarousel';

import axios from 'axios';
import md5 from "md5";




const MainContent = () => {

    const [characters, setCharacters] = useState([]);
    const [progresoTotal, setProgresoTotal] = useState(0);

    const videoRef = useRef(null);


    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 4; 
      }

      const fetchData = async () => {
        const now = Date.now();
        const publicKey = '70cbf3aa2cb40d8de6a598eed11ba09c';
        const privateKey = '594eefa751bcec1fd49f361359e6b03ca518d5a6';
        const hash = md5(`${now}${privateKey}${publicKey}`);
  
        const apiUrl = "https://gateway.marvel.com/v1/public/characters";
        const params = {
          apikey: publicKey,
          ts: now,
          hash: hash
        };
  
        try {
          const response = await axios.get(apiUrl, { params });
          const results = response.data.data.results;
          setCharacters(results);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
        const calcularProgresoTotal = () => {
          const sumaPeliculas = characters.reduce(
            (acumulador, personaje) => acumulador + personaje.series.available,
            0
          );
          setProgresoTotal(sumaPeliculas);
        };
      
        calcularProgresoTotal();
      }, [characters]);
      const porcentajeProgreso = (progresoTotal / 500) * 100;

    return (
        <>
            <Container className='p-0' fluid >
                <Row>
                    <Col className='d-flex align-items-center' lg={5} md={4}>
                        <div className='d-flex justify-content-center align-items-center mx-3' style={{ background: '#0E0F0F', width: '30rem', height: '9rem', borderRadius: '5px', border: '2px solid #42331A' }}>
                            <div className='text-light'>
                                <p className='d-flex justify-content-center mb-2' style={{color:'#F0E6D2'}}>PROGRESO DE PELICULAS PRODUCIDAS</p>
                                <ProgressBar style={{ width: '25rem' }} animated now={porcentajeProgreso} label={`${porcentajeProgreso}%`} />
                            </div>
                        </div>
                    </Col>

                    <Col className='p-2 my-3' lg={3} md={4}>
                        <div style={{ background: '#0E0F0F', width: '100%', height: '100%', borderRadius: '5px', border: '2px solid #42331A' }}>
                            <video className='h-100' ref={videoRef} controls style={{ width: '100%' }}>
                                <source src="/videos/Marvel.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>

                    <Col className='d-flex aling-items-center my-3' lg={4} md={4}>
                        <div className='m-0 mx-2 d-flex justify-content-center align-items-center my-2' style={{ background: '#0E0F0F', width: '90%', height: '9rem', borderRadius: '5px', border: '2px solid #42331A' }}>
                            <img
                                className='d-flex justify-content-center'
                                src="https://wallpapercave.com/wp/wp8839459.jpg"
                                alt="poster-marvel"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <section className='p-3' style={{ height: '20rem' }}>
                <SliderCarousel characters={characters} />
            </section>

        </>
    )
}

export default MainContent