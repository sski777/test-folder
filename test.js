function array1(newarray){
let arrays = [newarray]
let zeroindexes = []
let count = 0
for (i = 0; i < newarray.length; i++){
  let variable = newarray[i]
  if (variable==0){
    count++
    let check = count % 2
    if (check==0){
      zeroindexes.push(i)
    }
  }
}
let countsee = -1
for (i = 0; i < zeroindexes.length; i++){
  let variable = zeroindexes[i]
  countsee++
  let arraytoworkwith = arrays[countsee]
  let indexofinterest = variable-countsee
  let emptyarray = []
  for (j = 0; j < arraytoworkwith.length; j++){
     let index = arraytoworkwith[j]
     if (j!=indexofinterest){
       emptyarray.push(index)
     }
  }
  arrays.push(emptyarray)
}
 return arrays[arrays.length-1]
}

let callback = array1([1,2,5,0,8,9,12,0,3,4,0,65,3,0,3443,67,0,0])
console.log(callback)

function array2(arraysee){
let arrays = [arraysee]
let zeroindexes = []
let count = 0
for (i = 0; i < arraysee.length; i++){
  let variable = arraysee[i]
  if (variable==0){
    count++
    let check = count % 2
    if (check==0){
      zeroindexes.push(i)
    }
  }
}
let countsee = -1
for (i = 0; i < zeroindexes.length; i++){
  let variable = zeroindexes[i]
  countsee++
  let arraytoworkwith = arrays[countsee]
  let indexofinterest = variable-countsee
  let splice = arraytoworkwith.splice(indexofinterest,1)
  arrays.push(arraytoworkwith)
}
return arrays[arrays.length-1]
}

let callback12 = array2([1,2,5,0,8,9,12,0,3,4,0,65,3,0,3443,67,0,0])
console.log(callback12)