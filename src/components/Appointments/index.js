import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
    Container, Left, Avatar, Info, Name, Time,
} from './styles';

export default function Appointments({ data, onCancel }) {
    const dateParsed = useMemo(
        () => formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSuffix: true,
        }),
        [data.date],
    );

    return (
        <Container past={data.past}>
            <Left>
                <Avatar
                    source={{
                        uri: data.provider.avatar
                            ? data.provider.avatar.url
                            : `https://api.adorable.io/avatars/50/${data.provider.name}.png`,
                    }}
                />

                <Info>
                    <Name>{data.provider.name}</Name>
                    <Time>{dateParsed}</Time>
                </Info>
            </Left>

            {data.cancelable && !data.canceled_at && (
                <TouchableOpacity onPress={onCancel}>
                    <Ionicons name="md-calendar" size={20} color="#f64c75" />
                </TouchableOpacity>
            )}

        </Container>
    );
}
