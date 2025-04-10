'use strict';
import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let ela = new Operator(r6operators.ela, operatorId.ela, "Operation Blood Orchid");

ela.addCounterNode(operatorId.montagne, counterType.hard, "Ela's Grzmot Mines will disorient Montagne, preventing him from extending his shield.");
ela.addCounterNode(operatorId.blitz, counterType.soft, "Ela's Grzmot Mines will disorient Blitz preventing him from sprinting with his shield up.");
ela.addCounterNode(operatorId.zofia, counterType.soft, "Ela can recover quickly if hit by one of Zofia's Concussion Grenades.");

export default ela
