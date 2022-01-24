import React from 'react';
// Import MUI
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// Import Icon MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <div className='contact'>
      <Container maxWidth="xl" >
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
              // Animasi AOS
              data-aos="fade-down"
            >Connect with me
            </Typography>

        <Box maxWidth="xl" mb={3} justifyContent="center" data-aos="fade-up">
           <Grid container spacing={1} align="center">
              <Grid xs={12} item mb={2.5}>
                  {/* Textfield Name */}
                  <TextField
                    label="Name"
                    className="text-field"
                    placeholder='Enter your name...'
                    inputProps={{
                      style: {
                        fontSize: 15,
                        height: 20,
                        borderColor: "#1f2235",
                      },
                    }}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235",
                        color: "#1f2235"
                      },
                      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235"
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235"
                      },

                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1f2235",
                        fontWeight: "bold"
                      },

                      width: {
                          xl: 600,
                          lg: 600,
                          md: 380,
                          sm: 370,
                          xs: 280
                      }
                    }}
                  />
              </Grid>
              <Grid xs={12} item mb={2.5}>
                  {/* Textfield Email */}
                  <TextField
                    label="Email"
                    className="text-field"
                    placeholder='Enter your email...'
                    type="email"
                    inputProps={{
                      style: {
                        fontSize: 15,
                        height: 20,
                      },
                    }}
                    fullWidth

                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235",
                        color: "#1f2235"
                      },
                      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235"
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235"
                      },

                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1f2235",
                        fontWeight: "bold"
                      },

                      width: {
                        xl: 600,
                        lg: 600,
                        md: 380,
                        sm: 370,
                        xs: 280
                    }
                    }}
                  />
              </Grid>

              <Grid item xs={12} mb={2}>
                  {/* Textfield Message */}
                  <TextField
                    label="Message"
                    className="text-field"
                    multiline
                    rows={4}
                    placeholder="Type your message here..."
                    inputProps={{
                      style: {
                        fontSize: 15,
                        height: 100,
                      },
                    }}
                    fullWidth

                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235",
                        color: "#1f2235"
                      },
                      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235"
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1f2235"
                      },

                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1f2235",
                        fontWeight: "bold"
                      },

                      width: {
                        xl: 600,
                        lg: 600,
                        md: 380,
                        sm: 370,
                        xs: 280
                      }
                    }}
                  />
              </Grid>

              <Grid item xs={12}>
                  {/* Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className='btn'
                    style={{maxWidth: '90px', maxHeight: '40px', minWidth: '90px', minHeight: '40px'}}
                  >
                    Submit!
                  </Button>
              </Grid>

              <Grid item xs={12}>
                {/* Connect with me */}
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    mt: 2,
                    mb: 1
                  }}
                >Connect with me:</Typography>

                {/* Contact Icon */}
                <Link href="https://www.instagram.com/adelialistic/" target="_blank" underline="none" mr={1}><InstagramIcon className="icon" ></InstagramIcon></Link>
                <Link href="https://www.linkedin.com/in/adelia-adel-38a96a211" target="_blank" underline="none" mr={1}><LinkedInIcon className="icon"></LinkedInIcon></Link>
                <Link href="https://github.com/itsadeliasembiring" target="_blank" underline="none"><GitHubIcon className="icon"></GitHubIcon></Link>
              </Grid>
              
            </Grid>
        </Box>
      </Container>
    </div>
  );
}