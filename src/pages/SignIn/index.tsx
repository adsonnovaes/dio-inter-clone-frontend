import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Wrapper,
	Background,
	InputContainer,
	ButtonContainer
} from './styles';

import Card from '../../components/Card';

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import useAuth from '../../hooks/useAuth';

const SignIn = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const { userSignIn } = useAuth();

	const handleToSignIn = async () => {

		const data = {
			email,
			password
		}

		const response = await userSignIn(data);

		if (response.id) {
			navigate('/dashboard');
		}

		alert('Usuário ou senha invalida');
	}

	return (
		<Wrapper>
			<Background image={background} />
			<Card
				width="403px"
			>
				<img src={logoInter} width={172} alt="logo inter" />
				<InputContainer>
					<Input
						placeholder='Email'
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<Input
						placeholder='Senha'
						type='password'
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>
				</InputContainer>

				<ButtonContainer>
					<Button
						type='button'
						onClick={handleToSignIn}
					>
						Entrar
					</Button>
					<p>Ainda não é cadastrado? <Link to='/signup'>Cadastre-se já</Link></p>
				</ButtonContainer>

			</Card>
			{/* SignIn */}
		</Wrapper>
	)
}

export default SignIn;
