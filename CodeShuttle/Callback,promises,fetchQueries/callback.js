// const OrderPizza = (callback) => {
//     setTimeout(() => {
//         const pizza = '🍕';
//         callback(pizza)
//         // return pizza;
//     },2000)
// }

function OrderPizza (myFunc) {
    getCheese((cheese) => {
        getDought(cheese, (Dough) => {
            bakePizza(Dough, (pizza) => {
                myFunc(pizza);
            })
        })
    })
}

function getCheese(next){
    setTimeout(() => {
        const cheese = '🧀';
        console.log(`sending the ${cheese}`)
        next(cheese)
    },2000)
}

function getDought (cheese, next){
    setTimeout(() => {
        const Dough = cheese + ' 🫓';
        console.log(`sending the ${Dough}`)
        next(Dough)
    },2000)
}
function bakePizza (Dough, next){
    setTimeout(() => {
        const pizza = Dough + ' 🍕';
        console.log(`sending the ${pizza}`)
        next(pizza)
    },2000)
}
function notify(pizza){
    console.log('Here is my notification for',pizza);
}
OrderPizza(notify);
// OrderPizza((pizza) => {
//     console.log('here is my',pizza);
// });