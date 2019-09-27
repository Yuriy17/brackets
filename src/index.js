module.exports = function check(str, bracketsConfig) {

  let open=[];
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if(str[j]==bracketsConfig[i][0]){
        if (!(bracketsConfig[i][0]==bracketsConfig[i][1] && open.includes(i))){
          open.push(i);
          break;
        }
      }
      if(str[j]==bracketsConfig[i][1]){
        if (open[open.length - 1]==i) {
          open.pop();
          break;
        }
      }
      if(str[j]==bracketsConfig[i][1]&&!open.includes(i)){
        return false;
      }      

    } 
  }

  if(open.length>0){
    return false;
  }
  return true;
}
