import React from 'react';
// Import MUI
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// Import Image
import foto2 from '../img/foto2.svg';

export default function About() {
  return (
      <div className='About'>
        <Container maxWidth="xl" >
          <Box maxWidth="xl">
           <Grid
              containerspacing={1}
              // Align
              align='center'
              // Margin Top
              mt={3}
              // Margin Bottom
              mb={3}
            >
              <Grid item xs={12}>
                {/* Image */}
                <img src={foto2} alt="foto2" width={360} data-aos="fade-right"/>

                {/* Name */}
                <Typography
                  // CSS
                  sx={{fontSize: 38, textAlign: 'center', fontWeight: 'bold'}}
                  // Margin-top
                  mt={-1}
                  // Animasi AOS
                  data-aos="fade-down">
                    Hello!
                </Typography>
                <Typography
                  // CSS
                  sx={{fontSize: 38, textAlign: 'center', fontWeight: 'bold'}}
                  // Margin-top
                  mt={-2}
                  // Animasi AOS
                  data-aos="fade-down">
                    My name is <span>Adelia</span>
                </Typography>
                
                {/* Description */}
                <Typography
                  // CSS ukuran font
                  sx={{
                    fontSize: {
                      xl: 30,
                      lg: 20,
                      md: 15,
                      sm: 14,
                      xs: 12
                    }
                  }}
                  // Margin bottom
                  mb={2}
                  // Animasi AOS
                  data-aos="fade-up"
                >
                  I'm a junior front-end developer and studies at a vocational highschool majoring in Software Engineering.
                  <br/>I'm currently join internship program at the Brilyan Trimatra Utama Company.
                  <br/>I have interested in front-end website and artificial intelligence.
                  <br/>I hope i can create many project and show to you in this portfolio.
                  <br/>I will upgrade this portfolio, stay tune my new project!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
};
