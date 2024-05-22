import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button({ title, type = 'button', ...props }: ButtonProps) {
    return (
        <Container type={type} {...props}>
            {title}
        </Container>
    );
}
