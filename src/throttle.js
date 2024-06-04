function throttle(fun, delay = 500){
    let previous = 0
    return function(args){
        let now = Date.now();
        let that = this;
        let _args = args;
        if(now - previous > delay){
            fun.apply(that, _args)
            previous = now
        }
    }
}