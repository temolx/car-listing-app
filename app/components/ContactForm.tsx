import { Box, TextField, Button } from "@mui/material"

function ContactForm() {
  return (
    <Box sx={{ p: '20px' }} >
        <form>
            <TextField 
            type="text" 
            id="standard-basic" 
            label="First Name" 
            variant="standard"
            sx={{ display: 'flex' }}
            margin="dense"
            />

            <TextField 
            type="text" 
            id="standard-basic" 
            label="Last Name" 
            variant="standard"
            sx={{ display: 'flex' }}
            margin="dense"  />

            <TextField 
            type="email" 
            id="standard-basic" 
            label="Email" 
            variant="standard"
            sx={{ display: 'flex' }}
            margin="dense"  />

            <TextField 
            type="text" 
            id="standard-basic" 
            label="Message" 
            variant="standard"
            sx={{ display: 'flex' }}
            multiline
            rows={3}
            margin="dense"  />

            <Button type="submit" variant="contained" size="medium" fullWidth sx={{ mt: '10px' }}>Submit</Button>
        </form>
    </Box>
  )
}

export default ContactForm