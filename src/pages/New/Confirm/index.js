import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Background from '~/components/Background';
import api from '~/services/api';

import {
    Container, Avatar, Name, Time, SubmitButton,
} from './styles';

export default function Confirm({ navigation, route }) {
    const { provider, time } = route.params;

    const dateFormatted = useMemo(
        () => formatRelative(parseISO(time), new Date(), { locale: pt }),
        [time],
    );

    async function handleAppointment() {
        await api.post('appointments', {
            provider_id: provider.id,
            date: time,
        });

        navigation.reset({
            routes: [{ name: 'Dashboard' }],
        });
    }

    return (
        <Background>
            <Container>
                <Avatar
                    source={{
                        uri: provider.avatar
                            ? provider.avatar.url
                            : `https://api.adorable.io/avatars/50/${provider.name}.png`,
                    }}
                />

                <Name>{provider.name}</Name>
                <Time>{dateFormatted}</Time>

                <SubmitButton onPress={handleAppointment}>
                    Confirmar Agendamento
                </SubmitButton>
            </Container>
        </Background>
    );
}
