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
    element?: HTMLElement
}

function Portal({ children, element = document.body }: PortalProps) {
    const appElement = document.querySelector('.app');
    const appClassName = appElement?.className || '';

    return createPortal(
        <div className={appClassName}>
            {children}
        </div>,
        element
    );
}

export default Portal;