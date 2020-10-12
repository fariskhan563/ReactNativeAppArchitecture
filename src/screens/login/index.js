import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import globleString from '../../constants/localizedString';

const LoginScreen = (props) => {
  const strings = globleString.strings;
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'silver',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AppNavigator')}>
          <Text>{strings.AppName + ' Login'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
