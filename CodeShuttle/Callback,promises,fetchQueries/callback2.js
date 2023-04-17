function OrderPizza (myFunc) {
    bakePizza((pizza) => {
        myFunc(pizza);
    })
}

function bakePizza(callback){
    getDought((Dough) => {
        setTimeout (() => {
            const pizza = Dough + '🍕';
            console.log(`Baked the pizza -  ${pizza}`)
            callback(pizza);
        },2000);
    })

}

function getDought (callback){
    setTimeout(() => {
        const Dough = '🫓';
        console.log(`bake the ${Dough}`)
        callback(Dough)
    },2000)
}

function notify(pizza){
    console.log('Here is my notification for',pizza);
}
OrderPizza(notify);