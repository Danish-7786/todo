import { ChangeEvent,SetStateAction,Dispatch } from "react";

export interface inputTextProps{
    todos:Array<Object>;
    title:string;
    content:string;
setTitle:Dispatch<SetStateAction<string>>;
setContent:Dispatch<SetStateAction<string>>;
setTodos:Dispatch<SetStateAction<Array<Object>>>;

}

export interface noteProps{
    title:string,
    content:string;
    key:number;
    todo:Object;
    todos:Array<Object>;
   setTodos:Dispatch<SetStateAction<Array<Object>>>;

}
