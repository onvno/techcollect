```javascript
// test.js
export function test(){
  ...do something
}
export function check(){
  ...do some
}
// 或者导出表
export {test, check};
export {
  test as tester,
  check as checker
}



// import文件
import {test} from "test.js";
import {test,check} from "test.js";
import {test as tester} from "test.js";

import {each, map} from "lodash";
import _ from "lodash"; // 等价于 import {default as _} from "lodash";

import colors from "colors/safe";

let myObect = {
  field1: value1,
  field2: value2
}
export {muObject as default};
//或者
export default {
  field1: value1,
  field2: value2
}

import * as cows from "cows";


```



http://www.one-tab.com/page/2lSNjcIWStqnXoc0_FkMTQ