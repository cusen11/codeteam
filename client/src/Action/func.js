import { message } from "antd";

export const formatDAYbyCurrentDay = (date) =>{  
    let AllDay = new Date(date); 
    let minute = AllDay.getMinutes();
    let hours = AllDay.getUTCHours();
    let days = AllDay.getUTCDate();
    let month = AllDay.getUTCMonth() + 1; 
    let year = AllDay.getUTCFullYear();  
    
    
    let CurrentAllDay = new Date(); 
    let minuteCurrent = CurrentAllDay.getMinutes();
    let hoursCurrent = CurrentAllDay.getUTCHours();
    let daysCurrent = CurrentAllDay.getUTCDate();
    let monthCurrent = CurrentAllDay.getUTCMonth() + 1; 
    let yearCurrent = CurrentAllDay.getUTCFullYear();    
 
    let dayResult = `${minuteCurrent - minute} phút trước` ;
    if(yearCurrent > year){
        return dayResult = `${yearCurrent - year} năm trước`;
    }
    if(yearCurrent === year &&  monthCurrent > month){
        return dayResult = 'Ngày '+ AllDay.getDay() + '/' + AllDay.getMonth(); 
    }
    if(yearCurrent === year &&  monthCurrent === month && daysCurrent > days ){
        return dayResult = `${daysCurrent - days} ngày trước`;
    }
    if(yearCurrent === year &&  monthCurrent === month && daysCurrent === days && hoursCurrent > hours ){
        return dayResult = `${hoursCurrent - hours} giờ trước`;
    } 
    if(yearCurrent === year &&  monthCurrent === month && daysCurrent === days && hoursCurrent === hours && minuteCurrent === minute){
        return dayResult = `Vừa cập nhật`;
    }
    else{
        return dayResult;
    } 
}

export const formatDAY = (date) =>{  
    let AllDay = new Date(date);  
    let days = AllDay.getUTCDate();
    let month = AllDay.getUTCMonth() + 1; 
    let year = AllDay.getUTCFullYear();  
     
    let dayResult = days + '/' + month + '/' + year ;
    
        return dayResult;
} 

export const formatDDMMYY = (date) =>{
    let AllDay = new Date(date);   
    return AllDay.getDay() + '/' + AllDay.getMonth()+1 + '/' + AllDay.getFullYear();
}

export const success = (content) => {
    message.success(content);
};
  
export  const error = (content) => {
    message.error(content);
};
  
export  const warning = (content) => {
    message.warning(content);
};

export const ColorType = (post) =>{
    const { likes, angrys, normals } = post 
    const array = {likes, angrys, normals} 
    
    let max = 0
    let reslut = '#2ecc71' ; 
    if(array.angrys.length > max ){
        max = array.angrys.length
        reslut = '#c0392b' 
    } 
    if(array.likes.length > max ){
        
            max = array.likes.length
            reslut = 'rgb(24, 144, 255)' 
    }
    if(array.normals.length > max ){
        max = array.normals.length
        reslut = '#2ecc71' 
    }
       

     
    return reslut
}
 