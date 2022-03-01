import { Cliente } from './Cliente.js'
import { contaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupança.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);


