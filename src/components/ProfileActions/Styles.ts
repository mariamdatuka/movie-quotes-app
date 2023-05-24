import {styled} from '@mui/system'
import { Stack } from '@mui/material'

export const FlexItem=styled(Stack)({
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:'15px',

    '& img':{
        width:'30px',
    }
})
export const MainBox=styled(Stack)({
    alignItems:'flex-start',
    gap:'25px',
})