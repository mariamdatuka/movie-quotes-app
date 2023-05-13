export interface ButtonProps {
    text:string;
    type?:"button" | "reset" | "submit",
    sx?:any;
    onClick?:()=>void;
    className?:string;
}

export interface ModalProps{
    open:boolean;
    onClose:()=>void;
    children:React.ReactNode;
}

export interface InputProps{
    id:string;
    error:boolean | undefined;
    helperText:string;
    value:any;
    onChange:()=>void;
    type:string;
    placeholder:string;
    sx:any;
    multiline:boolean;
    rows:number | string;
    disabled:boolean;
    label:any;

}