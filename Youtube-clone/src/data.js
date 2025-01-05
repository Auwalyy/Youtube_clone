export const API_KEY = 'AIzaSyDJBcxx-l7Rooy5_ti3CbtI3ANs4I0_WZs'


// eslint-disable-next-line no-unused-vars
export const value_converter = (value) => {
   if(value>=1000000){
    return Math.floor(value/1000000) + 'M';
   }
   else if(value>=1000){
    return Math.floor(value/1000) + 'K';
   }
   else{
    return value;
   }
}