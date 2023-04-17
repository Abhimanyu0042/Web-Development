function checkout (myFunc) {
    getOrderinfo((details) => {
        checkIfAvailable(details,(yes) => {
            placeOrder(yes,(bill) => {
                myFunc(bill);
            })

        })

    })

}

function getOrderinfo(next){
    setTimeout (() => {
        const details = '📃';
        console.log(`Loading the details ${details}`);
        next(details);
        
    },2000)
}

function checkIfAvailable(details, next){
    setTimeout (() => {
        const Available =  true;
        const yes = details + '✅';
        if(Available)
        console.log(`Availability for Order ${yes}`);
        else{
            console.log('An error occured',error);
        }
        next(yes);
        
    },2000)
}

function placeOrder(yes,next)
{
    setTimeout (() => {
        const Available = true;
        if(Available){
            const bill = yes + '🛒';
            console.log(`The order is placed ${bill}`);
            next(bill);
        }
    },2000)
}

function success(bill){
    console.log('Your order is placed successfully and - ',bill);
}

checkout(success);