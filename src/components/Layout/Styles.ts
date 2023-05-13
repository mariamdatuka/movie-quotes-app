import {styled} from '@mui/system'
import {Box, Container} from '@mui/material';


export const MainContainer=styled(Container)({
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
})

export const Content=styled(Box)({
    width:'100%',
    height:'100%',
    maxWidth:'600px',
    borderRadius:'5px',

    '&.smallTitle':{
        fontSize:'16px',
    },

    '& h3':{
       textAlign:'center',
    }

})