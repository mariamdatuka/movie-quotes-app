import { styled } from "@mui/material";
import { Button} from "@mui/material";

export const SecBtn=styled(Button)(({theme})=>({
    height:'40px',
    fontSize:'16px',
    borderRadius:'5px',
    textTransform:'capitalize',
    border: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.light,
}))