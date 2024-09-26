'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let zero = new Operator(r6operators.zero, operatorId.zero, "Operation Shadow Legacy");

zero.addCounterNode(operatorId.alibi, counterType.hard, "Alibi's prismas can be destroyed by Zero's Argus camera zap.");
zero.addCounterNode(operatorId.echo, counterType.hard, "Echo's yokai drones can be destroyed by Zero's Argus camera zap.");
zero.addCounterNode(operatorId.valkyrie, counterType.hard, "Valkyrie's Black Eye cameras can be destroyed by Zero's Argus camera zap.");
zero.addCounterNode(operatorId.maestro, counterType.hard, "Maestro's Evil eye can be destroyed by Zero's Argus camera zap.");
zero.addCounterNode(operatorId.thunderbird, counterType.hard, "Thunderbird's Kona Station can be destroyed by Zero's Argus camera zap.");

export default zero