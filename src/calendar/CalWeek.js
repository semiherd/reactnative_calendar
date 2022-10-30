import React,{useState, useRef,useEffect} from 'react';
import {View,Text} from 'react-native';
import styles from './style/CalWeekStyles';
import moment from 'moment';
import DayItem from './DayItem';


const CalWeek= ({selectedBgColor,selectedColor,data,availableDates,multipleSelection,firstDate,selectedDate,setSelectedDate,monthLength}) => {
   const[weeks,setWeeks]= useState();
   const[calData,setCalData]= useState();
   const[dayNum,setDayNum]= useState(monthLength);
   const days=['Mo','Tu','We','Th','Fr','Sa','Su'];

   function setDataFunc(i){
      setCalData(i)
   }

   function checkAvailableDates(datesArr,day){
      if(datesArr.length>0){
         if(datesArr.includes(day)) return true
         else return false;
      }else return true
   }

   async function arrangeDays(dayData,availability){
      try{
        
         let arr=[];
         Promise.all(dayData.map((item,index) => {
            const dayNum= moment(item.date).get('date');
           
            const key= item.weekday;
            
            const obj={
               type:'day',
               selected: item.selected? item.selected:false,
               date: dayNum.toString(),
               weekday: item.weekday,
               available: checkAvailableDates(availability,item.date)
            }
            if(!arr[key]) arr[key]=[]
            arr[key].push(obj);
         }))
         await arr.shift();
         await checkStart(arr);
         setWeeks(arr);
         setDayNum(dayNum)
      }catch(e){
         console.log(e);
      }
   }

   function checkStart(arr){
      let startDay;
      let lastday;
     
      Promise.all(arr.map((item,index) => {
         item.map(day=> {          
            if(day.date=='1') startDay=day.weekday;
            if(day.date==monthLength) lastday=day.weekday;         
         })
         
         const obj= {
            type: 'title', 
            selected:item.selected? item.selected:false,
            date: days[index],
            weekday:item[0].weekday,
            available: true
         };
        
         item.unshift(obj);
      }))
      
      Promise.all(arr.map((item) => {
         const nullDay= item[0].weekday;
         if(nullDay<startDay){
            const obj= {
               type: 'hidden',
               selected:false, 
               date: "",
               weekday:nullDay,
               available: item.available
            };
            item.splice(1, 0, obj);
         }   
         if(nullDay>lastday){
            item.push({ type: 'hidden',type:false,date: "",weekday:nullDay,available:true})
         }  
      }));
      return arr;
   }

   async function updateSelected(item){
      if(item.available==true && item.type=='day'){
         
         const itemNr= item.date<10? '0'+item.date:item.date;
         const dayPressed= moment(firstDate).format("YYYY-MM-"+ itemNr);
         const dayName= moment(dayPressed).isoWeekday();
         let obj= {
            date: dayPressed,
            weekday: dayName,
            selected: true
         }
         let newArr=[];
         if(multipleSelection){
            newArr = selectedDate.map(a => {return {...a}})
            const objIndex = newArr.findIndex((e => e.date == dayPressed)); 
            if(objIndex==-1) newArr.push(obj);
            else newArr.splice(objIndex, 1);
         }else{
            newArr.push(obj);
         }
         
         Promise.all(calData.map(async (item,index)=>{
            const checkDate = newArr.findIndex((e => e.date == item.date));
            if(checkDate>=0){
               calData[index].selected = true
            }else calData[index].selected = false
         }));
         arrangeDays(calData,availableDates)
         setSelectedDate(newArr);
      }
   }

   useEffect(()=>{
      if(calData) arrangeDays(calData,availableDates);
   },[calData])

   useEffect(()=>{
      setDataFunc(data)
   },[data])
   
   
   return (
      <View style={[styles().container,styles().center,styles().row]}>
         {weeks?.map((item,index) =>  { 
            return (
               <DayItem 
                  key={index} 
                  selectedFunc={updateSelected} 
                  data={item} 
                  selectedBgColor={selectedBgColor}
                  selectedColor={selectedColor}
               />
            )
         })}
      </View>
   )
}

export default CalWeek;