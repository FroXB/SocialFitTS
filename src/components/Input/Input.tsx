import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { Container } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...rest} />

        </Container>
    )
}