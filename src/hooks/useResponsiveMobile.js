import { useState, useEffect } from 'react';

const useResponsiveMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    const HandleResize = () => {
        setIsMobile(window.innerWidth < 550);
    }

    useEffect(() => {
        HandleResize();
        window.addEventListener('resize', HandleResize);
        return () => {
            window.removeEventListener('resize', HandleResize);
        }
    }, []);

    return isMobile;
}

export default useResponsiveMobile;
