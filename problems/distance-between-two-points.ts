/*
    In this challenge you will be working with points in two and three dimensional space.The classes and methods you implement will store
    values for coordinates as well as calculate distances between points.The 2D AND 3d distance between points are calculated using the following formulae:

    2D = squrt[ (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) ]
    3D = squrt[ (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1)]

    You need to implement in this order :
    1) create a superclass named Point2D - define variable (x and y)
    2) define 2 function in Point2D -> double dist2D(Point2D p) and void printDistance(double d)
    3) A derived class named Point3D that extends Point2D ( in Point3D - define z variable)
    4) define 2 function in Point3D -> double dist3D(Point3D p) and void printDistance(double d)

    input : [ 1 , 2 , 3 , 4 , 5 , 6 ]  similar x[1] = 1, y[1] = 2, z[1] = 3, x[2] = 4, y[2] = 5, z[3] = 6
    output:
        2D distance = 5
        3D distance = 6
* */

class Point2D {
    protected x : number;
    protected y : number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    dist2D (point : Point3D) : number {
        let distanceX = (point.x - this.x);
        let distanceY = (point.y - this.y);
        let distanceInSquare = (distanceX * distanceX) + (distanceY * distanceY);
        return Math.ceil(Math.sqrt(distanceInSquare));
    }

    printDistance (distance : number) {
        console.log('2D distance = '+ distance);
    }
}


class Point3D extends Point2D{
    protected z : number;
    constructor(x: number, y: number, z: number) {
        super(x,y);
        this.z = z;
    }

    dist3D (point : Point3D) : number{
        let distanceX = (point.x - this.x);
        let distanceY = (point.y - this.y);
        let distanceZ = (point.z - this.z);
        let distanceInSquare = (distanceX * distanceX) + (distanceY * distanceY) + (distanceZ * distanceZ);
        return Math.ceil(Math.sqrt(distanceInSquare));
    }

    printDistance (distance : number) {
        console.log('3D distance = '+ distance);
    }
}

let points = {
    x1  : 1, y1  : 2, z1  : 3,
    x2  : 4, y2  : 5, z2  : 6
};

let point1 : Point3D = new Point3D(points.x1, points.y1, points.z1);
let point2 : Point3D = new Point3D(points.x2, points.y2, points.z2);

let d2 : number = point1.dist2D(point2);
let d3 : number = point1.dist3D(point2);

let point :Point2D = new Point2D(0,0);
point.printDistance(d2);
point = point1;
point.printDistance(d3);

//output :
// 2D distance = 5
// 3D distance = 6
