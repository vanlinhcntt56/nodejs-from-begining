const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is my error!', undefined, 123)
        // callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallback((error, result, number) => {
    // if(error) {
    //     return console.log(error)
    // }

    console.log(result, number)
})