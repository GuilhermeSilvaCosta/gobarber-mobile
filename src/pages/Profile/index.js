import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actios';
import { signOut } from '~/store/modules/auth/actions';
import {
    Container, Title, Form, FormInput, SubmitButton, Separator,
    LogoutButton,
} from './styles';

export default function Profile() {
    const dispatch = useDispatch();

    const profile = useSelector(state => state.user.profile);

    const emailRef = useRef();
    const oldPasswordRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setPassword('');
        setOldPassword('');
        setConfirmPassword('');
    }, [profile]);

    function handleSubmit() {
        dispatch(updateProfileRequest({
            name, email, oldPassword, password, confirmPassword,
        }));
    }

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Background>
            <Container>

                <Title>Meu Perfil</Title>

                <Form>
                    <FormInput
                        icon="md-person"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome completo"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                        value={name}
                        onChangeText={setName}
                    />

                    <FormInput
                        icon="md-mail"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => oldPasswordRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Separator />

                    <FormInput
                        icon="md-lock"
                        secureTextEntry
                        placeholder="Sua senha atual"
                        ref={oldPasswordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={oldPassword}
                        onChangeText={setOldPassword}
                    />

                    <FormInput
                        icon="md-lock"
                        secureTextEntry
                        placeholder="Sua nova senha"
                        ref={passwordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => confirmPasswordRef.current.focus()}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <FormInput
                        icon="md-lock"
                        secureTextEntry
                        placeholder="Sua senha secreta"
                        ref={confirmPasswordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <SubmitButton
                        onPress={handleSubmit}
                    >
                        Atualizar Perfil
                    </SubmitButton>
                    <LogoutButton
                        onPress={handleLogout}
                    >
                        Sair
                    </LogoutButton>
                </Form>
            </Container>
        </Background>
    );
}
