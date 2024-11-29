let array = ["RAHUL","MANOJ","RAHUL", "RAJ","MANOJ","RAHUL","VIVEK","RANI","RANI","VIVEK","RAHUL","RAJ","RANI"];
// let newArray=[];
// array.forEach((ele, ind)=>{
//     checkDuplicate(ele, ind);
// });


// function checkDuplicate(oldEle, oldInd){
//     array.forEach((ele,ind)=>{
//         if(ele===oldEle){
//             if(ind===oldInd) newArray.push(array[ind]);
//             else delete array[ind];
//         }
//     });
// }
 console.log(array);
//  console.log(newArray);


console.log((array.filter((element, index)=>{
    return index == array.lastIndexOf(element) ;
})));
// function cehckForDupliacte(element, index){
//     return index == array.lastIndexOf(element) ;
    
// }
