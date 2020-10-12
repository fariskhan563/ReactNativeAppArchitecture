import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import globleString from '../../constants/localizedString';

const HomeScreen = (props) => {
  const strings = globleString.strings;
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text>{strings.AppName + ' Home'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
