import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Do you want to add in your Todo ?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more ?"
        },
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add vaild input");
    }
}
if (todos.length > 0) {
    console.log("your todo list is :");
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("no todos found");
}
