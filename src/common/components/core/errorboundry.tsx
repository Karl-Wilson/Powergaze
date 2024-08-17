import React from "react";
import { ErrorBoundary as Boundary } from "react-error-boundary";

type boundary = {
    children: React.ReactNode
    fallback: React.ReactElement
}

const ErrorBoundary = (props: boundary) =>{
    //try catches event and other errors while boundary catches jsx/component errors
    try{
        return <Boundary fallback={props.fallback}>{props.children}</Boundary>
    }catch(error){
        console.log("caught")
        return <>{props.fallback}</>
    }
}

export default ErrorBoundary