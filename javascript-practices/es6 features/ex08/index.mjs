console.log('===[Test: Unnamed Export Module]'); // Unnamed Export Module Import 에서은 반드시 이름을 지정해야 한다.
import myFunction from './mods/ex01.mjs';           // 함수 하나 default
console.log(myFunction(10, 20));

import myObject from './mods/ex02.mjs';             // 객체 하나 default
console.log(myObject.subtract(10, 20));

console.log('===[Test: Named Export Module II]'); // Named Export 모듈의 다수 객체 Destrcting Import
import {subtract} from './mods/ex03.mjs';
console.log(subtract(10, 20));

console.log('===[Test: Named Export Module]'); // Named Export Module은 다수의 객체를 Export 하기 때문에 Import 할 때 특정 이름을 지정할 수 없다. 대신, '* as 이름' 를 사용할 수 있다.
import * as m from './mods/ex03.mjs';
console.log(m.add(2, 2));
console.log(m.subtract(2, 2));

console.log('===[Test: Named + Unamed Export Module]')
import math, {add} from './mods/ex04.mjs';
console.log(math.add(1, 1));
console.log(add(10, 34));

