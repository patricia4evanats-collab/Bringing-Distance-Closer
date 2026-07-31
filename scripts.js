function checkMessage (message){ 
let phoneregex=/d{3,4}/g;
  return phoneregex.test(message);
