import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  menuTextBox: {
    flexGrow: 1,
  },
  menuText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
    textTransform: 'uppercase',
  },
  subTitle: {
    fontSize: 13,
    color: 'grey',
    marginLeft: 15,
  },
  arrowIcon: {
    color: '#4D4D4E',
  },
});

export default styles;
