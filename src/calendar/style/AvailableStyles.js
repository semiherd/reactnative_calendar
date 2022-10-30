import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles= StyleSheet.create({
   container: {
      flex:1,
      backgroundColor: 'ghostwhite',
      width: windowWidth,
      borderRadius: 10,
      padding: '1%',
      alignItems: "center",
      position:'absolute',
      bottom: 0,
      left: 0,
      right:0,
      top:'10%',
   },
   headerContainer:{
      width: '100%',
      paddingHorizontal: '3%',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor: 'teal',
   },
   calendarContainer:{
      flexWrap: 'wrap',
   },
   row:{
      flexDirection: 'row',
   },
   center:{
      alignSelf: 'center',
   },
   title:{
      alignSelf: 'center',
      marginTop: '3%',
      padding: '1%',
   },
   titleText:{
      fontWeight: '600',
      color: 'white',
      backgroundColor: 'tomato',
      textAlign: 'center',
      borderRadius:10,
      //backgroundColor: '#33D6D1',
      overflow:'hidden',
      padding: 10,
   },
   arrow:{
      marginHorizontal: '5%',
   },
   free:{
      fontWeight: '800',
      color: 'steelblue',
      textAlign: 'center',
      alignSelf: 'center',
      borderRadius:5,
      backgroundColor: '#33D6D1',
      overflow:'hidden',
      padding: 5,
      fontSize: 15,
   },
   quantity:{
      fontWeight: '900',
      color: 'tomato',
      textAlign: 'center',
      alignSelf: 'center',
      borderRadius: 5,
      //backgroundColor: 'tomato',
      overflow:'hidden',
      paddingVertical: 5,
      paddingHorizontal: 5,
      fontSize: 15,
   },
   totalPrice:{
      fontWeight: '900',
      color: 'black',
      textAlign: 'center',
      alignSelf: 'center',
      padding: 1,
      fontSize: 15,
   },
   counter: {
      marginHorizontal: 5,
      fontSize: 15,
      fontWeight: '600',
      padding: 5,
      overflow: 'hidden',
      color: 'black',
   },
   availabilityTitle:{
      fontSize: 15,
      fontWeight: '600',
      textAlign: 'center',
      marginHorizontal: 5,
      alignSelf: 'center',
   },
   previewContainer:{
      width: windowWidth * 0.8,
   },
   spaceAround:{
      justifyContent: 'space-around',
      marginVertical: 10,
   },
   center:{
      alignSelf: 'center',
      textAlign: 'center',
   },
   marginVertical:{
      marginVertical: 5,
   },
   alignLeft:{
      textAlign: 'left'
   },
   confirmButton:{
      fontWeight: '700',
      fontSize: 18,
      color: 'white',
      backgroundColor: 'tomato',
      borderRadius: 5,
      overflow: 'hidden',
      padding: 10,
      alignSelf: 'center',
   },
   borderWidth: {
      borderWidth:1,
      alignItems:'center',
   },
});




  