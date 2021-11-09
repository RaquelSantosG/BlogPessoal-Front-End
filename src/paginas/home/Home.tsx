import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from "@material-ui/core";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { useHistory } from "react-router";
import useLocalStorage from "react-use-localstorage";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import "./Home.css";




function Home(){

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")
    
        }
    }, [token])
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="titulo" >Bem-vindo ao Blog</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://wpimages.mlabs.com.br/wp-content/uploads/2021/09/21121113/mlabs-agendamento-posts.png" alt="" width="450px" height="450px" />
                </Grid>
                <Grid xs={12} className="postagens"> 
                <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;