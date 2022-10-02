class Formatter {
  //add static methods here
  static capitalize(str){
    str = str[0].toUpperCase() + str.slice(1)
    return str
  }

  static sanitize(str){
    const regex = /\w|\s|[-']/;
    let string = '';
    for(let i=0; i<str.length; i++){
      if(regex.test(str[i])){
        string += str[i];
      }
    }
    return string
  }

  static titleize(str){
    //const regex = /?= /
    const arr = str.split(' ')
    arr[0] = this.capitalize(arr[0])
    const test = ['a', 'an', 'at', 'by', 'from' , 'and' , 'of' , 'the', 'for' , 'but']
    let string = ''
    for (let i=0; i< arr.length; i++){
      if (!test.includes(arr[i])) {
        string += this.capitalize(arr[i])+' '
      }
      else {
        string += arr[i]+' '
      }
    }
    return string.slice(0, string.length -1)
  }
}