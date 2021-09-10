function numberOrString() {
    const probability = Math.random()

    if(probability > 0.5){
        return 42
    }else{
        return '42'
    }
}

numberOrString();


function greeting(){
    console.log('hello')
}