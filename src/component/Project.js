import React from 'react';
// Import MUI
import {
  Box,
  Card,
  CardContent,
  CardMedia, 
  Container,
  Grid,
  Typography,
} from "@mui/material";
// Import Card MUI
import { CardActionArea } from '@mui/material';
// Import Image
import project1 from '../img/project1.svg';
import project2 from '../img/project2.svg';
import soon from '../img/soon.gif';

export default function Project() {
  return (
    <div className='Project'>
      <Container maxWidth="xl">
        <Box maxWidth="xl" mb={7}>
          {/* Project-title */}
          <Typography
            // CSS Font
            sx={{
              fontSize: {
                xl: 60,
                lg: 50,
                md: 40,
                sm: 37,
                xs: 35
              },
              mt: 3,
              mb: 3,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
            
            // Animasi Aos
            data-aos="fade-down"
          >Here My Project!
          </Typography>

          <Grid container spacing={5} justifyContent="center">
            <Grid item> 
              {/* Card Project 1 */}
              <Card
                sx={{ maxWidth: 345}}
                // Animasi AOS
                data-aos="flip-left"
              >
                <CardActionArea>
                  {/* Foto Project */}
                  <CardMedia
                    component="img"
                    height="230"
                    image={project1}
                    alt="Perpusdig"
                    className='card-media'
                  />
                  <CardContent>
                    {/* Project Name */}
                    <Typography gutterBottom variant="h5" component="div">
                      Digital Library (Perpusdig)
                    </Typography>
                    {/* Project Desciption */}
                    <Typography variant="body2" color="text.secondary">
                      The Digital Library is designed with an attractive minimalist design that makes it easier for students of SMKN 1 Bekasi to read digital books anytime and anywhere.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Card Project 2 */}
            <Grid item>
              <Card sx={{ maxWidth: 345}} data-aos="flip-left">
                <CardActionArea>
                  {/* Foto Project */}
                  <CardMedia
                    component="img"
                    height="230"
                    image={project2}
                    alt="portfolioreact"
                    className='card-media'
                  />
                  <CardContent>
                    {/* Project Name */}
                    <Typography gutterBottom variant="h5" component="div">
                      Portfolio React JS
                    </Typography>
                    {/* Project Description */}
                    <Typography variant="body2" color="text.secondary">
                      Its a website portfolio used React JS with simple and attractive design. Now available on github pages.<br/><br/> 
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Card Project 3 (Comingsoon) */}
            <Grid item>
              <Card sx={{ maxWidth: 345}} data-aos="flip-left">
                <CardActionArea>
                  {/* Foto Project */}
                  <CardMedia
                    component="img"
                    height="230"
                    image={soon}
                    alt="Comingsoon"
                  />
                  <CardContent>
                    {/* Project Name */}
                    <Typography gutterBottom variant="h5" component="div">
                      Coming Soon!
                    </Typography>
                    {/* Project Description */}
                    <Typography variant="body2" color="text.secondary">
                      I hope i can create many project and show to you in this portfolio.
                      I will upgrade this portfolio, stay tune my new project!<br/><br/>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </div>
  );
}
