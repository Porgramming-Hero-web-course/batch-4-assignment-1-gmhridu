{
    //

    type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle"
    width: number
    height: number
}

type Shape = Circle | Rectangle;

function shapeAreaCalculate ( shape: Shape ):number
{
    if (shape.shape === 'circle') {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2))
    } else if ( shape.shape === 'rectangle' )
    {
        return shape.width * shape.height
    }
    throw new Error("Unknown Shape type");
}


const circleArea = shapeAreaCalculate( {
    shape: "circle",
    radius: 5
} )

console.log(circleArea)

const rectangleArea = shapeAreaCalculate( {
    shape: "rectangle",
    width: 4,
    height: 6
} )

    console.log( rectangleArea )

// 
}
