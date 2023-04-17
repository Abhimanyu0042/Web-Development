//if a function is returning promise its a async function

async function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cheese 🧀')
        },1000)
    })
}

async function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${cheese} dough 🍚`)
        },2000)
    })
}

async function makePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${dough} pizza 🍕`)
        },2000)
    })
}

async function OrderPizza(){
    try{
        const cheese = await getCheese(); //await symbolises we wait on the promise
        console.log('Now we have',cheese);
        const dough = await makedough(cheese);
        console.log('now we have',dough);
        const pizza =  await makePizza(dough);
        console.log('now we have',pizza);
        return pizza;
    }
    catch(e){
        console.log(e);
    }

}

const pizza = OrderPizza();
console.log(pizza);