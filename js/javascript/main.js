import {userList} from './db.js';

console.log(userList[0].name);

const num = 5; 
const userName = 'Gabor'; 
const isActive = false; 
const nothing = null; 
let test; 

Number.prototype.isDivided = function(divider){
    return this % divider === 0;
}

const mixed = [1, 2, 4, ['Hello', true], {id: 44}, false];
console.log(mixed[4].id);
console.log(mixed.length);

const key = 'id';
console.log(userList[1][key]);