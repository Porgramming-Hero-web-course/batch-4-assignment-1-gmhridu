{
    //

    // removeDuplicates from array
    type RemoveDuplicates = number[];

    function removeDuplicates ( numbers: RemoveDuplicates )
        : RemoveDuplicates
    {
        const filterNum = numbers.filter((num, i)=> numbers.indexOf(num) === i)
        return filterNum;
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(result)

    //
}
