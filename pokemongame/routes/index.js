var express = require('express');
var router = express.Router();
var game = require('./game');


class KeepCount {
    constructor(score, balls)
	{
		this.score = score;
		this.balls = balls;
	}
}

let keepcount = new KeepCount(0, 10);
let pokemon = game.generatePokemon();

/* GET home page. */
router.get('/', function(req, res, next) {
  keepcount.balls = 10;
  keepcount.score = 0;
  res.render('index', { score: keepcount.score, pokemon:pokemon, balls:keepcount.balls });
});

router.get('/pokemon', function(req, res, next) {
  let p = game.generatePokemon();
	res.json([{name: 'Mac' }]);
});




function onAction(action, pokemon) {
	if (action === 'throw') {
		keepcount.balls -= 1;
		result = game.throwBall(pokemon);
		if (result.caught === true) keepcount.score += pokemon.lvl;
		return result
	}
}

router.post('/', function(req, res, next) {
  let result;
  let action = req.body.action;

  if (keepcount.balls > 0) {
    result = onAction(req.body.action, pokemon);
	pokemon = game.generatePokemon();
  }

  if (keepcount.balls > 0) {
	res.render('index', { score: keepcount.score, pokemon:pokemon, balls:keepcount.balls, result: result});
  } else {
	res.render('result', { score: keepcount.score, pokemon:pokemon, balls:keepcount.balls, result: result});
  }

});

module.exports = router;
