var obj = {
  POISON :'#C183C1',
  NORMAL : '#C6C6A7',
  FIGHTING :'#D67974',
  FLYING :'#C6B7F5',
  GROUND :'#EBD69D',
  ROCK : '#D1C17D',
  BUG : '#C6D16E',
  GHOST : '#A292BC',
  STEEL : '#D1D1E0',
  FIRE : '#F5AB78',
  WATER : '#9DB7F5',
  GRASS : '#A7DB8D',
  ELECTRIC : '#FAE079',
  PSYCHIC : '#FA92B2',
  ICE : '#BCE6E6',
  DRAGON : '#A27DFA',
  DARK : '#A29288',
  FAIRY : '#F4BDC9'
}

pokeTypeColor = (str) => {
    str = str.toUpperCase()
    return obj[str]
}

module.exports = pokeTypeColor