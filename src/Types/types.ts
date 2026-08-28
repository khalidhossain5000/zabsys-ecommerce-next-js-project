

export interface IProduct {
  id: string;
  name: string;
  data: Record<string, string | number> | null; //since field name are inconsistent thats why need to make it flexible type checking
}