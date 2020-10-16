import { StyleSheet } from 'react-native';
import { colors } from '../../styles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lighter,
    justifyContent: 'center',
  },
  textLoading: {
    color: colors.tertiary,
    fontSize: 17,
    textAlign: 'center',
  },
});

export default styles;