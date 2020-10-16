import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, generals } from '../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  header: {
    backgroundColor: colors.primary,
    height: metrics.screenHeight / 2,
    justifyContent: "center",
  },
  titleArea: {
    width: metrics.screenWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 40,
  },
  img: {
    height: metrics.screenWidth * 0.3,
    width: metrics.screenWidth * 0.3,
    borderRadius: 20,
    borderWidth: 0.01,
    elevation: 10,
    marginHorizontal: 15,
    backgroundColor: colors.light,
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 0.01,
  },
  info: {
    maxWidth: '60%',
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.light,
  },
  subtitle: {
    color: colors.secondary,
    marginVertical: 6
  },
  legend: {
    color: colors.regular
  },
  exitArea: {
    borderWidth: 1.5,
    borderColor: colors.light,
    borderRadius: 10,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 5,
    left: 20,
    transform: [{ 
      rotate: '180deg'
    }]
  },
  mainArea: {
    flex: 1,
    backgroundColor: colors.light,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: metrics.basePadding
  },
  mainCardArea: {
    alignItems: "center",
    height: height / 1.5,
    width: "100%",
    flexDirection: "row",
  },
  mainCard: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 30,
    height: height * 0.5,
    borderWidth: 0.01,
    borderRadius: 15,
    marginLeft: 15,
    backgroundColor: colors.light,
    elevation: 5
  },
  cardText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: 'wrap',
    width: "100%",
    marginTop: "5%"
  },
  modalOut: {
    height: "20%", 
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  modalArea: {
    flex: 1,
    borderWidth: 0.01,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.light,
    marginHorizontal: metrics.baseMargin * 2.5,
    padding: metrics.basePadding
  },
  itemTitle: {
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center", 
    color: colors.black,
    marginBottom: 20,
  },
  itemTextInfo: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 6,
    textAlign: "center", 
  },
  buttonArea: {
    marginTop: 15,
    flexDirection: "row", 
    justifyContent: "space-around", 
    height: "10%"
  },
  buttonAccording: {
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  }
});

export default styles;

