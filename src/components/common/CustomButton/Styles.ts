import { styled } from "@mui/material";
import { Button} from "@mui/material";

export const CustomBtn=styled(Button)(({theme})=>({
    height:'40px',
    fontSize:'16px',
    textTransform:'capitalize',
    border: 'none',
    color: theme.palette.info.light,
}))