import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import google_play from '../assets/images/google-play.svg'
import '../assets/styles/footer.css'

const Footer = () => {
    return (
        <div>
            <Container>
                <Row className='footer'>
                    <Col>
                        <p className='link-footer-title'>BinAir</p>
                        <a href='#' className='d-block'>
                            Home
                        </a>
                        <a href='#' className='d-block'>
                            Tentang Kami
                        </a>
                        <a href='/#/promo' className='d-block'>
                            Promo
                        </a>
                        <a href='/#/flight' className='d-block'>
                            penerbangan
                        </a>
                    </Col>
                    <Col>
                        <p className='link-footer-title'>Akun</p>
                        <a href='/#/auth' className='d-block'>
                            Daftar
                        </a>
                        <a href='/#/auth' className='d-block'>
                            Lupa Password
                        </a>
                    </Col>
                    <Col>
                        <p className='link-footer-title'>Support</p>
                        <a href='#' className='d-block'>
                            BinAir Guide
                        </a>
                        <a href='#' className='d-block'>
                            FAQ
                        </a>
                        <a href='#' className='d-block'>
                            How to Book
                        </a>
                        <a href='#' className='d-block'>
                            Help Center
                        </a>
                        <a href='#' className='d-block'>
                            Terms of Use
                        </a>
                    </Col>
                    <Col>
                        <p className='link-footer-title'>Aplikasi Kami</p>
                        <a href='#'>
                            <img
                                src={google_play}
                                alt='mobile-version'
                                width='130'
                                loading="eager"
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <div className='text-center copyright'>
                <p>Copyright 2022 Airpaz.com. All rights reserved.</p>
                <p>
                    All logos, patents, and trademarks belong to their
                    respective owners
                </p>
            </div>
        </div>
    )
}

export default Footer
