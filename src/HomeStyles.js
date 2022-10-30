import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles= StyleSheet.create({
   container: {
      alignItems: "center",
      alignSelf: 'center',
      justifyContent: "center",
      transform: [{ scale: 1}],
      marginHorizontal: '15%',
   },
   dateTitle:{
      fontWeight: '700',
      fontSize: 20,
      backgroundColor: 'tomato',
      color: 'white',
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden',
      alignSelf: 'flex-start'
   },
   dateText:{
      fontWeight: '900',
      fontSize: 12,
      backgroundColor: 'ghostwhite',
      color: 'tomato',
      borderRadius: 10,
      padding: 5,
      overflow: 'hidden',
      textAlign: 'center',
      borderColor: 'tomato',
      borderWidth:1,
   },
   titleCont:{
      marginVertical: 10,
   },
   date:{
      marginVertical: 5,
      marginHorizontal: 5,
      width: '40%',
   },
   dateCont:{
      alignSelf: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
   }
});




  