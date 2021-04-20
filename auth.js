let status;
let globalArr; 
const globalState = {};
module.exports = {
  isSignedIn: status || false,
  getIsSignedIn: () => {
    console.log('value of status is: ', status);
    return status;
  },
  setIsSignedIn: (bool) => {
    console.log('bool value is: ', bool);
    status = bool;
    console.log('value of status is in SET: ', status);
    // module.exports.isSignedIn = bool;
  },
  // set: (arr, value) => {
  //   arr[1](value);
  // }
  set: (setSignedIn, value) => {
    setSignedIn(value);
  }
};
