class Shipment {
        constructor(index,height,width,length,weight,departpoint,arrivalpoint,departtime){
            this.index = index;
            this.height = height;
            this.width = width;
            this.length = length;
            this.weight = weight;
            this.departpoint = departpoint;
            this.arrivalpoint = arrivalpoint;
            this.departtime = new Date (departtime);
            
        }
}
module.exports = Shipment;