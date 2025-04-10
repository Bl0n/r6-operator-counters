'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let aruni = new Operator(r6operators.aruni, operatorId.aruni, "Operation Neon Dawn");

aruni.addCounterNode(operatorId.rauora, counterType.soft, "Aruni's Surya Gate blocks Rauora's D.O.M Panel deployment. Additionally she can destroy the Panel by punching it.");

export default aruni
