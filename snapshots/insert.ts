import R_insert = require('../ramda/dist/src/insert');

declare const object: object;
declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> <U>(list: U[] | ArrayLike<U>) => (string | U)[]
R_insert(number, string);
// @dts-jest:pass:snap -> (string | object)[]
R_insert(number, string, object_array);
// @dts-jest:pass:snap -> (string | object)[]
R_insert(number)(string)(object_array);

// @dts-jest:pass:snap -> <U>(list: U[] | ArrayLike<U>) => (object | U)[]
R_insert(number, object);
// @dts-jest:pass:snap -> object[]
R_insert(number, object, object_array);
// @dts-jest:pass:snap -> object[]
R_insert(number)(object)(object_array);
