const course = {
    title: 'JavaScript - The Complete Guide'
  };
const courseHandler = {
    get(obj, propertyName) {
      console.log(propertyName);
      if (propertyName === 'length') {
        return 0;
      }
      return obj[propertyName] || 'NOT FOUND';
    }
  };
  
  const pCourse = new Proxy(course, courseHandler);
  console.log(pCourse.title, pCourse.length, pCourse.rating);
  
