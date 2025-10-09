import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal/Modal'
import * as styles from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            lazy
            isOpened={isOpen}
            onClose={onClose}
            className={classNames(styles.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    )
}
