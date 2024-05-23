import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

import { Container, Form, Background } from './SignIn.styles';

export function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login bem-sucedido', data);
            const { username, name, id } = data;
            localStorage.setItem('user', username);
            localStorage.setItem('name', name);
            localStorage.setItem('id', id);
            navigate("/feed");
        } else {
            console.error('Erro no login', data);
            alert('Usuário ou senha incorretos!');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Social Fit</h1>
                <p>Sua rede social fitness.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <Button title="Entrar" type="submit" />

                <Link to="/register">
                    Criar Conta
                </Link>
            </Form>

            <Background />
        </Container>
    );
}
