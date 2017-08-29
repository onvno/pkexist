const exists = require('npm-exists');
const chalk = require('chalk');

function search(module){
  exists(module)
	.then(moduleExists => {
		if (moduleExists) {
			console.log(chalk.dim(`${module}: Sorry, this package has existed`));
		} else {
			console.log(chalk.green(`${module}: Congratulations, this package has't existed`));
		}
  });
}

module.exports = search;
