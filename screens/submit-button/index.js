/* 
** React Native Animation Challenge - 1
** Submit Button Animation
** URL: https://uimovement.com/ui/2380/submit-button/
*/
import React from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';
import styled from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';

// color
const color = {
  appBackground: '#E7F1F3',
  transparent: 'transparent',
  white: '#fff',
  majorelleBlue: '#574AE2',
  gray: '#aaa',
}

class SubmitButton extends React.Component {
  static navigationOptions = {
    title: 'Submit Button'
  }

  state = {
    isActive: false,
    isChecking: false,
    isDone: false,
    animatedValue: new Animated.Value(0)
  }

  _resetButtonAnimated = () => {
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: 0,
        duration: 600,
        easing: Easing.easeInOutCirc
      }
    ).start()
  }

  _buttonAnimated = () => {
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: !this.state.isActive ? 1 : 0,
        duration: 600,
        easing: Easing.easeInOutCirc
      }
    ).start(() => {
      setTimeout(() => {
        this.setState({
          isActive: false,
          isDone: true
        }, this._resetButtonAnimated)
      }, 3000)
    });
  }

  _buttonHandle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
    this._buttonAnimated();
  }

  render() {
    const {
      isActive,
      animatedValue,
      isDone
    } = this.state;

    const buttonWidthAnimated = animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [150, 44]
      }
    )

    return (
      <Container>
        
        <TouchableOpacity onPress={this._buttonHandle}>
          <ButtonAnimation
            style={{
              backgroundColor: isActive ? (
                color.transparent
              ) : isDone ? (
                color.majorelleBlue
              ) : (
                color.majorelleBlue
              ),
              width: buttonWidthAnimated,
              borderWidth: isActive ? 2 : 0,
              borderColor: isActive ? (
                color.gray
              ) : isDone ? (
                color.majorelleBlue
              ) : (
                'transparent'
              )
            }}
          >
            <ButtonTextAnimation
              style={{
                color: isActive ? color.majorelleBlue : color.white
              }}
            >
              {
                isActive ? (
                  <Ionicons name="md-refresh" size={24} color={isActive ? color.gray : color.majorelleBlue} />
                ) : isDone ? (
                  <Ionicons name="md-checkmark" size={24} color={color.white} />
                ) : (
                  'Submit'
                )
              }
            </ButtonTextAnimation>
          </ButtonAnimation>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SubmitButton;

// styled
const Container = styled.View`
  flex: 1;
  background-color: ${color.appBackground};
  justify-content: center;
  align-content: center;
`;

const Button = styled.View`
  border-radius: 50px;
  background-color: ${color.majorelleBlue};
  /* border: 2px solid ${color.majorelleBlue}; */
  align-self: center;
  justify-content: center;
  height: 44px;
  width: 150px;
`;
const ButtonAnimation = Animated.createAnimatedComponent(Button);

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${color.white};
  text-align: center;
`;
const ButtonTextAnimation = Animated.createAnimatedComponent(ButtonText);
