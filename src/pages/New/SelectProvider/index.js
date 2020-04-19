import React, { useEffect, useState } from 'react';
import Background from '~/components/Background';
import api from '~/services/api';

import {
    Container, ProviderList, Provider, Avatar, Name,
} from './styles';

export default function SelectProvider({ navigation }) {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        async function loadProviders() {
            const response = await api.get('providers');

            setProviders(response.data);
        }
        loadProviders();
    }, []);

    return (
        <Background>
            <Container>
                <ProviderList
                    data={providers}
                    keyExtractor={provider => String(provider.id)}
                    renderItem={({ item: provider }) => (
                        <Provider
                            onPress={() => {
                                navigation.navigate('SelectDateTime', { provider });
                            }}
                        >
                            <Avatar source={{
                                uri: provider.avatar
                                    ? provider.avatar.url
                                    : `https://api.adorable.io/avatars/50/${provider.name}.png`,
                            }}
                            />
                            <Name>{provider.name}</Name>
                        </Provider>
                    )}
                />
            </Container>
        </Background>
    );
}
