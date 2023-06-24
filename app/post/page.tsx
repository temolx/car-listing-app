'use client'

import { Box, TextField, Button, ThemeProvider, MenuItem } from "@mui/material"
import { theme } from "../mui/customTheme"
import { ContactFormContainer } from "../components/landing/landing.style"
import { useState } from "react"

const page = () => {

  const[data, setData] = useState({
    brand: '',
    model: '',
    price: 0,
    color: '',
    type: '',
    engine: '',
    side: '',
    mileage: 0
  })

  const vehicleTypes = ['Fuel', 'Electric', 'Hybrid'];
  const wheelSides = ['Left', 'Right'];

  const styles = {
    textField: {
      ".MuiList-root": {
        backgroundColor: '#151515',
        color: '#fff'
      },
    },
  };

  const handleSubmit = () => {
    if (data) {
      // POST to API
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Box p={12} className='postContainer'>

      <ContactFormContainer>
        <Box p={2}>
        <form>
          <TextField 
              type="text" 
              id="standard-basic" 
              label="Brand" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                brand: e.target.value
              })}
              required
          />

          <TextField 
              type="text" 
              id="standard-basic" 
              label="Model" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                model: e.target.value
              })}
              required
          />

          <TextField 
              type="number" 
              id="standard-basic" 
              label="Price" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                price: Number(e.target.value)
              })}
              required
          />

          <TextField 
              type="text" 
              id="standard-basic" 
              label="Color" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                color: e.target.value
              })}
              required
          />

          <TextField 
              select
              id="standard-basic" 
              label="Type" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              SelectProps={{
                MenuProps: {
                  sx: styles.textField,
                },
              }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                type: e.target.value
              })}
              required
              >
              { vehicleTypes.map((vehicleType: string) => (
                <MenuItem key={vehicleType} value={vehicleType}>{ vehicleType }</MenuItem>
              )) }
          </TextField>

          <TextField 
              type="text" 
              id="standard-basic" 
              label="Engine" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                engine: e.target.value
              })}
              required
          />

          <TextField 
              select
              id="standard-basic" 
              label="Side" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              SelectProps={{
                MenuProps: {
                  sx: styles.textField,
                },
              }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                side: e.target.value
              })}
              required
              >
              { wheelSides.map((wheelSide: string) => (
                <MenuItem key={wheelSide} value={wheelSide}>{ wheelSide }</MenuItem>
              )) }
          </TextField>

          <TextField 
              type="number" 
              id="standard-basic" 
              label="Mileage" 
              variant="standard"
              sx={{ display: 'flex', width: '380px' }}
              margin="dense"
              onChange={(e) => setData({
                ...data,
                mileage: Number(e.target.value)
              })}
              required
          />

          <Button type="submit" variant="contained" size="medium" color="primary" fullWidth sx={{ mt: '10px' }} onClick={handleSubmit}>Submit</Button>
        </form>
        </Box>
      </ContactFormContainer>
    </Box>
    </ThemeProvider>
  )
}

export default page