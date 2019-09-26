module.exports = function check(str, bracketsConfig) {
  let x, y, z, num_open=0,num_closed=0,open=[],close=[];
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if(str[j]==bracketsConfig[i][0]){
            /*open.push(bracketsConfig[i][0]);*/
            num_open++;
        }
        if(str[j]==bracketsConfig[i][1]&&num_open>num_closed){num_closed++;}
    }   
  }
  if(num_open==num_closed){
    return true;
  }else{
    return false;
  }
}
