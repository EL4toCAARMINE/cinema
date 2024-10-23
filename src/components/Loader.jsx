import * as React from 'react';

export default function Loader({ visible, text }){
    // Si visible es true, se bloquea el scroll
    React.useEffect(() => {
        const body = document.body;
    
        if (visible) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }
    }, [visible]);

    return visible ? (
        <div className='loaderOverlay'>
            <div className="ui-loader loader-blk">
                <svg viewBox="22 22 44 44" className="multiColor-loader">
                    <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" className="loader-circle loader-circle-animation"></circle>
                </svg>
            </div>
            <div className="loader-txt">{text ? text : "Cargando..."}</div>
        </div>
    ) : null;
};