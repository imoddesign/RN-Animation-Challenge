import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native Challenges'
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SubmitButton')}>
            <Item>
              <Ionicons name="md-radio-button-on" size={32} color="#3CC482" />
              <Title>Submit Button</Title>
            </Item>
          </TouchableOpacity>
        </Wrapper>
      </Container>
    )
  }
}

export default HomeScreen;

// styles
const Container = styled.View`
  flex: 1;
  background-color: #E7F1F3;
`;
const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.View`
  width: ${deviceWidth / 2};
  height: 132;
  background-color: #fff;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 13;
`;