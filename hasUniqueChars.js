// Write your code below

function hasUniqueCharacters(string){
    for (let i = 0; i < string.length; i++){
        for (let ii = i + 1; ii < string.length; ii++){
            if (string[i] === string[ii]){
                return false
            }
        }
    }
    return true
}


console.log(hasUniqueCharacters("qwertyuiopasdfghjkzxcvbnm,1234567890[;./']"))