import {React, useState} from "react";
import { Header, Footer } from "../components";
import {
    Container,
    Row,
    Col,
    Button,
    Dropdown,
    DropdownButton,
    Card,
    Accordion,
    Form,
    Pagination
  } from "react-bootstrap";
import "../assets/styles/order.css";
import Payment from "../assets/images/payment-logo.svg";
import logo from "../assets/images/binair-logo.svg";
// import Nodata from "../assets/images/no-data.svg";


  const Order = () => {

    return (
        <div>
            <Header />
                <Container fluid className="account-box p-5">
                    <Container fluid="xl" className="account-main p-3">
                        <Row>
                            <Col xs={3} className="left-panel left-flex">
                                <Button href="/#/account/profile"className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-user-3-line"></i>
                                    <span>Profil</span>
                                </Button>
                                <Button href="/#/account/password" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-key-2-line"></i>
                                    <span>Ubah Password</span>
                                </Button>
                                <Button href="/#/account/passenger" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-list-check"></i>
                                    <span>Daftar Traveler</span>
                                </Button>
                                <Button className="mb-3" variant="info" size="lg">
                                    <div className="selected">
                                        <i class="remix-icon ri-calendar-check-line"></i>
                                        <span>Daftar Pesanan</span>
                                    </div>
                                </Button>
                                <Button href="/#/account/whislist" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-shopping-basket-2-line"></i>
                                    <span>Wishlist</span>
                                </Button>
                                <Button className="mb-3" variant="light" size="lg"
                                    onClick={() => {
                                        // setDataUser({});
                                        dispatch(logout());
                                    }}
                                >
                                    <i class="remix-icon ri-logout-box-r-line"></i>
                                    <span>Keluar</span>
                                </Button>
                            </Col>
                            <Col xs={9} className="content-panel ps-5">
                                <Card
                                    bg="light"
                                    key="Light"
                                    text="dark"
                                    className="mb-2"
                                    >
                                    <Card.Header className="header-flex">
                                        <div className="p-2 profile-header">
                                            <i class="remix-icon ri-calendar-check-line"></i>
                                            <span>Daftar Pesanan</span>
                                        </div>
                                        <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Kode BinAir"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-info">Search</Button>
                                        </Form>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="status-filter d-flex justify-content-between m-2">
                                            <div>
                                                <Button className="d-flex justify-content-center ps-4 pe-4" variant="secondary" size="lg">
                                                    Dikonfirmasi
                                                </Button>
                                            </div>
                                            <div>
                                                <Button className="d-flex justify-content-center filter ps-4 pe-4" variant="secondary" size="lg">
                                                    Selesai
                                                </Button>
                                            </div>
                                            <div>
                                                <Button className="d-flex justify-content-center filter ps-4 pe-4" variant="secondary" size="lg">
                                                    Tertunda
                                                </Button>
                                            </div>
                                            <div>
                                                <Button className="d-flex justify-content-center filter ps-4 pe-4" variant="secondary" size="lg">
                                                    Dibatalkan
                                                </Button>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <div className="img-box">
                                    {/* <img src={Nodata} alt="" />
                                    <p><strong>Tidak Ada Data</strong></p>
                                    <p className="txt">Jika anda tidak bisa menyelesaikan proses pemesanan, kami akan menyimpannya di sini!</p> */}
                                    <Card className="order-list mt-3">
                                        <Row>
                                            <Col md={8} className="d-flex flex-column pe-0">
                                                <div className="header d-flex justify-content-between p-3">
                                                    <h2 className="header-text"><i class="remix-icon ri-flight-takeoff-line"></i>PENERBANGAN</h2>
                                                    <DropdownButton id="dropdown-basic-button" title="">
                                                        <Dropdown.Item href="#/account/order/tickets">Detail</Dropdown.Item>
                                                        <Dropdown.Item href="#/flight/booking">Lanjutkan ke Pembayaran</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div className="subheader d-flex justify-content-center pe-3 ps-3">
                                                    <img src={logo} alt="" />
                                                    <p className="subheader-text mt-2 mb-0 ms-2">Binair</p>
                                                </div>
                                                <div className="summary-info d-flex justify-content-center mt-4 pb-5">
                                                    <div className="flight-info d-flex">
                                                        <div className="flight-info-start">
                                                            <h2><strong>DPS</strong></h2>
                                                            <h3 className="is-grey">Bali Denpasar</h3>
                                                        </div>
                                                        <div className="flight-info-timeline ms-3 me-3">
                                                            <p className="is-grey">Sekali Jalan</p>
                                                            <div className="timeline d-flex flex-row justify-content-center align-items-center">
                                                                <div className="airplane-single">
                                                                    <svg class="svg-inline--fa fa-plane fa-w-18 fa-fw" data-prefix="fal" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-88.36c-10.63 0-18.3 10.17-15.38 20.39L192 192h-64l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H72c5.04 0 9.78-2.37 12.8-6.4L128 320h64l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h88.36c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64zm0 96H347.14L237.43 480h-57.86l54.86-192H112l-48 64H37.35l27.98-96-28-96H64l48 64h122.42L179.57 32h57.87l109.71 192H480c26.24 0 62.61 21.75 64 31.91-1.39 10.34-37.76 32.09-64 32.09z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                                <div className="divider"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flight-info-end">
                                                            <h2><strong>CGK</strong></h2>
                                                            <h3 className="is-grey">Jakarta</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} className="order-right-summary d-flex flex-column justify-content-center">
                                                <div className="order-status-container d-flex flex-column align-items-center">
                                                    <div className="order-code">
                                                        <p className="is-grey mb-1">Kode Binair</p>
                                                        <p className="header-text"><strong>1017993455</strong></p>
                                                    </div>
                                                    <span className="order-status status-badge is-warning">Pembayaran dalam proses</span>
                                                    <p className="is-grey mt-3">Tanggal pemesanan: 29 Desember 2022</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card>
                                        <Row>
                                            <Col md={8} className="d-flex flex-column pe-0">
                                                <div className="header d-flex justify-content-between p-3">
                                                    <h2 className="header-text"><i class="remix-icon ri-flight-takeoff-line"></i>PENERBANGAN</h2>
                                                    <DropdownButton id="dropdown-basic-button" title="">
                                                        <Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Lanjutkan ke Pembayaran</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div className="subheader d-flex justify-content-center pe-3 ps-3">
                                                    <img src={logo} alt="" />
                                                    <p className="subheader-text mt-2 mb-0 ms-2">Binair</p>
                                                </div>
                                                <div className="summary-info d-flex justify-content-center mt-4 pb-5">
                                                    <div className="flight-info d-flex">
                                                        <div className="flight-info-start">
                                                            <h2><strong>DPS</strong></h2>
                                                            <h3 className="is-grey">Bali Denpasar</h3>
                                                        </div>
                                                        <div className="flight-info-timeline ms-3 me-3">
                                                            <p className="is-grey">Sekali Jalan</p>
                                                            <div className="timeline d-flex flex-row justify-content-center align-items-center">
                                                                <div className="airplane-single">
                                                                    <svg class="svg-inline--fa fa-plane fa-w-18 fa-fw" data-prefix="fal" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-88.36c-10.63 0-18.3 10.17-15.38 20.39L192 192h-64l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H72c5.04 0 9.78-2.37 12.8-6.4L128 320h64l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h88.36c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64zm0 96H347.14L237.43 480h-57.86l54.86-192H112l-48 64H37.35l27.98-96-28-96H64l48 64h122.42L179.57 32h57.87l109.71 192H480c26.24 0 62.61 21.75 64 31.91-1.39 10.34-37.76 32.09-64 32.09z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                                <div className="divider"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flight-info-end">
                                                            <h2><strong>CGK</strong></h2>
                                                            <h3 className="is-grey">Jakarta</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} className="order-right-summary d-flex flex-column justify-content-center">
                                                <div className="order-status-container d-flex flex-column align-items-center">
                                                    <div className="order-code">
                                                        <p className="is-grey mb-1">Kode Binair</p>
                                                        <p className="header-text"><strong>1017993455</strong></p>
                                                    </div>
                                                    <span className="order-status status-badge is-danger">Kadaluarsa</span>
                                                    <p className="is-grey mt-3">Tanggal pemesanan: 29 Desember 2022</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card>
                                        <Row>
                                            <Col md={8} className="d-flex flex-column pe-0">
                                                <div className="header d-flex justify-content-between p-3">
                                                    <h2 className="header-text"><i class="remix-icon ri-flight-takeoff-line"></i>PENERBANGAN</h2>
                                                    <DropdownButton id="dropdown-basic-button" title="">
                                                        <Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Lanjutkan ke Pembayaran</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div className="subheader d-flex justify-content-center pe-3 ps-3">
                                                    <img src={logo} alt="" />
                                                    <p className="subheader-text mt-2 mb-0 ms-2">Binair</p>
                                                </div>
                                                <div className="summary-info d-flex justify-content-center mt-4 pb-5">
                                                    <div className="flight-info d-flex">
                                                        <div className="flight-info-start">
                                                            <h2><strong>DPS</strong></h2>
                                                            <h3 className="is-grey">Bali Denpasar</h3>
                                                        </div>
                                                        <div className="flight-info-timeline ms-3 me-3">
                                                            <p className="is-grey">Sekali Jalan</p>
                                                            <div className="timeline d-flex flex-row justify-content-center align-items-center">
                                                                <div className="airplane-single">
                                                                    <svg class="svg-inline--fa fa-plane fa-w-18 fa-fw" data-prefix="fal" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-88.36c-10.63 0-18.3 10.17-15.38 20.39L192 192h-64l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H72c5.04 0 9.78-2.37 12.8-6.4L128 320h64l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h88.36c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64zm0 96H347.14L237.43 480h-57.86l54.86-192H112l-48 64H37.35l27.98-96-28-96H64l48 64h122.42L179.57 32h57.87l109.71 192H480c26.24 0 62.61 21.75 64 31.91-1.39 10.34-37.76 32.09-64 32.09z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                                <div className="divider"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flight-info-end">
                                                            <h2><strong>CGK</strong></h2>
                                                            <h3 className="is-grey">Jakarta</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} className="order-right-summary d-flex flex-column justify-content-center">
                                                <div className="order-status-container d-flex flex-column align-items-center">
                                                    <div className="order-code">
                                                        <p className="is-grey mb-1">Kode Binair</p>
                                                        <p className="header-text"><strong>1017993455</strong></p>
                                                    </div>
                                                    <span className="order-status status-badge is-info">Pembayaran Dikonfirmasi</span>
                                                    <p className="is-grey mt-3">Tanggal pemesanan: 29 Desember 2022</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card>
                                        <Row>
                                            <Col md={8} className="d-flex flex-column pe-0">
                                                <div className="header d-flex justify-content-between p-3">
                                                    <h2 className="header-text"><i class="remix-icon ri-flight-takeoff-line"></i>PENERBANGAN</h2>
                                                    <DropdownButton id="dropdown-basic-button" title="">
                                                        <Dropdown.Item href="#/action-1">Detail</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Lanjutkan ke Pembayaran</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div className="subheader d-flex justify-content-center pe-3 ps-3">
                                                    <img src={logo} alt="" />
                                                    <p className="subheader-text mt-2 mb-0 ms-2">Binair</p>
                                                </div>
                                                <div className="summary-info d-flex justify-content-center mt-4 pb-5">
                                                    <div className="flight-info d-flex">
                                                        <div className="flight-info-start">
                                                            <h2><strong>DPS</strong></h2>
                                                            <h3 className="is-grey">Bali Denpasar</h3>
                                                        </div>
                                                        <div className="flight-info-timeline ms-3 me-3">
                                                            <p className="is-grey">Sekali Jalan</p>
                                                            <div className="timeline d-flex flex-row justify-content-center align-items-center">
                                                                <div className="airplane-single">
                                                                    <svg class="svg-inline--fa fa-plane fa-w-18 fa-fw" data-prefix="fal" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-88.36c-10.63 0-18.3 10.17-15.38 20.39L192 192h-64l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H72c5.04 0 9.78-2.37 12.8-6.4L128 320h64l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h88.36c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64zm0 96H347.14L237.43 480h-57.86l54.86-192H112l-48 64H37.35l27.98-96-28-96H64l48 64h122.42L179.57 32h57.87l109.71 192H480c26.24 0 62.61 21.75 64 31.91-1.39 10.34-37.76 32.09-64 32.09z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                                <div className="divider"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flight-info-end">
                                                            <h2><strong>CGK</strong></h2>
                                                            <h3 className="is-grey">Jakarta</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} className="order-right-summary d-flex flex-column justify-content-center">
                                                <div className="order-status-container d-flex flex-column align-items-center">
                                                    <div className="order-code">
                                                        <p className="is-grey mb-1">Kode Binair</p>
                                                        <p className="header-text"><strong>1017993455</strong></p>
                                                    </div>
                                                    <span className="order-status status-badge is-success">Selesai</span>
                                                    <p className="is-grey mt-3">Tanggal pemesanan: 29 Desember 2022</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            </Col>
                        </Row> 
                       
                        <Card className="payment-content mt-5" style={{ width: "13rem" }}>
                            <Card.Body>
                            <Card.Title>
                                <strong>Jenis Pembayaran:</strong>
                            </Card.Title>
                            <Card.Text>
                                <img
                                src={Payment}
                                alt="
                                            payment"
                                />
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>

            <Footer />
        </div>
    )
  
}
export default Order;   