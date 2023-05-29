var url=require('url');
var adr='http://locxalhost:3000/default.html?year=2022&month=febuary';
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata=q.query;
console.log(qdata);