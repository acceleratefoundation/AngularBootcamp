# Accelerate University - Introduction to Javascript

## What is Javascript, how is it used?

  * Javascript is originally a web based programming language. Meaning it was used in conjunction with HTML, and CSS in order to create web applications.
  * Now Javascript isn't just used for web applications, it can be used for doing pretty much everything. Including but not limited to - Systems programming and Data Science.
  * Javiscript is a very versatile language and a good place to start when trying to learn software development.
  
  
## Basic Syntax

  - Variables
  ```
// Variables- you can think of a variable like an empty bucket. We can put things in the bucket and use is for something. 

// In Programming there is a concept of 'declaring' something. Basically meaning that when I type in this word it shows the computer what I'm going to try to do with the thing I just typed.

//When it come to variables there are three different ways to declare them in javascript.

// var, let , and const. For example...

var hi = 'hello'
  
let hiAgain = 'hello again'

const hiOnceMore  = 'hello once more'

// So in these examples we have buckets named hi, hiAgain, and hiOnceMore that contain the values 'hello', 'hello again', and 'hello once more'

// Each of these 'declarations' mean something a little different but we will get into that in later lessons. For now just know that there are three different ways to declare variables, and when in doubt use let.

  ```
  - Functions
  ```
    //ES5
    let helloWorld = function() {
      console.log('hello world!')
    }

    helloWorld()

    //ES6
    let helloWorld = () => {
      console.log('hello world!')
    }

    helloWorld()

  ```
