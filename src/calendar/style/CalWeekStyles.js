import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles= (available) => StyleSheet.create({
  container: {
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
    padding: '1%',
    margin: 10,
    justifyContent:'center',
  },
  row:{
    flexDirection: 'row', 
  },
  center:{
   alignSelf: 'center',
  },
});
export default styles;;