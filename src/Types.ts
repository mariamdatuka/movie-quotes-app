import { ChangeEvent} from "react";


export interface ButtonProps {
    text:string;
    type?:"button" | "reset" | "submit",
    sx?:any;
    onClick?:()=>void;
    className?:string;
    children?:any;
}

export interface ModalProps{
    open:boolean;
    onClose:()=>void;
    children:React.ReactNode;
}

export interface TextfieldProps{
    id?:string;
    error?:boolean;
    helperText?:React.ReactNode;
    value?:string;
    onChange?:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    type:string;
    placeholder:string;
    sx?:any;
    multiline?:boolean;
    rows?:number;
    disabled?:boolean;
    label:string;
}