function Stonks(){
    this.dji = 30534.8;
    this.china = 851070000;
    this.net_change = null;

    this.update = function (){
        this.net_change = (Math.floor(Math.random() * 7) + -2)/10;
        this.dji += this.net_change * this.dji;
        this.china -= this.net_change * this.china; 
        console.log(Math.round(this.china), Math.round(this.dji), this.net_change);
    }
}