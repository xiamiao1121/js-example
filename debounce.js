function shotCat(content){
    console.log('1111')
}


// function debounce(fun, delay = 500){
//     return function(args){
//         console.log(this)
//         let that = this
//         let _args = args
//         clearTimeout(fun.timer)
//         fun.timer = setTimeout(function(){
//             fun.call(that, _args)
//         }, delay)
//     }
// }


function debounce(fun, delay = 500, immediate = true){
    let timer = null
    return function (args){
        let that = this
        let _args = args
        if(timer) clearTimeout(timer)
        if(immediate){
            if(!timer) fun.apply(that, _args)
            timer = setTimeout(()=>{
                timer = null
            },delay)
        }
        else{
            timer = setTimeout(function(){
                fun.call(that, _args)
            },delay)
        }
    }
}




let debounceShotCat = debounce(shotCat, 500)


debounceShotCat()