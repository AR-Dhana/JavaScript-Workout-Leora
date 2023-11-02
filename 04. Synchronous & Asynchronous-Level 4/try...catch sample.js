try {
    var greet = "Hi, there!";
    console.log(greet);
    
    // Trying to access a non-existent variable
   var welcome='2023';
    console.log(welcome);
    
    // If error occurred following line won't execute
    ar="All statements are executed successfully.";
} catch(error) {
    // Handle the error
  console.log("Caught error: " , error);
}
 
// Continue execution
console.log("Hello World!");