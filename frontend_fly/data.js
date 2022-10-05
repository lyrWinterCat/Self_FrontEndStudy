export const numbers=[1,2,3,4,5,6,7];

export class Student{
    constructor(name,korean,english,math){
        this.name=name;
        this.korean=korean;
        this.english=english;
        this.math=math;
    }
}

const student1 = new Student('홍길동',95,36,94);
const student2 = new Student('김길동',90,100,25);
const student3 = new Student('이길동',75,56,100);
const student4 = new Student('박길동',100,66,84);

export const students = [student1,student2,student3,student4];

export const fruits=["사과","딸기","배","참외","복숭아","포도"];