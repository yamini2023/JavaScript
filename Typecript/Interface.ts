interface System {  
    name: String;  
    language: String;  
}  
let OperatingSystem = (type: System): void => {  
  console.log('Android ' + type.name + ' has a ' + type.language + ' language.');  
};  
let Oreo = {name: 'system', language: 'TypeScript'}  
OperatingSystem(Oreo);  