class Tree {
    constructor (weight,l,c,r){
    this.weight = weight;
    this.l = l;
    this.c = c;
    this.r = r;
    }
    Sum()
    {
        let summa = this.weight;
        if(this.l!=null){
            summa  +=this.l.Sum();
        }
        if(this.c!=null){
            summa  +=this.c.Sum();
        }
        if(this.r!=null){
            summa  +=this.r.Sum();
        }
        return summa;
    }
    Walk()
    {
        let recwalk = ` ${this.weight}`;
        if(this.l!=null){
            recwalk  += ` ${this.l.Walk()}`;
        }
        if(this.c!=null){
            recwalk  += ` ${this.c.Walk()}`;
        }
        if(this.r!=null){
            recwalk  += ` ${this.r.Walk()}`;
        }
        if(this.l!=null || this.c!=null || this.r!=null){
        recwalk += ` ${this.weight}`;
        }
        return recwalk;
    }

}

let newtree = new Tree(13,
        new Tree(4,new Tree(10,new Tree(3,null,null,null),new Tree(5,null,null,new Tree(1,null,null,null)),new Tree(8,null,null,null)),null,new Tree(7,null,null,null)),
        null,
        new Tree(9,new Tree(2,null,null,new Tree(6,null,null,null)),null,null));
console.log(`Sum = ${newtree.Sum()}`);
console.log(`Walk = ${newtree.Walk()}`);