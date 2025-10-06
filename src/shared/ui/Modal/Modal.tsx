import { classNames } from '@/shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import * as styles from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpened?: boolean,
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpened, onClose } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpened,
        [styles.isClosing]: isClosing
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose])

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        }
    }, [isOpened, onKeyDown]);

    return (
        <Portal>
            <div data-testid="modal" className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div
                        className={classNames(styles.content)}
                        onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
