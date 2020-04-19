import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
        [date],
    );

    async function handleOpenPicker() {
        const {
            action, year, month, day,
        } = await DatePickerAndroid.open({
            mode: 'spinner',
            date,
        });

        if (action === DatePickerAndroid.dateSetAction) {
            const selectedDate = new Date(year, month, day);

            onChange(selectedDate);
        }
    }

    return (
        <Container>
            <DateButton
                onPress={handleOpenPicker}
            >
                <Ionicons name="md-calendar" color="#FFF" size={20} />
                <DateText>{dateFormatted}</DateText>
            </DateButton>
        </Container>
    );
}
