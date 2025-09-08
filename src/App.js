import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import PageContainer from './components/PageContainer';
import Home from './pages/Home';
// import About from './pages/About';
import Game from './pages/Board';
import PhotoWall from './pages/PhotoWall';
import Product from './pages/Product';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import './styles/App.css';


function App() {
    return (
        <div className="app">
            {/*导航栏*/}
            <Navbar />
            <PageContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/photoWall" element={<PhotoWall />} />
                    <Route path="/product" element={<Product />} />
                    {/*<Route path="/contact" element={<Contact />} />*/}
                </Routes>
            </PageContainer>
            {/*<Footer />*/}
        </div>
    );
}

export default App;