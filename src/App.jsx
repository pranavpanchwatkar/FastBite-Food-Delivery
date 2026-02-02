import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './context/AuthContext';

function Layout() {
    const location = useLocation();
    const isAuthPage = ['/login', '/signup'].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {!isAuthPage && <Navbar />}
            <main className={`flex-grow ${!isAuthPage ? 'pt-0' : ''}`}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/login" element={<AuthPage />} />
                    <Route path="/signup" element={<AuthPage initialMode="signup" />} />
                </Routes>
            </main>
            {!isAuthPage && <Footer />}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout />
            </AuthProvider>
        </Router>
    );
}

export default App;
