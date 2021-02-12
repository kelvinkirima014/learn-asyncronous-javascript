

// Asynchronous code
//now let's write the previous code asynchronously
//let's use the setTimeOut function
const secondMovie = () => {
    // in this setTimeout we pass a callback function thar runs after 1s
    setTimeout(() => {
        console.log('second movie prints after 1s')
    },1000)
}
secondMovie()
const firstMovie = () => {
    console.log ('display this movie first')

}
firstMovie()


    




