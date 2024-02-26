type If<C extends boolean, T, F> = C extends true ? T : F;
type A = If<true, "first", "second">;
let variableOfA: A = "first";
console.log(variableOfA);
