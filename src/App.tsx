import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ButtonShowcase from './pages/ButtonShowcase'
import './App.css'
import LeftMenu from './components/LeftMenu'
import InputFieldShowcase from './pages/InputShowcase';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <LeftMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1,
            marginLeft: sidebarOpen ? '280px' : '80px',
            transition: 'margin-left 0.3s ease-in-out',
          }}
        >
          <Header />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buttons" element={<ButtonShowcase />} />
              <Route path="/inputs" element={<InputFieldShowcase />} />
              {/* Add other routes as needed */}
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  )
}

export default App