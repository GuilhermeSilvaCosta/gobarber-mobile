import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
`;

export const Title = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin-top: 30px;
    font-size: 20px;
    text-align: center;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalsIndicator: false,
    contentContainerStyle: { padding: 30 },
})`
    align-self: stretch;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
    margin-top: 10px;
    background: #f64c75;
`;

export const Separator = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 20px 0 30px;
`;
