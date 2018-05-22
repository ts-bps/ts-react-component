import * as React from "react";

export const sum = (a: number, b: number) => a + b;

export type SumProps = { a: number; b: number }

export const Sum: React.StatelessComponent<SumProps> = ({
  a,
  b
}) => {
  return <>{sum(a, b)}</>;
};

// export class Sum extends React.Component<SumProps, {}> {
//   render() {
//     return <>{sum(a, b)}</>;
//   }
// }


Sum.defaultProps = {
  a: 0,
  b: 0
};
