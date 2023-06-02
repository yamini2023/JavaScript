var OperatingSystem = function (type) {
    console.log('Android ' + type.name + ' has a ' + type.language + ' language.');
};
var Oreo = { name: 'system', language: 'TypeScript' };
OperatingSystem(Oreo);
