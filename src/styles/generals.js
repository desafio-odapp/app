import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from './metrics';

export default {
  textEmptyList: {
    color: colors.regular,
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: metrics.basePadding,
  },
  defaultHitSlop: {
    top: 20,
    bottom: 20,
    right: 20,
    left: 20,
  },
  toast: {
    borderRadius: 0,
    paddingHorizontal: metrics.basePadding,
    width: '100%',
    zIndex: 5000,
  },
  wrapperPicker: {
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    overflow: 'hidden',
    width: '100%',
  },
  divider: {
    backgroundColor: colors.white,
    height: StyleSheet.hairlineWidth,
    width: '100%',
  },
  footerListMargin: {
    height: metrics.baseMargin,
  },
};
