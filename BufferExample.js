var b=new Buffer(300); //It can store 300 characters.
b.write("NodeJS is a light-weight platform...."); //save or write data
console.log("Data in buffer : " + b.toString()); //read data from buffer.
//All characters from 5th to 25th position.
//ASCII is 8 bits. Every character takes only 1 byte.
console.log("5-25 position : " + b.toString('ascii',5,25)); 
//UTF is 16 bits. every character occupies 16-bits in memory
console.log("5-25 position : " + b.toString('utf8',5,25)); 
console.log();
//var arr=new Array();
var str=new String('');
for (i=0;i<25;i++)
{
        //str += String.fromCharCode(b[i]);
        process.stdout.write(String.fromCharCode(b[i]));
}
process.stdout.write('\n');
//console.log("str : " + str);

console.log("Hello how are you ? ");
process.stdout.write("Hello how are you ? ");
process.stdout.write("I'm fine... ");

