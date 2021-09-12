import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  header: {
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 13,
  },
  icon: {
    color: 'white',
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    width: 60,
    height: 22,
    resizeMode: 'contain',
    marginRight: 8,
  },
  batteryText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  controls: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlsButton: {
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 50,
    padding: 15,
    marginLeft: 12,
    marginRight: 12,
  },
});

export default styles;
