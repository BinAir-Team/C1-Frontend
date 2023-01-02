import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'remixicon/fonts/remixicon.css'
import './assets/styles/main.css'
import { Routes, Route, HashRouter, useLocation } from 'react-router-dom'
import Protected from './utils/Protected'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { logout } from './redux/slices/authSlice'
import {
    Home,
    Flight,
    Auth,
    NotFound,
    Tickets,
    DashboardLayout,
    MainMenu,
    PromosMenu,
    TicketsMenu,
    TransactionsMenu,
    UsersMenu,
    AddTickets,
    EditTickets,
    Promo,
    DetailPromo,
    Reset,
    Booking,
    ConfirmBooking,
    PaymentBooking,
    PaymentConfirmation,
    PaymentDone,
    TermofService,
    Profile,
    Password,
    Passenger,
    Detail,
    Order,
    Whislist,
    AddPromos,
    EditPromos,
    AddUsers,
    EditUsers,
} from './pages'
import { toast, ToastContainer } from 'react-toastify'
import { retriveTransUser } from './redux/slices/transactionSlice'

const App = () => {
    const dispatch = useDispatch()
    //fungsi gae get token
    const token = JSON.parse(localStorage.getItem('user'))
        ? JSON.parse(localStorage.getItem('user')).token
        : null
    const isTokenExpired = (token) => {
        // Mendekode token menggunakan jwtDecode
        const decoded = jwtDecode(token)

        // Mengambil waktu saat ini
        const currentTime = Date.now().valueOf() / 1000

        // Jika waktu saat ini lebih besar dari waktu kedaluwarsa token,
        // maka token sudah kedaluwarsa
        if (currentTime > decoded.exp) {
            return true
        }

        return false
    }

    //fungsi gae cek token exp

    useEffect(() => {
        if (token) {
            const isExp = isTokenExpired(token)
            if (isExp) {
                dispatch(logout())
                toast.error('Your seasion expired!')
            }
        }
    }, [])

    //fungsi gae logout lk token exp

    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/flight' element={<Flight />}></Route>
                    <Route path='/flight/search' element={<Tickets />} />
                    <Route path='/flight/booking' element={<Booking />} />
                    <Route
                        path='/flight/confirm/:idTicket'
                        element={<ConfirmBooking />}
                    />
                    <Route path='/flight/done' element={<PaymentDone />} />
                    <Route path='/payment' element={<PaymentBooking />} />
                    <Route
                        path='/payment/confirmation'
                        element={<PaymentConfirmation />}
                    />
                    <Route
                        path='/terms/condition'
                        element={<TermofService />}
                    />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/reset' element={<Reset />} />
                    <Route path='/promo' element={<Promo />} />
                    <Route
                        path='/promo/view/:promoId'
                        element={<DetailPromo />}
                    />
                    <Route path='*' element={<NotFound />} />
                    <Route
                        path='/dashboard'
                        element={
                            <Protected>
                                <DashboardLayout />
                            </Protected>
                        }
                    >
                        <Route path='' element={<MainMenu />} />
                        <Route path='promos' element={<PromosMenu />} />
                        <Route path='promos/add' element={<AddPromos />} />
                        <Route
                            path='promos/edit/:promoId'
                            element={<EditPromos />}
                        />
                        <Route path='tickets' element={<TicketsMenu />} />
                        <Route path='tickets/add' element={<AddTickets />} />
                        <Route
                            path='tickets/edit/:ticketId'
                            element={<EditTickets />}
                        />
                        <Route
                            path='transactions'
                            element={<TransactionsMenu />}
                        />
                        <Route path='users' element={<UsersMenu />} />
                        <Route path='users/add' element={<AddUsers />} />
                        <Route
                            path='users/edit/:userId'
                            element={<EditUsers />}
                        />
                    </Route>
                    <Route
                        path='/account/profile'
                        element={
                            <Protected>
                                <Profile />
                            </Protected>
                        }
                    />
                    <Route
                        path='/account/password'
                        element={
                            <Protected>
                                <Password />
                            </Protected>
                        }
                    />
                    <Route
                        path='/account/passenger'
                        element={
                            <Protected>
                                <Passenger />
                            </Protected>
                        }
                    />
                    <Route
                        path='/account/order'
                        element={
                            <Protected>
                                <Order />
                            </Protected>
                        }
                    />
                    <Route
                        path='/account/order/tickets'
                        element={
                            <Protected>
                                <Detail />
                            </Protected>
                        }
                    />
                    <Route
                        path='/account/wishlist'
                        element={
                            <Protected>
                                <Whislist />
                            </Protected>
                        }
                    />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
