import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import notepad from '../images/notepad.png';

const pages = ['Login', 'Cadastro'];

function ResponsiveAppBarHome() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="relative"
            sx={{
                width: '100%',
                height: '100px',
                bgcolor: '#ffffff',
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Container sx={{ bgcolor: '#ffffff !important' }}>
                <Toolbar>
                    <Box
                        component="img"
                        src={notepad}
                        width="50px"
                        sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, mr: 1 }}
                    ></Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'flex', md: 'flex' },
                            fontFamily: 'inter',
                            fontWeight: 32,
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none'
                        }}
                    >
                        Recados
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' }, color: 'black' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map(page => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 9,
                            display: { xs: 'flex', sm: 'none', md: 'none' },
                            fontFamily: 'inter',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none'
                        }}
                    >
                        Recados
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' }, justifyContent: 'end' }}>
                        {pages.map(page => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    bgcolor: '#D0A8E4',
                                    borderRadius: '5px',
                                    marginLeft: '15px',
                                    fontFamily: 'inter',
                                    fontWeight: 500,
                                    fontSize: '16px'
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBarHome;
