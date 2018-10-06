import * as React from "react";

export const sum = (a: number, b: number) => a + b;

export type SumProps = { a: number; b: number };

// export const Sum: React.StatelessComponent<SumProps> = ({
//   a,
//   b
// }) => {
//   return <>{sum(a, b)}</>;
// };

export class Sum extends React.Component<SumProps, {}> {
  s = async () => {
    return 2;
  };
  static defaultProps = {
    a: 0,
    b: 0
  };
  d = 2;
  async componentDidMount() {
    await this.s();
  }

  render() {
    const { a, b } = this.props;
    return <>{sum(a, b)}</>;
  }
}
