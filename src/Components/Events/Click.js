import React, { useEffect } from 'react';

const Click = (event, inicialState) => {
    const [isActive, setIsActive] = React.useState(inicialState);

    useEffect(() => {
        const onClick = (event) => {
            if (event.current && !event.current.contains(event.target)) {
                setIsActive(!isActive);
            }
        };

        if (isActive) {
            document.addEventListener('click', onClick);
        }

        return () => {
            document.removeEventListener('click', onClick);
        };
    }, [isActive, event]);

    return [isActive, setIsActive];
};

export default Click;