import React, {useEffect, useRef, useState} from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg})=>{

   const imageRef = useRef(null);

   const isInView = ()=>{
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >=0 && rect.bottom<=window.innerHeight;
   }

   const [inView, SetInView] =useState(false);
   const [isLoading, SetIsLoading]=useState(false);

   useEffect(()=>{
    SetIsLoading(false);
    SetInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return ()=>{
        window.removeEventListener("scroll", scrollHandler);
    };
   },[]);

   const scrollHandler = ()=>{
    SetInView(isInView());
   }

    return (
        <img src={isLoading
            ? null
            : inView? secondaryImg :primaryImg} 
        alt="" ref={imageRef} />
    )
}

export default ImageToggleOnScroll;