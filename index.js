const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(arrayOfObjects) {
  let object = arrayOfObjects.find( y => y.result === "W")
   return object ? object['year'] : undefined 

   const foo = object ? 'hi' : 'hello'
}
