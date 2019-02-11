var email = ["aayush@gmail.com","shaily@gmail.com"]
var mission = ["aayush","shaily"]
var verify = prompt("enter your email for verification");
var detail ={aayush:"your mission is start tomorrow",shaily:"your mission start today"};

for(var i=0;i<email.length;i++){
if(verify == email[i]){
alert("email is correct");
alert(detail[mission[i]]);
}
}
