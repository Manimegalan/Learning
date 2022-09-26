/* =============================== Combination =============================== */

function combination(array) {
    if (array.length === 0) return [[]];
    const firstEle = array[0], restEle = array.slice(1), allCombs = [];
    const combs = combination(restEle);
    combs.forEach(comb => {
        allCombs.push([...comb, firstEle])
    })
    return [...combs, ...allCombs]
}
console.log(combination(["a", "b", "c"]))

/* =============================== Permutation with string =============================== */

function findPermutation(string) {
    if (!string || typeof string !== "string") return "Enter valid string.";
    else if (string.length < 2) return string;
    let permutationArray = [];
    for (let i = 0; i < string.length; i++) {
        let firstEle = string[i];
        if (string.indexOf(firstEle) !== i) continue;
        let restEle = string.slice(0, i) + string.slice(i + 1, string.length);
        for (let permutation of findPermutation(restEle)) {
            permutationArray.push(firstEle + permutation)
        }
    }
    return permutationArray;
}

console.log(findPermutation("aabc"))

/* =============================== Permutation with array =============================== */

function permutation(elements) {
    if (elements.length === 0) return [[]];
    const firstEle = elements[0];
    const restEle = elements.slice(1);

    const permsWithoutFirst = permutation(restEle);
    const allPermutaion = [];
    permsWithoutFirst.forEach(prem => {
        for (let i = 0; i <= prem.length; i++) {
            const premWithFirst = [...prem.slice(0, i), firstEle, ...prem.slice(i)]
            allPermutaion.push(premWithFirst)
        }
    })
    return allPermutaion;
}

console.log(permutation(["a", "b", "c"]))
