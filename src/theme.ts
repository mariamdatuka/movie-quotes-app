import { createTheme } from "@mui/material/styles";

const theme=createTheme({
    palette:{
        primary:{
           main:'#DDCCAA',
           light:'#FFFFFF',
           dark:'#E31221',
        },
        secondary:{
          main: '#CC0E10',
          light:'#EC4C57',
       },
        info: {
         light:'#CED4DA',
         main: '#6C757D',
         dark:'#222030',
      },
   },
      components: {
        // Name of the component
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
      },
   typography:{
      fontFamily: 'Montserrat, sans-serif',
      h1: {
         fontSize:'60px',
         fontWeight:700,
         color:'#DDCCAA',
      },
      h2:{
       fontSize:'49px',
       fontWeight:400,
      },
      h3:{
         fontSize:'39px',
         fontWeight:400,
         color:'#FFF'
      },
      h4: {
         fontSize: "31px",
         fontWeight: 400,
         color:'#FFF'
       },
      h5: {
         fontSize: "25px",
         fontWeight: 400,
         color:'#fff',
       },
      h6:{
         fontSize:'20px',
         fontWeight:400,
       },
      body1:{
         fontSize:'16px',
         fontWeight:400,
         color:'#6C757D'
      },
      body2:{
         fontSize:'13px',
         fontWeight:400,
         color:'#6C757D'
      }
   }
})

export default theme;