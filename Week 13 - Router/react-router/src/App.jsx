import './App.css'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'

function Home() {
    return <h1>Home</h1>
}

function About() {
    return <h1>About</h1>
}

function Contact() {
    return <h1>Contact</h1>
}

function DashboardDetails() {
    return (
        <>
            <h1>Dashboard Details</h1>
            <Link to="/dashboard">Dashboard</Link>
        </>
    )
}

function Dashboard() {

    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/dashboard/details">Details</Link>
        </>
    )
}

function User() {
    const {userId} = useParams()
    return (
        <>
            <h1>{userId}</h1>
        </>
    )
}


function App() {

    return (
        <>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/dashboard/details" element={<DashboardDetails/>}/>
                    <Route path="/users/:userId/" element={<User/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
