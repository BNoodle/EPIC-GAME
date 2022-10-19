function Stonks(){
    this.dji = 30534.8;
    this.china = 851070000;
    this.net_change = null;

    this.update = function (){
        this.net_change = (Math.floor(Math.random() * 7) + -2)/10;
        this.dji += this.net_change * this.dji;
        this.china -= this.net_change * this.china; 
    }

    this.logChange = function (){
        console.log("Dow Jones Industry:");
        console.log(Math.round(this.dji));
        console.log("China Net Worth:");
        console.log(Math.round(this.china));
        console.log("Net Change: ");
        console.log(this.net_change);
    }
}