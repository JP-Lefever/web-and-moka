import React from "react";

export type buttonProps = {
    onClick : ()=>void;
    className : string;
    children : React.ReactNode

}

export type ServicesProps = {
    id: number;
    name: string;
    image: string;
    description: string;
}