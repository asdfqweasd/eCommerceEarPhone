import {useState,useEffect} from 'react'

type WindowSizeType = {
    width: number | undefined;
  };

const useWindowSize = ():WindowSizeType => {
    const [windowSize, setWindowSize] = useState<WindowSizeType>({
        width:undefined,
    });
    useEffect(()=>{
        const handleResize=()=>{
            setWindowSize({
                width:window.innerWidth,
            })
        }    

        window.addEventListener('resize',handleResize);
        
        handleResize();
        return ()=>window.removeEventListener('resize',handleResize);
    },[])
    return windowSize
}
export default useWindowSize
