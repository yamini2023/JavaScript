const persons = ['Max', 'Manu'];
console.log(persons);

// ---

const course = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});
console.log(course);

Reflect.deleteProperty(course, 'title');

// Object.deleteProperty(course, 'title');

// delete course.title;

console.log(course);
console.log(title);