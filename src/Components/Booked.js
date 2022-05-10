import { Link } from 'react-router-dom'

export default function Booked() {
    return (
        <>
            <Link to="/home">Go Back To Home Page</Link>
            <h1 style={{ marginTop: 20, color: 'blue', marginLeft: 400 }}>Flight is booked</h1>
        </>)
}