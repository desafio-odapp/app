import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, generals } from '../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: metrics.screenHeight / 7,
    backgroundColor: colors.light
  },
  backButton: {
    position: "absolute",
    left: 10,
    height: '90%',
    justifyContent: "center",
    alignItems: "center",
  },
  titleArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: colors.black
  },
  mainArea: {
    flex: 1
  },
  searchArea: {
    borderWidth: 0.01,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: metrics.baseMargin ,
    marginHorizontal: metrics.baseMargin * 1.5,
    backgroundColor: colors.light,
    borderRadius: 10,
    elevation: 4,
  },
  searchButton: {
    width:"12.5%",
    alignItems: "center"
  },
  textInput: {
    width: "75%",
    fontSize: 16,
  },
  card: {
    borderWidth: 0.01,
    marginHorizontal: metrics.baseMargin * 1.5,
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.light,
    borderRadius: 10,
    elevation: 3,
    padding: metrics.basePadding * 0.5,
    flexDirection: "row"
  },
  dateArea: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  infoArea: {
    width: "70%"
  },
  buttonArea: {
    width: "12%",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: 'bold'
  }
})

export default styles;