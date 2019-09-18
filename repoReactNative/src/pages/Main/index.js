import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Containerm, Form, Input, SubmiButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeHolder="user/repo"
        />
        <SubmiButton>
          <Icon  name="add" size={20} />
        </SubmiButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: "Usuários",
}
