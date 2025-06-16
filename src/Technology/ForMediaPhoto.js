import { useState, useEffect } from 'react';

const ForMediaPhoto = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    const HandleResize = () => {
        setIsMobile(window.innerWidth < 992);
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

export default ForMediaPhoto;
