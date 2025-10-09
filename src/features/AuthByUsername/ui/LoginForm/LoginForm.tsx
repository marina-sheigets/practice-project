import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next'
import * as styles from './LoginForm.module.scss'
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/selectLoginState/getLoginState';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState)
    const { t } = useTranslation();

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                value={username}
                onChange={handleChangeUsername}
                placeholder={t("Enter username")}
                autoFocus
                className={styles.input}
            />
            <Input
                value={password}
                onChange={handleChangePassword}
                placeholder={t("Enter password")}
                className={styles.input}
            />
            <Button className={styles.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    )
})

