import React, { InputHTMLAttributes, useState } from 'react';
import { IconType } from 'react-icons';
import { Container } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)

    console.log(isFocused)

    return (
        <Container 
        className={isFocused ? 'focus' : ''} 
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
        >
            {Icon && <Icon size={20}/>}
            <input {...rest} />

        </Container>
    )
}