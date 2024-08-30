// alert("Hello");



// console.log(prompt("whats your name ??"));
// console.error("we are having error");
// console.warn("this is warning");

//  VARIABLES var,let,const

// let a = 100;
// a =50;
// console.log(a);
// const can't chnage value
// const a =1;
// a=2;
// console.log(a)

// METHODS
// var notice= "I have been struggling to start my webcam as i need to clear an interview with a video conferencing. I updated the OS from 18.04 to 20.04 but still I get the message No device found when I try to open cheese. Below is the output of the command lsus";
// console.log(typeof a);
// console.log(typeof b);
// console.log(notice.length);
// console.log(notice.toLowerCase());
// console.log(notice.toUpperCase());
// console.log(notice.substring(0,16));
// console.log(notice.split(""));
// console.log(notice.split ( ' ' ));


// ////////////////          ARRAY

// const ar = [1,2,3,'eqd','mittal','bdbdue']
// console.log(ar);

// ar[0]='rathva';
// console.log(ar)

// ar.push = "MCA";
// console.log(ar);
// ar.pop()
// console.log(ar);

// console.log(Array.isArray(ar))
// console.log(ar.indexOf('mittal'))


// ///////////      OBJECT   //////

// const person = {
//     fname : "mittal",
//     lname : "Rathva",
//     age : 24,
//     hobbies : ["movies", "music","travel"],
//     address: {
//         street: '50 main st',
//         city: 'boston',
//         state : 'A'

//     } 
// }

// console.log(person)
// console.log(person.fname, person.lname, person.address,person.hobbies[0])
// console.log(person.address.city)

// person.email = "abc@gmail.com"
// console.log(person)


// /////          LOOPS

// for and while
// for (let i=0; i<=20; i++){
//     console.log(i)
// }

// let i =0;
// while(i<=10){
//     console.log(i)
// i++;
// }


////////////////////// IF /ELSE
// var a =2;
// if(a ==3){
// console.log(a)
// }
// else{
//     console.log("wrong")
// }

// const b = a>10 ? 'red' : 'blue';
// console.log(b)



// ////////////     switch

// var as = "red";

// switch (as) {
//     case 'red':
//         console.log("red")
//         break;

//     case 'blue':
//         console.log("blue")
//         break;

//     default:
//         console.log("not found")
//         break;

// } 


// //////////////     FUNCTIONS

// function sum(a,b){
//  return a+b;
// }
// console.log( sum(1,2) )



// //////////////////       objects

// function abc(first, last, dob) {
//     this.first = first;
//     this.last = last;
//     this.dob = dob;
// }

// const abc1 = new abc('harsh','gupta',20)
// console.log(abc1)


//////////// class and constructers

class person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getBirthday(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new person("mittal","rathva",25);
// console.log(person1);
console.log(person1.getFullName())