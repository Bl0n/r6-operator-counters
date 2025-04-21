'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let tubarao = new Operator(r6operators.tubarao, operatorId.tubarao, "Operation Deep Freeze");

tubarao.addCounterNode(operatorId.thermite, counterType.hard, "Tubarao's Zoto Canister can delay Thermite's Exothermic Charge from triggering.");
tubarao.addCounterNode(operatorId.hibana, counterType.hard, "Tubarao's Zoto Canister can delay Hibana's X-KARIOS pellets from triggering.");
tubarao.addCounterNode(operatorId.ace, counterType.hard, "Tubarao's Zoto Canister can delay Ace's SELMA Breaching Device from triggering.");
tubarao.addCounterNode(operatorId.ram, counterType.hard, "Tubarao's Zoto Canister can delay Ram's BU-GI from moving.");
tubarao.addCounterNode(operatorId.ash, counterType.soft, "Tubarao's Zoto Canister delay's Ash's breaching charge from activating.");
tubarao.addCounterNode(operatorId.glaz, counterType.hard, "Tubarao's Zoto Canister can prevent Glaz's thermal scope from working and prevent defenders who are in the area from showing up on Glaz's thermal scope.");
tubarao.addCounterNode(operatorId.fuze, counterType.soft, "Tubarao's Zoto Canister can prevent Fuze's Cluster Charge from activating");
tubarao.addCounterNode(operatorId.blitz, counterType.soft, "Tubarao's Zoto Canister can prevent Blitz's Flash Charge from working");
tubarao.addCounterNode(operatorId.iq, counterType.hard, "Tubarao's Zoto Canister can prevent Iq's Electronics Detector from scanning and prevents defender electronics from being scanned");
tubarao.addCounterNode(operatorId.jackal, counterType.soft, "Tubarao's Zoto Canister can stop Jackal from activating his Eyenox");
tubarao.addCounterNode(operatorId.ying, counterType.hard, "Tubarao's Zoto Canister can make Ying vulnerable to her own Candelas and delay Candelas from activating");
tubarao.addCounterNode(operatorId.dokkaebi, counterType.hard, "Tubarao's Zoto Canister can prevent Dokkaebi from activating her hack and prevent defenders from getting hacked");
tubarao.addCounterNode(operatorId.rauora, counterType.soft, "Tubarao's Zoto Canister can delay Rauora's D.O.M Panel from closing.");

export default tubarao
