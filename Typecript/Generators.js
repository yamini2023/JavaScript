function users(data) {
    return data;
}
console.warn(users("yam"));
console.warn(users(20));
console.warn(users({ name: "yam", age: 20 }));
console.warn(users({ name: "yam", age: 20 }).name);
