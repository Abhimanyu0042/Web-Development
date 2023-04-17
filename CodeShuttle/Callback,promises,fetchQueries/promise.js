// function OrderPizza(){
//     return new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             const pizza = '🍕';
//             resolve (pizza);
//         },2000)
//     })
// }

// function OrderPizza(){
//     return new Promise(function(resolve,reject) {
//         const isAvailable  = false;
//         setTimeout(() => {
//             if(isAvailable){
//             const pizza = '🍕';
//             resolve (pizza);}
//             else{
//                 reject('We do not have Pizza')
//             }
//         },2000)

//     })
// }

// const pizzaPromise = OrderPizza();

// pizzaPromise
// .then((pizza) => {
//     console.log('my pizza' ,pizza)

// }).catch(error => {
//     console.log('Error occured', error);
// })


//RAILWAY TICKET
//select seats
//enter name
//payments

bookRailwayTicket();

function bookRailwayTicket() {
    const seat = 'A3';
    const name = 'Abhi';
    const payment = 870;
    selectSeats(seat)
    .then((seat) => {
        enterDeatils(name,seat)
    })
    .then((details) => {
        submitPayment(name, seat, payment)

    })

}

function selectSeats(seat){
    return new Promise(function (resolve,reject) {
        setTimeout (() => {
            console.log('seats confirmed', seat);
            resolve(`confirmed ${seat}`)
        },2000)        
    })
}

function enterDeatils(name,seat){
    return new Promise(function (resolve,reject) {
        setTimeout (() => {
            console.log('name binded', name, 'with', seat);
            resolve(`confirmed ${name} ${seat}`)
        },2000)        
    })
}

function submitPayment(name,seat, payment){
    return new Promise(function (resolve,reject) {
        setTimeout (() => {
            console.log('payment confirmed', name, 'with', seat);
            resolve(`confirmed ${name} ${seat} ${payment}`)
        },2000)        
    })
}