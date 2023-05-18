'use client'

import './landingStyle.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { LandingHeading, ContactFormContainer } from "./landing.style"
import { Button, Typography, CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../../mui/customTheme'
import ContactForm from '../ContactForm'
import Link from 'next/link'

function Landing() {
  return (
    <ThemeProvider theme={theme}>
    <div>
        <CssBaseline />

        <Parallax pages={3}>
          <ParallaxLayer offset={0} speed={0}>
            <div className='LandingBG' />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1.5}>
            <LandingHeading> 
              <Typography variant="h2" color="secondary">Drive like you've never driven before.</Typography>
              <Button variant="contained" size="large" color="primary" sx={{ mt: '15px', fontSize: '20px', borderRadius: '0px' }}><Link href='/shop'>Shop</Link></Button>
            </LandingHeading>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0}>
            <div className='SecondBG' />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1.5}>
            <LandingHeading>
              <Typography variant="h2" color="secondary">Customize your own vehicle</Typography>
              <Button variant="contained" size="large" sx={{ mt: '15px', fontSize: '20px', borderRadius: '0px' }}>Create</Button>
            </LandingHeading>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0}>
              <div className='thridBG' />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.5}>
            <ContactFormContainer>
              <Typography variant="h2" color="primary" sx={{ mb: '15px', fontWeight: '500' }}>Contact us.</Typography>
              <ContactForm />
            </ContactFormContainer>
          </ParallaxLayer>
        </Parallax>
    </div>
    </ThemeProvider>
  )
}

export default Landing