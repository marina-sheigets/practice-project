import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next'
import * as styles from './LoginForm.module.scss'
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

interface LoginFormProps {
    className?: string
}

function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input placeholder={t("Enter username")} className={styles.input} autoFocus />
            <Input placeholder={t("Enter password")} className={styles.input} />
            <Button className={styles.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    )
}

export default LoginForm