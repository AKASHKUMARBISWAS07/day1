
1.Difference between “ == “ and “ === “ operators.

ans: Both checks the value is equal, but triple equals check the data type also


2.What is the spread operator?

ans:

The spread operator is used to expand or spread an iterable or an array,
we can also use the spread synta to copy the items into a single array
quickly copy all or part of an existing array into another array.



3.What are the differences between var, let and const?

ans:
    Var - : (a) Var variable is functional scope.
            (b) it can be updated and re-declared into the scope.
            (c) it can be declared without initialization.
    
    Let - : (a) Let variable is block scope.
            (b) it can be updated and can't be re-declared into the scope.
            (c) it can be declared without initialization.
    
    Const -: (a) Const variable is block scope.
             (b) it can't be updated or can't be re-declared into the scope.
             (c) it can't be declared without initialization.


3.What is execution context ?

ans:

Execution context is defined as the environment in which the JavaScript code is executed
the Execution Context contains the code that's currently running, and everything that help in its execution.
An Execution Context is created each time you run your .js file. where the datas are Stored and global executon context 
is created. it wll wrap whole code into it. 


4. What is meant by first class functions ?

ans:

First class functions basically means Functions as a data type just like a string an array or a number. So in Javascript functions are data,
so you can pass functions as arguments of another function.


5. What are closures ? Give an example of closure ?

ans:

closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
        function foo()
        {
             var a = 3 ;
             function inner(){
                 return a;
             }
             return inner;
        }
        var get_func_inner = foo();        
         console.log(get_func_inner());


6.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()

  call()-:   Call invokes the function and allows to pass in arguments one by one.
  Apply()-:  Apply invokes the function and allows  to pass in arguments as an array.
  bind() -:  Bind returns  new function allowing  to pass in  the array and any number of arguments.