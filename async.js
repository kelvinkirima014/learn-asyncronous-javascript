

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
firstMovie()
// let's look at another setTimeout
//we set it to 0ms but the event loop waits for the
//stack to clear before the callback can be popped on it again
const getTown = () => {
    setTimeout(() =>{
        console.log ('this is k-town')
    },0)
}
getTown()
console.log('printnt l-town first')
