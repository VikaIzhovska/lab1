class Delivered_shipment 
{
    constructor(index,height,width,length,weight,departpoint,arrivalpoint,departtime,arrivaltime){
        if(arrivaltime){
        this.index = index;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
        this.departpoint = departpoint;
        this.arrivalpoint = arrivalpoint;
        this.departtime = new Date(departtime);
        this.arrivaltime = new Date(arrivaltime);}
        //else console.log("The arrival time is not determined.");
    }
}
module.exports = Delivered_shipment;
