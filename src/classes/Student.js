class Student {
  constructor(fname, lname, mark1, mark2, mark3, mark4, mark5, mark6) {
    this.fname = fname;
    this.lname = lname;
    this.mark1 = parseInt(mark1);
    this.mark2 = parseInt(mark2);
    this.mark3 = parseInt(mark3);
    this.mark4 = parseInt(mark4);
    this.mark5 = parseInt(mark5);
    this.mark6 = parseInt(mark6);
  }
  markAve() {
    return ((this.mark1 + this.mark2 + this.mark3 + this.mark4 + this.mark5 + this.mark6) / 6).toFixed(2);
  }
}
export default Student;
