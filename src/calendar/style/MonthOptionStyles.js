
import {StyleSheet,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles= StyleSheet.create({
  container: {
    paddingHorizontal: '1%',
    width: windowWidth, 
    height:'100%',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '10%',
  },
  item:{
    width: '30%',
  },
  month:{
    borderWidth:1,
    padding: '10%',
    width: windowWidth * 0.30,
    marginHorizontal: '3%',
    marginVertical: '10%',
    borderRadius: 10,
    textAlign: 'center',
    borderColor: 'transparent',
    fontWeight:'600',
    fontSize: 15,
    backgroundColor: 'tomato',
    color: 'white',
    overflow: 'hidden',

  }
});
export default styles;


  