type PropsKey<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type PickPropsType<T, U> = Pick<T, PropsKey<T, U>>;

export type { PickPropsType };
