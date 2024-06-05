import { Button, Fab, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
export const ButtonDemo = () => {
  return (
    <div>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='text' color='error'>Error</Button>
        <Button variant='outlined' color='success'>Success</Button>
        <Button variant='contained' sx={{color:"white",height:60}}>OK</Button>
        <Button variant='contained' startIcon={<DeleteIcon/>}>Delete</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
        <IconButton color='primary' onClick={()=>{alert("ok")}}>
            <FingerprintIcon/>
        </IconButton>
        <Fab color='primary' aria-label='add'>
            <SendIcon/>
        </Fab>
    </div>
  )
}
