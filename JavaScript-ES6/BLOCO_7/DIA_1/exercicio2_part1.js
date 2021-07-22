const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function sortItems () {
  oddsAndEvens.sort((a, b) => {
    return a - b;
  })
} 
sortItems();

console.log(oddsAndEvens);
