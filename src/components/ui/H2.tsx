import { cn } from "@/lib/utils";
import React from "react";

export function H2(props:React.HTMLProps<HTMLHeadingElement>){
  
    return <h1 
       {...props}
       className={cn("text-2xl font-medium sm:text-3xl,prop",props.className)}

    />
}