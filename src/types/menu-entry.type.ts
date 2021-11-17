export enum MenuStatus {
  Soon = "soon",
  Beta = "beta",
}

export type MenuEntry = {
  title: string;
  path: string;
  status: MenuStatus;
  subMenu?: MenuEntry[];
};
