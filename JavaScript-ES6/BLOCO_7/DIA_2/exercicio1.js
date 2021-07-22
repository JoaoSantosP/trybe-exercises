const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
//console.log(order);
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
//retornar "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
return `Olá Ana Silveira, entrega para : ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`

}

//console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
//"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

let name = order.name = "Luiz Silva"
let resultado = order.payment.total = 50;
  
return `Olá ${name}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ ${resultado}`

}

console.log(orderModifier(order));