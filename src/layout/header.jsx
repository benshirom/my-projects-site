import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import { Link,useNavigate } from "react-router-dom"
import TemporaryDrawer from '../ui/navbar';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const nav = useNavigate()

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box   color={'white'}
        sx={{ flexGrow: 1 }} 
        >
            <AppBar  position="static" sx={{backgroundColor:'black'}}>
                <Toolbar>
                <TemporaryDrawer  />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                    </Typography>
                    <Box color={'inherit'} 
                        sx={{ mr: 2, display: { xs: 'none', lg: 'block', xl: 'block' } }}
                    >
                  <Button color="inherit" onClick={()=>{nav('/')}} >Home</Button>
                  <Button color="inherit" onClick={()=>{nav('/MyProjects')}}>My Projects</Button>
                  <Button color="inherit" onClick={()=>{nav('/AboutMe')}}>About Me</Button>

                           
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {/* <MenuItem onClick={handleMenuClose}> <Link  to={"/"} color="inherit">Home</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}> <Link to={"/MyProjects"} color="inherit">My Projects</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to={"/AboutMe"} color="inherit">About Me</Link></MenuItem> */}
              
            </Menu>
        </Box>
    );
}
export default Header
