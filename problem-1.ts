{
    //
    // sumArray function
    const sumArray = ( numbers: number[] ): number =>
    {
        return numbers.reduce((account, current)=> account + current, 0);
    };


    const sum = sumArray([1, 2, 3, 4, 5]);
    console.log(`The sum of the numbers in the array is: ${sum}`);


    //
}
