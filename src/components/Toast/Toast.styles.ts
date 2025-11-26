import { StyleSheet } from 'react-native';
import { Colors } from '../../global/Colors';

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    marginHorizontal: 20,
    borderRadius: 50,
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },

  toastText: {
    color: Colors.WHITE,
  }
});

export default styles;