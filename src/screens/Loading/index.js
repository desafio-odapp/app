import React, { Component } from 'react';
import {
  View, ActivityIndicator, Text, StatusBar, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../styles';
import styles from './styles';

class Loading extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  componentDidMount() {
    this.loadApp()
  }

  loadApp = async () => {
    const { navigation } = this.props;

    try {
      navigation.navigate('App');
    } catch {
      console.log(err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.lighter} />
        <ActivityIndicator size="large" color={colors.tertiary} />
        <Text style={styles.textLoading}>Carregando...</Text>
      </View>
    );
  }
};

export default Loading;
