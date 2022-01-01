
/*
const tempRequest = (url) => {
    return new Promise((complete, fail)=>{
        const rand = Math.random();
        setTimeout(()=> {
            if (rand < 0.7) {
                complete('Here');
            }
            fail('Request Error.!!');
            


        }, 1000)

    }) 

}

tempRequest('/dogs/1')
.then((data)=>{
    console.log("Done with request")
    console.log('Your data is:', data)
})
.catch((err)=> {
    console.log('OOPS:', err)
}) */


const delayedColorChange = (color, delay) => {
    return new Promise((complete, fail)=> {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            complete();

        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(()=> delayedColorChange('orange', 1000))
.then(()=> delayedColorChange('yellow', 1000))
.then(()=> delayedColorChange('green', 1000))
.then(()=> delayedColorChange('blue', 1000))
.then(()=> delayedColorChange('indigo', 1000))
.then(()=> delayedColorChange('voilet', 1000))
.then(()=> delayedColorChange('voilet', 1000))