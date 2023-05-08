import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const NavBox = styled(Stack)(({ theme })=>({
    width:'100px',
    height:'100px',
    backgroundColor:`${theme.palette.primary.main}`,
}))