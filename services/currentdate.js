
exports.currentDate=(res)=>{
  const myDate = new Date();
  let daysList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let date = myDate.getDate();
  let month = monthsList[myDate.getMonth()];
  let year = myDate.getFullYear();
  let day = daysList[myDate.getDay()];
  return `${month}-${date}-${year}`;
}
exports.currentTime=(res)=>{
  const myDate = new Date();
  let amOrPm;
  let twelveHours = function (){
      if(myDate.getHours() > 12)
      {
          amOrPm = 'PM';
          let twentyFourHourTime = myDate.getHours();
          let conversion = twentyFourHourTime - 12;
          return `${conversion}`
  
      }else {
          amOrPm = 'AM';
          return `${myDate.getHours()}`}
  };
  let hours = twelveHours();
  let minutes = myDate.getMinutes();
  return `${hours}:${minutes} ${amOrPm}`;
}