import React from "react"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Search from '@material-ui/icons/Search'
import { Box } from '@material-ui/system'
import { InputAdornment, TextField } from '@material-ui/core'
import "./Navbar.css"
function Navbar(){
    return (
    <>
    <AppBar position="fixed" color="primary">
    <Toolbar>
        <MenuIcon />
        <Typography variant="h6">
            BlogPessoal
        </Typography>
        <Box ml="auto">
            <TextField
                id="input-with-icon-textfield"

                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
        </Box>
    </Toolbar>
</AppBar>
    </>

    )

}

export default Navbar;