// console.log('Hello World!');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click',function(){
//     alert('Hello World!!');
// });

// window.onload = function(){ //비효율적임
//     let btn = document.querySelector('#btn');
//     btn.addEventListener('click',function(){
//         alert('Hello World!!');
//     });
// };

// document.addEventListener('DOMContentLoaded',function(){
//     let btn = document.querySelector('#btn');
//     btn.addEventListener('click',function(){
//         alert('Hello World!!');
//     });
// })

// let person = {
//     fullname:'나',
//     age:20,
//     printThis:function(){
//         console.log(this);
//         console.log('this===person: ', this===person);
//         console.log('this===window: ', this===window);
//     },
// };
// // person.printThis();
// let printThis=person.printThis;
// printThis();

// function printThis(){
//     console.log(this)// default this=> window
// }
// printThis();

// let person1 = {
//     name:'홍길동1',
//     printThis:printThis,
// };
// person1.printThis();

// let person2 = {
//     name:'홍길동2',
//     printThis:printThis,
// };
// person2.printThis();
// let person3 = {
//     name:'홍길동3',
//     printThis:printThis,
// };
// person3.printThis();

//window
// let btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     console.log(this);
//     console.log(this===btn);
// });

//ES5 bind - this 설정

// function printThis(){
//     console.log(this)// default this=> window
// }
// let person1 = {
//     name:'홍길동',
// };
// let person2 = {
//     name:'박길동',
// };
// let printThis1=printThis.bind(person1); //this에 person1을 bind 해서 this의 객체를 바꿔줌

// let printThis2=printThis1.bind(person2); //바인딩은 한번만 사용 가능 >> 박길동이 아니라 홍길동 나옴
// printThis2();


// let person={
//     name:'녜님',
//     age:20,
//     hello:function(){
//         setTimeout((function(){
//             console.log(this);
//             console.log(this.name);
//             console.log(this.age);
//         }).bind(this), 1000)
//     }
// }
// person.hello();


//화살표 함수 : ES 6
//화살표 함수 전 : 함수가 어떻게 호출되는지에 따라 자신의 this 정의
// 화살표 함수 : 자신을 포함하고 있는 외부 Scope에서 this 계승

// let person={
//     name:'녜님',
//     age:20,
//     hello:function(){
//         //상위스코프 this를 물려받음 >> 바인딩 필요 없이 person this를 물려받음! 
//         setTimeout(()=>{
//             console.log(this);
//         }, 1000);
//         //만약 화살표 함수가 없다면 변수에 this를 담아서 익명함수를 사용! 
//     }
// }
// person.hello();


//strick mode

// 'use strict';
// function printThis(){
//     console.log(this)// default this=> window
// }
// printThis();


//화살표 함수를 쓰면 안 되는 경우
// let person={
//     name:'짐코딩',
//     printThis: ()=>{ //function으로 정의하는 편이 더 좋음 ! 
//         console.log(this); //외부scope에서 this 물려받음 : window 객체 출력
//     },
// };
// person.printThis();

// + addEventListener 에서도 화살표함수보다 임시함수로 호출하기

"use strick";



// const numbers=[1,2,3,4,5,6,7];
// const result=numbers.map(function(number){
//     return number*2;
// });

//명령어가 하나일 때는 한줄로 표현 가능
// const result=numbers.map((number)=>number*2);
// console.log(result);

// class Student{
//     constructor(name,korean,english,math){
//         this.name=name;
//         this.korean=korean;
//         this.english=english;
//         this.math=math;
//     }
// }

// const student1 = new Student('홍길동',95,76,94);
// const student2 = new Student('김길동',90,75,25);
// const student3 = new Student('이길동',75,46,84);
// const student4 = new Student('박길동',94,66,84);

// const students = [student1,student2,student3,student4];

// console.log("영어 점수",
// students.map((student)=>student.english)
// );

// console.log("학생 이름",
// students.map((student)=> student.name)
// );

import {numbers,students,fruits} from "./data.js";

console.log(('과일 중에 배가 있나요?'),
fruits.some((fruit)=> fruit==="배")
);

console.log(
    "숫자에 7 이상인 숫자가 있나요?",
    numbers.some((number)=> number>=7)
);


console.log(
    "수학 점수가 100점인 학생이 있나요?",
    students.some((student)=> student.math===100)
);


console.log(('숫자가 모두 8 이하 인가요??'),
numbers.every((number)=>number<=8)
);

console.log('짝수만 출력해주세요',numbers.filter(number=>number%2==0)
);

console.log('홀수만 출력해주세요',numbers.filter((number)=>number%2==1)
);

console.log('영어점수가 90점 이상인 학생들',
students.filter((student)=>student.english>=80).map(student=>student.name)
);

numbers.reduce((acc,cur,idx,src)=>{
    console.log("acc: ",acc, " cur : ",cur," idx: ",idx);
    return acc;
},1);

const result=fruits.reduce((arr,cur)=> {
    if(arr.includes(cur)===false){
        arr.push(cur)
    }
    return arr;
},[]);
console.log(result);





















