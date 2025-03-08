export class Team {
  tname:string;
  desc: string;
  lead: string;
  mem1: string;
  mem2: string;
  mem3: string;
  mem4: string;


  constructor(tname: string, desc: string, lead: string, mem1: string, mem2: string, mem3: string, mem4: string) {
    this.tname = tname;
    this.desc = desc;
    this.lead = lead;
    this.mem1 = mem1;
    this.mem2 = mem2;
    this.mem3 = mem3;
    this.mem4 = mem4;
  }
}
