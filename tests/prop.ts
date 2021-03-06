import { Placeholder } from '../ramda/dist/src/$placeholder';
import R_prop = require('../ramda/dist/src/prop');

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap
R_prop('a');
// @dts-jest:pass:snap
R_prop('a')(a_b_number_record);

// @dts-jest:pass:snap
R_prop('a', a_b_number_record);

// @dts-jest:pass:snap
R_prop(placeholder, a_b_number_record);
// @dts-jest:pass:snap
R_prop(placeholder, a_b_number_record)('a');
