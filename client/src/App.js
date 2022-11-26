import React from 'react';
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import AppRouter from './routers/AppRouter';


const App = () => {
    return(
        <div className='ui container'>
            <AppProvider>
                <Header />
                <AppRouter />
            </AppProvider>
        </div>
    )
}

export default App;