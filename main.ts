import inquirer  from "inquirer";

const systemGenerateNo  = Math.floor(Math.random() * 10) + 1;

const {userGuess} : {userGuess:number} = await inquirer.prompt({
    type : "number", 
    name : "userGuess",
    message : "Guess the number between 1 to 10:",
});

if(userGuess === systemGenerateNo){
    console.log("Congratulations your guess is right.");

}else{
    console.log(`Opps the correct number was ${systemGenerateNo}. Better Luck Next Time. `);
}
