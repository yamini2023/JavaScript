function user(data) {
    return data;
}
console.warn(user("yam"));
console.warn(user(20));
console.warn(user({ name: "yam", age: 20 }));
console.warn(user({ name: "yam", age: 20 }).name);
