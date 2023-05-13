import { MainContainer, Content } from './Styles'
import { Typography } from '@mui/material'

interface Props{
    children:any,
    title:string
}

const FormsLayout = ({children, title}:Props) => {
  return (
    <>
     <MainContainer>
         <Content>
              {title && (
                <Typography variant='h3'>
                    {title}
                </Typography>
              )}
           {children}    
         </Content>
     </MainContainer>
      
    </>
  )
}

export default FormsLayout