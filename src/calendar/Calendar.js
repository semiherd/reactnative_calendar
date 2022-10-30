
import React,{useState, useRef,useEffect} from 'react';
import {TouchableOpacity,SafeAreaView,View,Text,Pressable} from 'react-native';
import Icon from './VectorIcons';
import styles from './style/CalendarStyles';
import CalWeek from './CalWeek';
import MonthOption from './MonthOption';
import moment from 'moment';

const Calendar = ({data,selectedDate,setSelectedDate,selectedBgColor,selectedColor,multipleSelection}) => {
   
   const[firstDate,setFirstDate]= useState();
   const[monthOptions,setMonthOptions]= useState();
   const[calDays,setCalDays]= useState();
   const[monthLength,setMonthLength]= useState();
   
   const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

   const dateFormat="YYYY-MM-DD"
   const dateFormatMonthStart="YYYY-MM-01"
   const dateY="YYYY-";
   const dateD="-01";

   function getMonthOptions(){
      setMonthOptions(i=>!i)
   }

   function dayNumberofMonth(data) {
      return moment(data).daysInMonth()
   }

   function updateParam(date){
      setFirstDate(date);
   }

   function getMonthName(param){
      const response= new Date(param).getMonth();
      return months[response];
   }

   async function initialSetFirstDate(){  
      const date= new Date(); 
      let firstDay= moment(date).format(dateFormatMonthStart);
      setFirstDate(firstDay);   
   }
   
   function pushItem(arr,item) {
      return new Promise((resolve, reject) => {
         arr.push(item)
         if(arr.includes(item)) resolve(arr);
      });
   }
   
   async function calendarDays(data){
      try{ 
         let mon= moment(data).month();
         if(mon==11) mon=12
         else mon=mon+1;
         
         const year=moment().year();
         let monthnew= moment().format(dateY+mon+dateD);
         const countDays= dayNumberofMonth(moment(monthnew))
         setMonthLength(countDays);
         const arr = [];
         const daysArr = [];
         for(i=1;i<=countDays;i++){
            daysArr.push(i);
         }
         
         let result = daysArr.reduce( (accumulatorPromise, i) => {
            return accumulatorPromise.then(() => {
               let selectedParam;
               if(selectedDate){
                  const selectedDateList= selectedDate.map(i=>i.date);
                  const date= year+"-"+mon+'-'+i; //new Date(year,mon,i);
                  let dateStr= moment(date,dateFormat).format(dateFormat);
                  let dayName= moment(dateStr).isoWeekday();
                  selectedParam= selectedDateList.includes(dateStr)? true: false;
                  let obj= {
                     date:dateStr,
                     weekday:dayName,
                     selected: selectedParam
                  }
                  return pushItem(arr,obj);
               }
            });
          }, Promise.resolve());
          
          result.then(e => {
            setCalDays(e);
          });
          
      }catch(e){
         console.log(e);
      }
   }

  
   async function prevMonth(){
      try{
         let newD;
         let d = new Date(firstDate);
         let m= d.getMonth();
         if (m == 0) {
            const newY= d.getFullYear() - 1;
            newD = new Date(newY+'-12-01' );
         } else {
            newD = new Date(d.getFullYear()+'-'+m+'-01' );
         }
         await calendarDays(newD);
         updateParam(newD)
      }catch(e){
         console.log(e)
      }
   }

   async function nextMonth(){
      try{
         let newD;
         let d = new Date(firstDate);
         let m= d.getMonth();
         if (m == 11) {
            const newY= d.getFullYear() + 1;
            newD = new Date(newY+'-01-01' );
         } else {
            const newM= m + 2;
            newD = new Date(d.getFullYear()+'-'+newM+'-01' );
         }
         await calendarDays(newD);
         updateParam(newD)
      }catch(e){
         console.log(e)
      }
   }
   useEffect(() => {
      calendarDays(firstDate);
   },[firstDate])
    
   useEffect(() => {
      initialSetFirstDate();
   },[])

   return ( 
         <View>       
            {!monthOptions && (
               <View style={[styles.title,styles.row]}>
                  <TouchableOpacity style={[styles.arrow,styles.center]} onPress={() => prevMonth()}>  
                     <Icon type="FAIcon" name="arrow-left" size={20} color="tomato" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => getMonthOptions()}>  
                     <Text style={styles.titleText}>{getMonthName(firstDate)}-{new Date(firstDate).getFullYear()}</Text>     
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.arrow,styles.center]} onPress={() => nextMonth()} >  
                     <Icon type="FAIcon" name="arrow-right" size={20} color="tomato" />
                  </TouchableOpacity>
               </View>
            )}
            <View>
               {monthOptions && (
                  <View style={styles.monthOption}> 
                     <MonthOption 
                        setMonthOptions={setMonthOptions} 
                        firstDate={firstDate} 
                        setFirstDate={setFirstDate} 
                     />
                  </View>
               )}
               {!monthOptions && calDays && 
                  <View style={[styles.row,styles.center]}>      
                     <CalWeek
                        availableDates={data}
                        data={calDays} 
                        firstDate={firstDate} 
                        selectedDate={selectedDate} 
                        setSelectedDate={setSelectedDate} 
                        monthLength={monthLength}
                        multipleSelection={multipleSelection}
                        selectedBgColor={selectedBgColor}
                        selectedColor={selectedColor}
                     />
                  </View>
               }      
            </View>           
         </View>    
   )
}

export default Calendar;