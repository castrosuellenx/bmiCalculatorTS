import {MotiText, MotiView} from 'moti';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

export type Props = {
  startAnimated: boolean;
  titleGender: string;
  focused: boolean;
};

const AnimatedBox: React.FC<Props> = ({
  startAnimated,
  titleGender,
  focused,
  children,
}) => {
  const theme = useTheme();

  return (
    <>
      <MotiView
        animate={{
          height: startAnimated ? '95%' : '100%',
          width: startAnimated ? '95%' : '100%',
        }}
        transition={{
          repeat: 2,
          type: 'timing',
          duration: 300,
        }}
        style={{
          backgroundColor: theme.colors.buttons,
          borderRadius: RFValue(8),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}

        <MotiText
          style={{
            fontSize: RFValue(21),
            fontFamily: theme.fontFamily.bold,
            color: focused ? theme.colors.text : theme.colors.unfocused,
          }}>
          {titleGender}
        </MotiText>
      </MotiView>
    </>
  );
};

export default AnimatedBox;
