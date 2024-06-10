import { Box, Grid, createTheme } from '@mui/material'
import React from 'react'
import { ThemeProvider } from 'styled-components'

export const DashbboardDemo = () => {
    const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{height:"100%",width:"100%",backgroundColor:"red"}}>
            <Grid container spacing={1}>
                <Grid xl={8} sm={8} lg={8} xs={8} md={8} sx={{background:"blue",height:"500px"}}>
                    hi
                    <Grid xl={2} sm={2} lg={2} xs={2} md={2} sx={{background:"black",height:"100px"}}></Grid>
                </Grid>
                <Grid xl={4} sm={4} lg={4} xs={4} md={4} sx={{background:"pink",height:"500px"}}>
                    hi
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}
