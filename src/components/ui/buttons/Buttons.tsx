import {buttonProps} from "@/types/definitions";


export const Button = ({onClick, className, children} : buttonProps)=> {

    return(
    <>
        <button onClick={onClick} className={className}>{children}</button>
    </>
    )
}