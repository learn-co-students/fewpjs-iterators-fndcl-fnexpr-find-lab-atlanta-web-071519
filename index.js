const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (objArray) => {
  const winObj = objArray.find((object) => {
    return object.result === "W"
  })
  if (winObj){return winObj.year}
}