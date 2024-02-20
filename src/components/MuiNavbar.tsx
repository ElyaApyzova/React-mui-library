import { AppBar, IconButton, Stack, Toolbar,Typography, Button, Menu, MenuItem } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from "react";


export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const handleClick = (even) => {
        
    }
    return (
        <AppBar position="static">
         <Toolbar>
            <IconButton size="large" edge='start' color='inherit' aria-label="logo">
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component='div' sx={{ flexGrow: 1}}>
                POKEMONAPP
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit' id="resources-button">Resources</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl}>
               <MenuItem>Blog</MenuItem>
               <MenuItem>Podcast</MenuItem>
            </Menu>
         </Toolbar>
        </AppBar>
    )
}