import React,{useState, useRef,useEffect} from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './style/DayItemStyles';

const DayItem= ({data,selectedBgColor,selectedColor,selectedFunc}) => {
   
   return (
      <View style={styles().container}>
         {data?.map((day,index) =>  {  
            let selected= day.selected;
            const selectedBg= selectedBgColor? selectedBgColor:'tomato';
            const selectedCol= selectedColor? selectedColor:'white';
            return (
               <Pressable key={index.toString()} onPress= {() => selectedFunc(day)} >
                  <Text style={[
                     styles(selected,selectedBg,selectedCol).dayText,
                     !day.available && styles().available,
                     day.type=='title' && styles().dayTitle,
                     day.type=='hidden' && styles().hiddenDay,
                  ]}>{day.date}</Text>
               </Pressable>
            )
         })}
      </View>
   )
}

export default DayItem;