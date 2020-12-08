//SOME AND EVERY : both functions return boolean
const users = [{
    id: 1,
    name : 'Girish',
    complete:true
},{
    id:2,
    name : 'Devil',
    complete:true
}
,{
    id:3,
    name : 'Dexter',
    complete:true
}
];


const found = users.some(user => user.id === 2);
console.log(`User id exists : ${found}`);

const allRegistered = users.every(user => user.complete === true);
console.log(`Every user is registered: ${allRegistered}`);

if(found){
    const user = users.filter(user => user.id === 2  );
    const {id: id , name: name} = user[0];
}


// FIND :  returns 1 entry of the value/object

const userDevil = users.find(user => user.id === 2);
console.log(userDevil);

