'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let valkyrie = new Operator(r6operators.valkyrie, operatorId.valkyrie, "Operation Dust Line");

export default valkyrie