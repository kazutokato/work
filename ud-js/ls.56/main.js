const person = {
  name: ['kazuto', 'kato'],
  age: 28,
  gender: 'male',
  interests: {
    sports: 'swiming',
    media: 'radio'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};

const ageKey = 'age';
person[ageKey] = 18;
console.log(person.age)

person.getFullName();