function isIntegerCheck(value : number): boolean {
  let checkValue : boolean = Number.isInteger(value);
  return checkValue
}

function add(a : number,b : number):number{
  if(isIntegerCheck(a) === false || isIntegerCheck(b)===false){
    throw new Error("argument is not number type!")
  }
    let result : number = a + b
  return result
}

try {

  const result : number = add(2, 3)
  console.log(result)
  const resultWithFloat : number = add(2.6, 3)
  console.log(resultWithFloat)

} catch (error) {

  console.error(error)
  
}