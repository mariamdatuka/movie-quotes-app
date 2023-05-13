import { styled } from "@mui/system";
import { Button} from "@mui/material";

export const MyButton=styled(Button)(({theme})=>({
    width:'100px',
    height:'40px',
    fontSize:'16px',
    borderRadius:'5px',
    textTransform:'capitalize',
    border:'none',
    color:theme.palette.primary.light,
    backgroundColor:theme.palette.primary.dark,

    "&:hover":{
        backgroundColor: theme.palette.secondary.main
    }
}))