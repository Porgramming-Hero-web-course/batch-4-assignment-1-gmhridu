{
    //
    function countWordOccurrences ( sen: string, word: string ): number
    {
        const caseSens = sen.toLowerCase();
        const wordSens = word.toLowerCase();

        const words = caseSens.split(" ");
        const occurrences = words.filter((w)=> w === wordSens).length;

        return occurrences;
    }

    const countWordOccurrence = countWordOccurrences("I love typescript", "typescript");

    console.log(countWordOccurrence);

    //
}
