import { ModalProps } from '../../../Types'
import {StyledModal,Container} from './Styles';


const ModalWindow:React.FC<ModalProps> = ({open,onClose,children}) => {
  return (
    <>
    {open && (
      <StyledModal open={open} onClose={onClose}>
        <Container>
           {children}
        </Container>
     </StyledModal>
    )}
     
    </>
  )
}

export default ModalWindow
