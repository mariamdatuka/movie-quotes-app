import {styled} from '@mui/system'
import { Button,Box,Stack } from '@mui/material'

export const Fieldset=styled('fieldset')`
   width:100%;
   padding:0 10px 50px 30px;
   border-radius:12px;
   background-color:${(props)=>props.theme.palette.custom.dark};
   border:none;
   display:flex;
   flex-direction:column;
   align-items:flex-start;
   justify-content:flex-start;
   text-align:left;
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
  display:'flex',  
  alignItems:'center',
  justifyContent:'center',
  gap:'30px',
})
export const VerticalLine=styled(Box)({
   height:'20px',
   width:'1px',
   backgroundColor: '#F5F5F5',
  })
export const Info=styled(Stack)({
    gap:'10px',
    padding:'20px',
    border:'1px solid gray',
    borderRadius:'5px',
    margin:'20px 0'
})