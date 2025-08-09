// módulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// módulos internos
const fs = require("fs");
const { type } = require("os");

// bora codar o Sistema:
operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair"
        ],
      },
    ])
    .then((answer) => {
        const action = answer['action']
        console.log(action)
      // Aqui você chama a função de acordo com a escolha

    })
    .catch((err) => console.log(err));
}
