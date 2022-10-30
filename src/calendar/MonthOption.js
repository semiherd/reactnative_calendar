
import React,{useState, useRef,useEffect} from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import styles from './style/MonthOptionStyles';
import moment from 'moment';

const MonthOption = ({setMonthOptions,firstDate,setFirstDate}) => {

   const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

   function getMonthName(param){
      return months[param];
   }
   function chooseMonth(param){
      let month= param + 1;
      const year= moment(firstDate).year();
      if(month<10) month=  '0' + month;
      const newMonth= moment(firstDate).format(year+"-"+month+"-01");
      setFirstDate(newMonth);
      setMonthOptions(false);
   }

   return (   
      <View style={styles.container}>
         {months.map((item,index) => {
            return (
               <TouchableOpacity key={index.toString()} onPress={() => chooseMonth(index)}>  
                  <View  key={index.toString()} style={styles.item}>
                     <Text key={index.toString()} style={styles.month}>
                        {getMonthName(index)}
                     </Text>     
                  </View>
               </TouchableOpacity>  
            )
         })}
      </View>      
   )
}

export default MonthOption;