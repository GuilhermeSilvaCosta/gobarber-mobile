import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    color: #FFF;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
    font-size: 20px;
`;

export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 30 },
})``;
