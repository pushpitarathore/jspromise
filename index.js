//console.log('hello');
//the promise are used in async operation
//promise has 3 state
 //1. pending
 //2. fullfilled
 //3. rejected
 //promise is a built in class
 //lets create a promise
 //the promise result can be handled using 3 methods
 //1. then();
 //2. catch();
 //3. finally();
   let v= true;
 //let promiseobj = new promiseClass(cbfn);
 let promiseobj = new Promise(function(resolve,reject){
    if(v==false){
        resolve("the value is true");
    }else{
        reject("the value is false");
    }
 });
 console.log(promiseobj);
 /*the syntax of then() method
 promiseobj.then(onfullfilled,onrejected);
 */ 
 promiseobj.then(function(value){
     console.log("opreation sucessfull " + value);
 }).catch(function(value){
     console.log("opretion failed " + value);
 }).finally(function(value){
     console.log("this block will execute everytime");
 });