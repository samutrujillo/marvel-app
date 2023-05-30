import React, { useState } from 'react'
import Image from 'next/image';
import {Row, Col,ToggleButton,ToggleButtonGroup, Container} from 'react-bootstrap'




const Header = ({ showMarvelCards }) => {
    const [value, setValue] = useState([1, 2]);

  
    const handleChange = (val) => setValue(val);
    
    return (
        <>
            <Row className='bg-dark m-0' fluid>

                <Col className='p-4'>

                    <div className='d-flex'>
                    <Image style={{ width: '15rem', height: '4rem' }} src={require('../../assets/images/logo-marvel.png')}></Image>

                        <div className='mx-4 d-flex align-items-center '>
                            <ToggleButtonGroup   type="checkbox" value={value} onChange={handleChange}>
                                <ToggleButton variant='dark' id="tbg-btn-1">
                                <span style={{color:'#F0E6D2'}}>HOME</span>
                                </ToggleButton>
                                <ToggleButton  variant='dark' id="tbg-btn-2" value={2} onClick={showMarvelCards}>
                                    <span style={{color:'#C89B3C'}}>PERSONAJES</span>
                                </ToggleButton>

                            </ToggleButtonGroup>
                        </div>
                    </div>
                </Col>
                <Col className='p-4 mx-4 d-flex justify-content-end'>
                    <Image
                        className='mx-4 my-3'
                        style={{
                            cursor:'pointer',
                            opacity: '0.9',
                            height: '1.2rem',
                            width: '1.3rem',
                            borderRadius: '1rem',
                            objectFit: 'cover',
                            transition: 'opacity 0.5s' 
                        }}
                        src={require('../../assets/images/notificacion-icon.png')}
                        onMouseEnter={(e) => e.target.style.opacity = '1'} 
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'} 
                    ></Image>
                    <Image
                        className='my-3'
                        style={{
                            cursor:'pointer',
                            opacity: '0.9',
                            height: '1.2rem',
                            width: '1.3rem',
                            borderRadius: '1rem',
                            objectFit: 'cover',
                            transition: 'opacity 0.5s'
                        }}
                        src={require('../../assets/images/ajustes-icon.png')}
                        onMouseEnter={(e) => e.target.style.opacity = '1'} 
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    ></Image>
                </Col>
            <hr style={{ backgroundColor: '#F0E6D2', height: '1px', margin: '0' }} />
            </Row>

        </>
    )
}

export default Header
