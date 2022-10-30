import React, { useEffect,useState } from 'react';
import {View,Text} from 'react-native';
import Calendar from './calendar/Calendar';
import styles from './HomeStyles';

const Home= () =>{
   const[selectedDate,setSelectedDate]= useState([]);
   const selectedBgColor="tomato";
   const selectedColor="white";

   const calendarDefaultSelection= new Date();
   const availableDates= ['2022-10-30','2022-10-20','2022-10-24','2022-10-28','2022-11-05'];
   return (
      <View style={styles.container}>
         <Calendar 
            data={availableDates}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            defaultSelection={calendarDefaultSelection}
            multipleSelection={true}
            selectedColor={selectedColor}
         />     
         <View>
            {selectedDate.length>0? 
               <View style={styles.titleCont}>
                  <Text style={styles.dateTitle}>{selectedDate.length>1? 'Selected Dates' : 'Selected Date'}</Text>
               </View>:null
            }
            {selectedDate.length >0?  
               <View style={styles.dateCont}>
                  {selectedDate.map((item,index) => {
                     return (
                        <View style={styles.date} key={index.toString()}>
                           <Text style={styles.dateText}>{item.date}</Text>
                        </View>
                     )}
                  )}
               </View>
               : null
            }
         </View>
      </View>
   )
}

export default Home;