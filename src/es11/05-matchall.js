// es la forma que se generan diferentes filtros o reglas segun sea el caso, se puede hacer validaciones
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Orange, Apple, etc, etc, etc';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}