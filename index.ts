import inquirer from 'inquirer';

async function counter() {
    
    const answers: { sentence: string } = await inquirer.prompt([
    {
        type: 'input',
        name: 'sentence',
        message: 'Enter Sentence :'
    }
])

const words = answers.sentence.trim().split(' ');

console.log(`Your sentence have ${words.length} Words`);
};
async function startAgain(){
    do{
         await counter();
        var again = await inquirer
    .prompt({
            type: "input",
            name: "restart",
            message: "Do u want to countinue? Press y/n"
           })
        }
        while(again.restart=="y" || again.restart=="Y" ||again.restart=="Yes" || again.restart=="YES" || again.restart=="yes");
    }
    startAgain();
