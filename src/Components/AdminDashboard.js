import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import './AdminDashboardStyles.css'
import { Link } from 'react-router-dom'


const AdminDashboard = () => {
    return (
        <header>
            <nav class="navbarDashboard">
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/FlightsList'><li>All Flights</li></Link>
                    <Link to='/FAQ'><li>Add Flights</li></Link>

                </ul>
            </nav>
        </header>
    );
};
export default AdminDashboard;