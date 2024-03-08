// export default function Todo({task , isDone}){
//   // props hocche read only shudhu tumi porte parba , man set korte parba na
//   // {task} amra jokhon destructuring kore feli tokhon kintu amra arekta variable banai felchi.tokhon kintu amra props k change kortechi na.amra jodi sora sori props k change korte cai tokhon kintu se error khabai dibe

//   // ei props k oneke immutable ba read only ooo bole thake
//   // props.task = "ami ghumabo"
//     return(
//         <li>Task : {task}</li>
//     )
// }


// eta k conditional rendering option : 1
// export default function Todo({task , isDone}){

//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//     else{
//         return <li>Work On : {task}</li>
//     }
// }


// conditional rendering option 2
// export default function Todo({task , isDone}){
//   if(isDone){
//     // return kore dile function ar samner dike agay na.
//   return(
//         <li>Finish : {task}</li>
//     )
//   }
//   return <li>Work on : {task}</li>
// }


// class - 7
// conditional rendering option 3 : ternary operator
// export default function Todo({task , isDone}){

     
//           return <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
   
//   }



// conditional rendering option 4 : &&
// export default function Todo({task , isDone}){

//    return <li>{task} {isDone &&  ': Done'}</li>
   
//   }

// conditional rendering option 5 : ||
// export default function Todo({task , isDone}){

//    return <li>{task} {isDone ||  ': Do it'}</li>
   
//   }

// conditional rendering option 6
export default function Todo({task , isDone}){
    let listItem;
  if(isDone){
    
  
    listItem = <li>Finish : {task}</li>
  
  }
  else{
    listItem = <li>Work on : {task}</li>
  }
  return listItem;
}