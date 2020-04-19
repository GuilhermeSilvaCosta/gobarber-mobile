import React, { forwardRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function InputFunction({ style, icon, ...rest }, ref) {
    return (
        <Container style={style}>
            {icon && <Ionicons name={icon} size={20} color="rgba(255,255,255,0.6)" />}
            <TInput {...rest} ref={ref} />
        </Container>
    );
}

const Input = forwardRef(InputFunction);

Input.propTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
    icon: null,
    style: {},
};

export default Input;
