import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Creators as PacienteActions } from '../../store/ducks/paciente';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-easy-toast';
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { colors, metrics, generals } from '../../styles';
import styles from './styles';

class Pacientes extends Component {

  componentDidMount = () => {
    const { fetchPacientes } = this.props;
    fetchPacientes();
  };

  renderItem = ({ item }) => {
    return(
      <View style={styles.card} >
        <View style={styles.dateArea}>
          <Text style={[styles.bold, { fontSize: 24 }]}>{item.idade}</Text>
          <Text stlye={{ fontSize: 26 }}>ANOS</Text>
        </View>
        <View style={styles.infoArea}>
            <Text style={[styles.bold, { fontSize: 20 }]}>{item.nome}</Text>
            <Text style={{ fontSize: 18 }}>{`${item.cidade}, ${item.estado}`}</Text>
            <Text style={{ fontSize: 16 }}>{`Cadastrado há ${formatDistance(new Date(item.dataCadastro), new Date(), { locale: ptBR })}`}</Text>
        </View>
    </View>
  )}

  handleNavigate = (route, params = {}) => {
    const { navigation } = this.props;
    navigation.navigate(route, params);
  }

  render() {
    const { paciente: { pacientes, loading }, fetchPacientes } = this.props;

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.light} />
        <Toast
          position="center"
          opacity={0.8}
          fadeInDuration={800}
          fadeOutDuration={1500}
          ref={(toast) => {
            this.toast = toast;
          }}
        />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.handleNavigate('Home')}
          >
            <Icon name="chevron-left" size={25} color={colors.black}/>
          </TouchableOpacity>
          <View style={styles.titleArea}>
            <Icon name="users" size={23} color={colors.black}/>
            <Text style={styles.title}>Pacientes</Text>
          </View>
        </View>
        <View style={styles.mainArea}>
          <FlatList
            data={pacientes}
            extraData={pacientes}
            keyExtractor={({ id }) => id}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View style={{ paddingVertical: metrics.baseMargin }}/>}
            refreshing={loading}
            onRefresh={fetchPacientes}
            RefreshControl={(
              <RefreshControl
                colors={[colors.primaryDarken, colors.primary, colors.primaryLighten]}
              />
              )}
          />
        </View>
      </SafeAreaView>
    )
  }
};

const mapStateToProps = ({ paciente }) => ({
  paciente,
});

const mapDispatchToProps = dispatch => ({
  fetchPacientes: () => dispatch(PacienteActions.fetch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pacientes);