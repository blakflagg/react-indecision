
class Person {
  constructor(name, age){
    this.name = name || 'Anonymus';
    this.age = age || 0;
  }

  getGreeting(){
    return `Hi. I am ${this.name}`;
  }

  getDescription(){

    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major
  }

  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person{
  constructor(name,age,homelocation){
    super(name,age);
    this.homelocation = homelocation;

  }

  hasHomeLocation(){
    return !!this.homelocation;
  }

  getGreeting(){
    let description = super.getGreeting();
    if(this.hasHomeLocation()){
      description += ` I am visiting from ${this.homelocation}`;
      
    }
    return description;
  }
}

const me = new Traveler('Dan Duffy',39, 'Irvine , California');
console.log(me.getGreeting());
console.log(me.getDescription());
 