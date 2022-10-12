
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider,createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import AuthLayout from './components/layout/AuthLayout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Board from './pages/Board'
import Login from './pages/Login'

function App() {

  return (
    <div>
      Project Management App
    </div>
  )
}

export default App
