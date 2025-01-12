function testsee(array){
   let outputnumbers = []
   for (i = 0; i < array.length; i++){
     let variable = array[i]
     for (j = 0; j < variable.length; j++){
        let index = variable[j]
        outputnumbers.push(index)
     }
   }
   let outputcount = []
   let newset = new Set(outputnumbers)
   let newarraycreate = Array.from(newset)
   for (i = 0; i < newarraycreate.length; i++){
     let variable = newarraycreate[i]
     let count = 0
     for (j = 0; j < array.length; j++){
        let index = array[j]
        for (k = 0; k < index.length; k++){
           let indexhey = index[k]
           if (indexhey==variable){
              count++
              break
           }
        }
     }
     outputcount.push(count)
   }
   let outputsum = []
   for (i = 0; i < outputcount.length; i++){
      let variable = outputcount[i]
      if (variable>=2){
        letfind = newarraycreate[i]
        outputsum.push(letfind)
      }
   }
   let countsum = 0
   for (i = 0; i < outputsum.length; i++){
     countsum = countsum + outputsum[i]
   }
   return countsum
}

let callback = testsee([[1, 8, 8], [8, 8, 8], [8, 8, 8, 1]])
console.log(callback)
