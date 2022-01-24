import React from 'react';
// Import MUI
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Skill() {
  return (
    <div className='Skill'>
      <Container maxWidth="xl">
        <Box maxWidth="xl" justifyContent="center" mb={6}>
          {/* Skill title */}
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
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              // Animasi AOS
              data-aos="fade-down"
          >My Skill
          </Typography>

          <Grid container alignItems="center" justifyContent="center"> 
            <Grid item>
              {/* Skill-content */}
              <div className="myskill" data-aos="fade-up">
                  <div className="skill-content">   
                      <div className="icon-skill">
                          {/* Html */}
                          <div className="skill-html">
                              {/* Icon */}
                              <i className="uil uil-html3"></i>
                              {/* Skill Name */}
                              <p>HTML</p>
                          </div>
                          {/* Progress */}
                          <div className="skill-progress">
                              <div className="skill html">90%</div>
                          </div>

                          {/* CSS  */}
                          <div className="skill-css">
                              <i className="uil uil-css3-simple"></i>
                              <p>CSS</p>
                          </div>
                          <div className="skill-progress">
                              <div className="skill css">80%</div>
                          </div>

                          {/* Javascript */}
                          <div className="skill-javascript">
                              <i className="uil uil-java-script"></i>
                              <p>JAVASCRIPT</p>
                          </div>
                          <div className="skill-progress">
                              <div className="skill javascript">35%</div>
                          </div>

                          {/* Canva */}
                          <div className="skill-canva">
                              <i className="uil uil-palette"></i>
                              <p>CANVA</p>
                          </div>
                          <div className="skill-progress">
                              <div className="skill canva">90%</div>
                          </div>
                          
                      </div>
                  </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
