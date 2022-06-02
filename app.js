const chalk = require('chalk');
const { log } = require('console');
const fs = require('fs')

//console.log(chalk.yellowBright.bgGreen('Hello Chalk!!'));

//console.log(process.argv);
const command = process.argv[2];
//console.log(command);
const message = process.argv[3];
if (command === 'create'){
    console.log(chalk.redBright('Creating a new file'));

    fs.writeFile('./sample.txt', message,function(){
        console.log('Done');
    })
}else if(command === 'read'){
    console.log(chalk.red('Reading File...'));

    fs.writeFile('./sample.txt', 'utf-8', function(err, data){
        if (err) console.error('we have an error!')
        console.log('Done');
    })    
}
else{
    console.log(chalk.blueBright('Command not found!'));
}
