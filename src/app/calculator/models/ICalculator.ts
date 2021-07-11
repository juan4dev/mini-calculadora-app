export interface ICalculator {
  presentValue: number;
  storedValue: number;

  operator: string | undefined;
  screenValue: number | string;
  needReset: boolean;
}
