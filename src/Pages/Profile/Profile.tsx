import { FiMail, FiLock, FiPhone, FiHome, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Container, Form, Avatar } from "./Profile.styles";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/feed">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                    </label>
                </Avatar>
                <Input
                    placeholder="E-mail"
                    type="e-mail"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Telefone"
                    type="tel"
                    icon={FiPhone}
                />

                <Input
                    placeholder="Endereco"
                    type="text"
                    icon={FiHome}
                />

                <Button title="Salvar" />

            </Form>
        </Container>
    );
}