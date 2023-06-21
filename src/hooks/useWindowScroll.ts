import { useEffect, useState } from "react";

// return windowscroll height 

type ScrollHeightType = {
    height: number | undefined;
  };

const useWindowScroll = ():ScrollHeightType =>{
    const [scrollHeight, setScrollHeight] = useState<ScrollHeightType>({height:undefined});

    useEffect(()=>{
        const handleScroll = () =>{
            setScrollHeight({
                height:window.scrollY
            })
        }
        window.addEventListener('scroll',handleScroll);
        // Initial scroll height measurement
        handleScroll();
        // remove eventlistener prevent memory leaks
        // Clean up function to remove event listener when component unmounts
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[])
    return scrollHeight
}

export default useWindowScroll