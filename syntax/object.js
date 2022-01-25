var members = ['kwon', 'kim', 'lee'];
console.log(members[1]);

var i = 0;
while (i < members.length) {
    console.log(members[i]);
    i++;
}

var roles = {
  'programer' : 'kwon',
  'designer' : 'kim',
  'manager' : 'lee'
};
for (var n in roles) {
    console.log('object => ' , n, 'value => ', roles[n]);
}
console.log(roles.designer);
console.log(roles['designer']);

