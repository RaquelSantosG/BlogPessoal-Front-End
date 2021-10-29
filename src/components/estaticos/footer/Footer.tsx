import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Typography, Box, Grid } from '@material-ui/core';
import "./Footer.css";

function Footer() {

    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="box1">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="" target="_blank">
                            <FacebookIcon className="redes" />
                        </a>
                        <a href="" target="_blank">
                            <InstagramIcon className="redes" />
                        </a>
                    </Box>
                </Box>
                <Box className="box2">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="textos">© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="">
                            <Typography variant="subtitle2" gutterBottom className="textos" align="center">Todos os direitos reservados a Raquel Gomes</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    )
}

export default Footer;
