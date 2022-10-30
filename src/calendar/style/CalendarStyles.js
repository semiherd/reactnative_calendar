import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles= StyleSheet.create({
    row:{
      flexDirection: 'row',
    },
    title:{
      alignSelf: 'center',
      padding: '1%',
    },
    titleText:{
      fontWeight: '600',
      color: 'white',
      backgroundColor: 'tomato',
      textAlign: 'center',
      borderRadius:10,
      overflow:'hidden',
      padding: 10,
    },
    arrow:{
      marginHorizontal: '5%',
    },
    center:{
      alignSelf: 'center',
      textAlign: 'center',
    },
});




  