import { ManualLens, Property, PseudoLens } from "./$types";
/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
declare const lensProp: lensProp_0;
type lensProp_0 = {
    <K extends string | number>(property: K): lensProp_key_1<K>;
    <T, U>(property: Property): lensProp_general_1<T, U>;
};
type lensProp_key_1<K extends string | number> = PseudoLens<K>;
type lensProp_general_1<T, U> = ManualLens<T, U>;
export = lensProp;