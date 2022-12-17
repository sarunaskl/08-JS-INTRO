function dontGiveMeFive(start, end)
{
  array = [];
  for (let i = start; i <= end; i++) {
   if (i !== 5 ) {
       array.push(i);
       console.log(array);
   }
    } 
  return array.lenght;
}

console.log(dontGiveMeFive(-17, 9));
