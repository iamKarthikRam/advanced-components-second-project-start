import { type ElementType, FC, ReactNode } from "react";

type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ as, children }: ContainerProps) => {
  const Component = as;
  return <Component>{children} </Component>;
};

export default Container;
