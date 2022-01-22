import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";
// Import foto
import foto2 from '../img/foto2.svg';

export default function About() {
  return (
      <div className='About'>
        <Container maxWidth="xl" >
          <Box maxWidth="xl">
          <Grid container spacing={1} align='center' mt={3} mb={3}>
              <Grid item xs={12}>
                {/* Foto */}
                <img src={foto2} alt="foto2" width={360}/>

                {/* Name & Description */}
                <Typography sx={{fontSize: 38, textAlign: 'center', fontWeight: 'bold'}} mt={-1}>Hello!</Typography>
                <Typography sx={{fontSize: 38, textAlign: 'center', fontWeight: 'bold'}} mt={-2}>My name is <span>Adelia</span></Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: 30,
                      lg: 20,
                      md: 15,
                      sm: 14,
                      xs: 12
                    }
                  }}
                  mb={2}
                >I'm a junior front-end developer and studies at a vocational highschool majoring in Software Engineering.
                  <br/>I'm currently join internship program at the Brilyan Trimatra Utama Company.
                  <br/>I have interested in front-end website and artificial intelligence.
                  <br/>I hope i can create many project and show to you in this portfolio.
                  <br/>I will upgrade this portfolio, stay tune my new project!</Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
}
