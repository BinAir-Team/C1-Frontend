import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Penyimpanan lokal

import authReducer from './slices/authSlice'
import ticketReducer from './slices/ticketSlice'
import promoReducer from './slices/promoSlice'
import notifReducer from './slices/notifSlice'
import userReducer from './slices/userSlice'
import transReducer from './slices/transactionSlice'
import wishlistReducer from './slices/wishlistSlice'

// Konfigurasi untuk redux-persist
const persistConfig = {
    key: 'root', // Kunci untuk menyimpan state
    storage, // Penyimpanan lokal yang digunakan
}

// Reducer yang akan dipersist
const rootReducer = combineReducers({
    auth: authReducer,
    ticket: ticketReducer,
    promo: promoReducer,
    notif: notifReducer,
    user: userReducer,
    transaction: transReducer,
    wishlist: wishlistReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) // Reducer yang telah dipersist

export const store = configureStore({
    reducer: persistedReducer, // Menggunakan reducer yang telah dipersist
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store) // Mempersist state ke dalam penyimpanan lokal
