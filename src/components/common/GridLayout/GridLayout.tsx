import React from 'react';
import {Grid} from '@mui/material'

interface LayoutProps {
    children:React.ReactNode
  }

const GridLayout = ({children}:LayoutProps) => {
  return (
    <>
    <Grid container spacing={2} sx={{p:4, bgcolor:'#222030'}}>
        <Grid item xs={4}>
        {React.Children.toArray(children)[0]}
        </Grid>
      <Grid item xs={8}>
       {React.Children.toArray(children)[1]}

      </Grid>
   </Grid>
    </>
  )
}

export default GridLayout