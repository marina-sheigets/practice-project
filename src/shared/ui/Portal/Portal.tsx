import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    /**
     * Element which is inserted 
    */
    children: ReactNode,
    /**
     * Element where we insert the other component
     */
    element?: HTMLElement;
}

function Portal({ children, element = document.body }: PortalProps) {
    const appElement = document.querySelector('.app');
    const appClassName = appElement?.className || '';

    const style = {
        minHeight: 0
    };

    return createPortal(
        <div className={appClassName} style={style}>
            {children}
        </div>,
        element
    );
}

export default Portal;