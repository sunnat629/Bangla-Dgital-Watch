
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define


  var bangla_num = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  var numb = new Array (60);
  var month = ["জানুয়ারি", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "অগাস্ট", "সেপ্টেম্বর",
                    "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
  var week = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার","শনিবার"];

  for(var a = 0; a < 60; a++){
                var number = a.toString();
                
                if(number.length == 1){
                    numb[a] = "০"+bangla_num[number[0]];
                }
                else{
                    numb[a] = ""+
                bangla_num[number[0]]+bangla_num[number[1]];
                }
            }  

 
function liveclock(){
var date= new Date();

hour=date.getHours();
hh = date.getHours();
minute=date.getMinutes();
seconds=date.getSeconds();

day = date.getDate()
months = date.getMonth();
year = date.getFullYear().toString();
wk = date.getDay();

 
var dn="প্রভাত";
if (hh > 12 && hh < 18){
dn = "দিবা";
}
else if (hh < 12 && hh > 6){
dn="প্রভাত";
}
else {
dn="রাত্রি";
}
if (hour > 12){
hour = hour-12
}
if (hour == 0){
  hour = 12
}

yr = bangla_num[year[0]]+bangla_num[year[1]]+bangla_num[year[2]]+bangla_num[year[3]]
document.getElementById("dates").innerHTML= numb[day]+" "+month[months]+" "+yr;   
document.getElementById("weeks").innerHTML = week[wk];                                       
document.getElementById("hm").innerHTML=numb[hour]+":"+numb[minute]+":"+numb[seconds];
document.getElementById("dns").innerHTML =dn;

setTimeout(liveclock,1000);
}


