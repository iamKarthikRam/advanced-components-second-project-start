import {
  type ElementType,
  // FC,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// const Container<C extends ElementType>: FC = ({ as, children }: ContainerProps<C>) => {
//   const Component = as;
//   return <Component>{children} </Component>;
// };

// export default Container;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children} </Component>;
}
