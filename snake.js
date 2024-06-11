function Snake(){
    this.x=0;
    this.y=0;
    this.speedx=1;
    this.speedy=0;
    this.total=0;
    this.tail=[];

    this.eat = function(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
            this.total++;
            return true;
        }
        else{
            return false;
        }
    }

    this.dir = function(x, y){
        this.speedx = x;
        this.speedy = y;
    }

    this.lose = function(){
        for(var i=0; i<this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 1){
                console.log('lose');
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function(){
        if(this.total == this.tail.length){
            for(var i=0; i<this.tail.length-1;i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        console.log(this.x);
        this.x = (this.x+this.speedx*scl)%width;
        if(this.x<0){
            this.x=width;
        }
        this.y = (this.y+this.speedy*scl)%height;
        if(this.y<0){
            this.y=height;
        }

    }

    this.show = function(){
        fill(255);
        for(var i=0; i<this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }

}