import {styled} from '@mui/system'
import { Button,Box } from '@mui/material'

export const Fieldset=styled('fieldset')`
   width:100%;
   padding-bottom:50px;
   border-radius:12px;
   background-color:${(props)=>props.theme.palette.custom.dark};
   border:none;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   text-align:center;
   gap:15px;
`
export const Legend=styled('legend')`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  gap:10px;
  margin-bottom:50px;
  & img{
    width:80%;
  }
`
export const Edit=styled(Button)(({theme})=>({
  position:'absolute',
  right:'-30px',
  top:'20%',
  transform: 'translateY(-50%)',
  width:'35px',
  fontSize:'16px',
  textTransform:'capitalize',
  border: 'none',
  color: theme.palette.info.light,
}))
export const Line=styled(Box)({
  width:'360px',
  height:'0.5px',
  margin:'20px 0',
  backgroundColor: '#F5F5F5',
})
export const Wrapper=styled(Box)({
  position:'relative', 
  paddingRight: '50px', 
  display:'flex', 
  flexDirection:'column', 
  gap:'30px',
})