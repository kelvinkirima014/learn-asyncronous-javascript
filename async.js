

// Asynchronous code
//now let's write the previous code asynchronously
//let's use the setTimeOut function
const secondMovie = () => {
    // in this setTimeout we pass a callback function that runs after 1s
   setTimeout(() => {
       console.log('second movie prints after 1s')

    },1000)

}
secondMovie()

const firstMovie = () => {
    console.log ('display this movie first')


}

// let's look at another setTimeout
const getTown = () => {
    setTimeout(() =>{
        console.log ('this is k-town')
    },0)
}
firstMovie()
getTown()
// although the setTimeout calls immediate
console.log('printnt l-town first')
console.log('1')
const getNumber = () =>{
  setTimeout((cb)=>{
    console.log('2')
  })
}
getNumber()
console.log('3')
