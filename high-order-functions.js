const users = [{
    id: 1,
    name : 'Girish'
},{
    id:2,
    name : 'Devil'
}];


const found = users.some(user => user.id === 2);
console.log(`User id exists : ${found}`);
if(found){
    const user = users.filter(user => user.id === 2);
    console.log('this is user', user[0]);
    const {id: id , name: name} = user[0];
    console.log(name);
}
console.table(users);