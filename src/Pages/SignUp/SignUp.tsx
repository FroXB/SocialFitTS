import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FiMail, FiLock, FiUser, FiPhone, FiFile, FiHome } from 'react-icons/fi';
import { FaRegFlag, FaBirthdayCake, FaTransgender } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

import { Container, Form, Background, GridContainer, FullWidth, HalfWidth } from './SignUp.styles';

export function SignUp() {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [nationality, setNationality] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const navigate = useNavigate();

    const formatDate = (date: string) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                password: password,
                telephone: phone,
                cpf: cpf,
                birthDate: formatDate(birthDate),
                fullAddress: address,
                nationality: nationality,
                gender: gender,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Cadastro bem-sucedido', data);
            navigate("/");
        } else {
            console.error('Erro no cadastro', data);
            alert('Erro ao criar conta! Verifique os dados e tente novamente.');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Social Fit</h1>
                
                <h2>Crie sua conta</h2>

                <GridContainer>
                    <HalfWidth>
                        <Input
                            placeholder="Nome"
                            type="text"
                            icon={FiUser}
                            value={name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Nome de usuário"
                            type="text"
                            icon={FiUser}
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                    </HalfWidth>

                    <FullWidth>
                        <Input
                            placeholder="E-mail"
                            type="text"
                            icon={FiMail}
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </FullWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Senha"
                            type="password"
                            icon={FiLock}
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Telefone"
                            type="tel"
                            icon={FiPhone}
                            value={phone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="CPF"
                            type="text"
                            icon={FiFile}
                            value={cpf}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Data de nascimento"
                            type="date"
                            icon={FaBirthdayCake}
                            value={birthDate}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setBirthDate(e.target.value)}
                        />
                    </HalfWidth>

                    <FullWidth>
                        <Input
                            placeholder="Endereço"
                            type="text"
                            icon={FiHome}
                            value={address}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        />
                    </FullWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Nacionalidade"
                            type="text"
                            icon={FaRegFlag}
                            value={nationality}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNationality(e.target.value)}
                        />
                    </HalfWidth>

                    <HalfWidth>
                        <Input
                            placeholder="Gênero"
                            type="text"
                            icon={FaTransgender}
                            value={gender}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setGender(e.target.value)}
                        />
                    </HalfWidth>

                </GridContainer>

                <Button title="Cadastrar" type="submit" />

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>

            <Background />
        </Container>
    );
}
