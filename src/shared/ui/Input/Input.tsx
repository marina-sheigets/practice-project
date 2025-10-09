import React, { memo, useEffect, useRef, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import * as styles from './Input.module.scss'

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autofocus,
        type = 'text',
        ...otherInputProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onBlur = () => {
        setIsFocused(false);
    }

    const onFocus = () => {
        setIsFocused(true);
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }

    const handleSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
        const target = e.target as HTMLInputElement;
        setCaretPosition((prev) => prev + target.selectionStart || 0);
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder &&
                <div className={styles.placeholder}>
                    {`${placeholder}>`}
                </div>
            }
            <div className={styles.caretWrapper}>
                <input
                    ref={inputRef}
                    autoFocus={autofocus}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={handleSelect}
                    type={type}
                    value={value}
                    className={classNames(styles.input)}
                    onChange={onChangeHandler}
                    {...otherInputProps}
                />
                {isFocused && <span className={classNames(styles.caret)} style={{ left: `${caretPosition + (value?.length ? 9 : 0)}px` }} ></span>}
            </div>
        </div>
    )
})
