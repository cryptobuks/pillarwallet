// @flow
import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const Center = styled.View`
  align-items: center;
`;

export const Container = styled.SafeAreaView`
  background-color: #FFFFFF;
  flex: 1;
  align-items: ${props => (props.center ? 'center' : 'stretch')};
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  height: ${() => Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20};
`;
