function stringsRearrangement(inputArray) {
   const finalArray = [inputArray[0]]
   const array = inputArray
   array.splice(0,1)
   console.log(array)
   console.log(finalArray)

   const comparison = (arr1, arr2) => {
       let differences = 0

       for(let j = 0; j < arr1.length; j++) {
           if(arr1[j] !== arr2[j]) {
               differences++
           }
       }

       return differences
   }

   for(let i = 0; i < array.length; i++) {
       const recentWordIndex = (finalArray.length - 1)
       const word1 = finalArray[recentWordIndex].split('')
       const word2 = array[i].split('')

       const diff = comparison(word1, word2)

       if(diff === 1) {
           finalArray.push(array[i])
           array.splice(i, 1, '1234')
       }
   }
}
