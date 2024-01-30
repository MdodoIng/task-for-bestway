export enum Columns {
  IN_PROGRESS,
  DONE,
}

export type Card = {
  id: string;
  title: string;
};

export type cardSate = { [Key in Columns]: Card[] };
