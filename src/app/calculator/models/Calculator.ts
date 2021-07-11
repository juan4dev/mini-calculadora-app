export class Calculator {
  public presentValue: number = 0;
  public storedValue: number = 0;

  public operator: string | undefined;
  public screenValue: number | string = 0;
  public needReset: boolean = false;
}
