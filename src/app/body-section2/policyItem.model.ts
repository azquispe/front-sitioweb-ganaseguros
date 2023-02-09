export class PolicyItem {
  public number: string;
  public name: string;
  public date: string;
  public target: string;

  constructor(number: string, name:string, date: string, target:string) {
    this.number = number;
    this.name = name;
    this.date = date;
    this.target = target;
  }
}
