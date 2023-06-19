import ErrorIcon from '@mui/icons-material/Error';
import { Box, Typography } from '@mui/material';

function NotFound() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 40}}>
        <ErrorIcon sx={{ mr: 1 }} />
        <Typography variant="h3" color="primary">Not Found</Typography>
    </Box>
  )
}

export default NotFound