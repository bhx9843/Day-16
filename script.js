const countdown =(num, callback) => {
    setTimeout(() => {
        console.log(num);
        if(num > 1) {
            callback(num -1,callback);
        }
        else{
            callback();
        }
    },1000);
};

countdown(10, (num,callback) => {
    setTimeout(() => {
        console.log(num);
        if(num>1) {
            callback(num -1,callback);
        }
        else{
            celebrateIndependenceDay();
        }
    },1000);
});

const celebrateIndependenceDay = () =>{
    console.log("Happy Independence Day");
};