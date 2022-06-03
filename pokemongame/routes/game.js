
function getrandomInt(max) {
	return Math.floor(Math.random() * max);
}


class Pokemon {
	constructor(name)
	{
		this.name = name
		this.lvl = getrandomInt(100)
	}
}

class Pokeball {


	constructor()
	{
		this.strength = getrandomInt(100);
	}
}



function catchPokemon(pokemon, pokeball) {
	if (pokemon.lvl <= pokeball.strength) {
		return true
	} else {
		return false
	}
}


function generatePokemon() {
	const pokemonNames = ['Pikachu', 'Squirtle', 'Bulbasaur', 'Charmander'];
	const i = getrandomInt(pokemonNames.length);
	const pokemon = new Pokemon(pokemonNames[i]);
	return pokemon
}

class Result {

	constructor(pokemon, pokeball, caught, msg)
	{
		this.pokemon = pokemon;
		this.pokeball = pokeball;
		this.caught = caught;
		this.msg = msg;
	}
}


function generateResultmsg(caught, pokemon) {
  let msg = ''
  if (caught === true) {
	msg += `You just caught ${pokemon.name} with level ${pokemon.lvl}!`;

  } else {
	msg += `You did not catch ${pokemon.name} with level ${pokemon.lvl}!`;
  }
  //msg += ` Pokeball strength was ${pokeball.strength}`;

  return msg
}

function throwBall(pokemon) {
  const pokeball = new Pokeball();
  let caught = catchPokemon(pokemon, pokeball);
  let msg = generateResultmsg(caught, pokemon);
  let result = new Result(pokemon, pokeball, caught, msg);

  return result
}






exports.getrandomInt = getrandomInt;
exports.generatePokemon = generatePokemon;
exports.catchPokemon = catchPokemon;
exports.Pokemon = Pokemon;
exports.Pokeball = Pokeball;
exports.Result = Result;
exports.generateResultmsg = generateResultmsg;
exports.throwBall = throwBall;
