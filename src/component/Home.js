import React from 'react';
// Import MUI
import {
  Container,
  Box,
  Button,
  Grid,
  Link,
  Typography,
} from "@mui/material";
// Import Icon MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Import Background Particles
import Particles from "react-tsparticles";
// Import Image
import foto from '../img/foto.svg';

// Const Particles
const Home = () => {
  const particlesInit = (main) => {
      console.log(main);
  };
  
  const particlesLoaded = (container) => {
      console.log(container);
  };
  
  return (
    <div className="Home">
        <Container maxWidth="xl">
          {/* Background Particles */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className='particles'
            options={{
              fullScreen: {
                enable: false,
                zIndex: 0,
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#000000",
                },
                links: {
                  color: "#000000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />

          <Box maxWidth="xl" sx={{ zIndex: '1', position:"relative" }}>          
            <Grid container spacing={1} align='center' mt={1} mb={3}>
              <Grid item xs={12}>
                {/* Image */}
                <img src={foto} alt="foto" width={340} data-aos="flip-left"/>

                {/* Name & Description */}
                <Typography sx={{fontSize: 38, textAlign: 'center', fontWeight: 'bold'}} mt={-2} data-aos="fade-down">Hi! I'm Adelia</Typography>
                <Typography sx={{fontSize: 20, textAlign: 'center'}} mb={2} data-aos="fade-down">Student | Junior Front-End</Typography>

                {/* Button */}
                <Button variant="contained" className="btn" sx={{backgroundColor:'#1f2235', color:'#fff'}} href="https://drive.google.com/file/d/1MwUvVOdJ-nnf5GrdHPhvndZ_V71CumIX/view" target="_blank">Here's My CV!</Button>
                <br />

                {/* Contact */}
                <Link href="https://www.instagram.com/adelialistic/" target="_blank" underline="none" mr={1}><InstagramIcon className="icon" data-aos="flip-left"></InstagramIcon></Link>
                <Link href="https://www.linkedin.com/in/adelia-adel-38a96a211" target="_blank" underline="none" mr={1}><LinkedInIcon className="icon" data-aos="flip-left"></LinkedInIcon></Link>
                <Link href="https://github.com/itsadeliasembiring" target="_blank" underline="none"><GitHubIcon className="icon" data-aos="flip-left"></GitHubIcon></Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
    </div>
  );
};
export default Home;
