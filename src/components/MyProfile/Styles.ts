import {styled} from '@mui/system'


export const Fieldset=styled('fieldset')`
   width:80%;
   border-radius:12px;
   background-color:${(props)=>props.theme.palette.custom.dark};
   border:none;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   text-align:center;
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