import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EmployeeView from './pages/EmployeeView'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'

// Placeholder for now
const Home = () => (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1>InnTime</h1>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
            <a href="/time" style={{ padding: '15px 30px', background: '#667eea', color: 'white', borderRadius: '10px', textDecoration: 'none' }}>
                Mitarbeiter-Login
            </a>
            <a href="/admin" style={{ padding: '15px 30px', background: '#e2e8f0', color: '#333', borderRadius: '10px', textDecoration: 'none' }}>
                Admin-Login
            </a>
        </div>
    </div>
)

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/time" element={<EmployeeView />} />
                <Route path="/time/:uuid" element={<EmployeeView />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
