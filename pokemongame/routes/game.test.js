var fetch = require('node-fetch');
var game = require('./game');

test('random number should be less than 100', () => {
	expect(game.getrandomInt(100)).toBeLessThanOrEqual(100);
});

test('generatePokemon should include one of the popular Pokemons', () => {
  const pokemon = game.generatePokemon();

	expect(['Pikachu','Charmander','Squirtle','Bulbasaur']).toContain(pokemon.name);
});

test('expect result from throwball', () => {

  const pokemon = new game.Pokemon('Pikachu');
  pokemon.lvl = 12;
  const result = game.throwBall(pokemon);
  expect(result.caught).toEqual(expect.anything());
  expect(result.pokemon.lvl).toBe(12);
  expect(result.pokemon.name).toBe('Pikachu');
});


test('resultmsg should include Pikachu and lvl 12', () => {
  const pokemon = new game.Pokemon('Pikachu');
  pokemon.lvl = 12;
  const msg = game.generateResultmsg(true, pokemon);

	expect(msg).toBe('You just caught Pikachu with level 12!');
});


test('catchPokemon should return true', () => {
	const pokemon = new game.Pokemon('Pikachu');
	pokemon.lvl = 5;
	const pokeball = new game.Pokeball();
	pokeball.strength = 15;
	expect(game.catchPokemon(pokemon, pokeball)).toBe(true);
});

test('catchPokemon should return false', () => {
	const pokemon = new game.Pokemon('Pikachu');
	pokemon.lvl = 10;
	const pokeball = new game.Pokeball();
	pokeball.strength = 1;
	expect(game.catchPokemon(pokemon, pokeball)).toBe(false);
});

const getPokemon =  async() => {
  const res = await fetch('http://localhost:3000/pokemon');
  const json = res.json();
  console.log(json);
return json
};

test('test API', async () => {
  const json = await getPokemon();
  expect (json[0].name).toBe("Mac");
});
