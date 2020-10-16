import React, { Component } from 'react';
import { Alert, View, Text, SafeAreaView, TouchableOpacity, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import RBSheet from "react-native-raw-bottom-sheet";
import logo from '../../assets/logo.png';

import firebase from 'react-native-firebase';

import { colors } from '../../styles';
import styles from './styles';

export default class Home extends Component {
  state = {
    payload: {},
  }

  componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmToken);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }

  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        this.getToken();
    } catch (error) {
        console.log('Notifications - Permissão negada');
    }
  }

  async createNotificationListeners() {
    const { navigation } = this.props; 
    firebase.notifications().onNotificationOpened(({ notification: { _data: data }}) => {
      const { exame, consulta, horario, agendaNome, convenio } = data;
      this.setState({ payload: { exame, consulta, horario, agendaNome, convenio }})
      this.RBSheet.open();
    });

    firebase.notifications().onNotification(({ _data: data }) => {
      const { exame, consulta, horario, agendaNome, convenio } = data;
      this.setState({ payload: { exame, consulta, horario, agendaNome, convenio }})
      this.RBSheet.open();
    });
  }

  handleExitApp = async() => {
    Alert.alert(
      "Odapp",
      "Deseja realmente sair?",
      [
        {
          text: "CANCELAR",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "SAIR", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }


  handleNavigate = (route, params = {}) => {
    const { navigation } = this.props;
    navigation.navigate(route, params);
  }
  
  render() { 
    const { payload } = this.state;

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.exitArea} onPress={this.handleExitApp}>
            <Icon name="log-out" size={20} color={colors.light} />
          </TouchableOpacity>
          <View style={styles.titleArea}>
            <View style={styles.info}>
              <Text style={styles.title}>Odapp</Text>
              <Text style={styles.subtitle}>OBSERVATÓRIO DO AUTISTA</Text>
              <Text style={styles.legend}>Aplicativo para suporte a Intervenção Intensiva</Text>
            </View>
            <View style={styles.img}>
              <Image source={logo} style={styles.logo}/>
            </View>
          </View>
        </View>
        <View style={styles.mainArea}>
          <View
            style={styles.mainCardArea}
          >
            <TouchableOpacity
              style={styles.mainCard}
              activeOpacity={0.9}
              onPress={() => this.handleNavigate('Pacientes')}
            >
              <Icon name="users" size={50} color={colors.primary}/>
              <Text style={styles.cardText}>
                Pacientes
              </Text>

            </TouchableOpacity>
            
              <RBSheet
                ref={ref => {
                  this.RBSheet = ref;
                }}
                height={300}
                duration={2000}
                customStyles={{
                  container: {
                    justifyContent: "center",
                    alignItems: "center"
                  }
                }}
              >
                <View style={{ flex: 1, width: '100%' }}>
                  <View style={styles.modalArea} >
                    <Text style={styles.itemTitle}>CONFIRMAR {payload.exame ? 'EXAME' : 'CONSULTA'}</Text>
                    <Text style={[styles.itemTextInfo,{fontWeight: "bold"}]}>{payload.agendaNome}</Text>
                    <Text style={styles.itemTextInfo}>Data do agendamento</Text>
                    <Text style={[styles.itemTextInfo,{fontWeight: "bold"}]}>{payload.horario}</Text>
                    <Text style={styles.itemTextInfo}>Convênio selecionado</Text>
                    <Text style={[styles.itemTextInfo,{fontWeight: "bold"}]}>{payload.convenio}</Text>
                    <View style={styles.buttonArea}>
                      <TouchableOpacity
                        style={[styles.buttonAccording, { backgroundColor: colors.secondary }]}
                        // onPress={() => handleCloseModal()}
                      >
                        <Text style={{color: colors.light, fontWeight: "bold"}}>Cancelar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        // disabled={according}
                        style={[styles.buttonAccording, { backgroundColor: colors.primary }]}
                        // onPress={() => handleHorarioConsulta()}
                      >
                        <Text style={{color: colors.light, fontWeight: "bold"}}>Confirmar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </RBSheet>
          </View>
        </View>
      </SafeAreaView>
    )
  }
};
