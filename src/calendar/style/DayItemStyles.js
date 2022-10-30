import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default styles= (selected,selectedBgColor,selectedColor) => StyleSheet.create({
   container:{
      marginVertical: '5%',
      marginHorizontal: '1%',
   },
   dayText:{
      marginVertical: 5,
      overflow: 'hidden',
      borderRadius: 20,
      padding: 12,
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'center',
      color: selected? selectedColor:'black',
      backgroundColor: selected? selectedBgColor:'transparent',
   },
   available:{
      textDecorationLine: 'line-through',
      textDecorationColor: 'black',
      textDecorationStyle: 'double',
      opacity: 0.5,
   },
   hiddenDay:{
      overflow: 'hidden',
      textAlign: 'center',
      alignSelf: 'center',
      opacity: 0,
   },
   dayTitle:{
      marginVertical: 5,
      overflow: 'hidden',
      borderRadius: 20,
      padding: 12,
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: 'teal',
      fontWeight: '700',
   }
});




  