// Define arrays containing numbers
let numbers = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 
    11, 22, 33, 44, 55, 66, 77, 88, 99, 110];
let numbers1 = [
    783, 149, 920, 432, 715, 587, 264, 975, 685, 378, 
    190, 839, 256, 512, 64, 991, 706, 372, 623, 308];
let numbers2 = [
    492, 136, 897, 781, 322, 960, 543, 278, 614, 72,
    843, 465, 959, 548, 252, 427, 173, 841, 688, 91];
let numbers3 = [
    732, 17, 518, 877, 209, 465, 739, 890, 392, 639, 
    244, 69, 931, 608, 361, 832, 117, 589, 483, 734];
let numbers4 = [
    321, 803, 142, 670, 27, 483, 726, 389, 85, 149, 
    616, 748, 385, 534, 215, 947, 793, 469, 95, 510];
let numbers5 = [
    672, 501, 238, 108, 764, 637, 140, 811, 956, 73, 
    628, 354, 121, 402, 571, 489, 820, 228, 996, 663];

// Define a function to find the largest number in an array
function find(array) {
    let bigger = array[0]; // Assume the first element is the largest

    // Loop through the array to find the largest number
    for(let i = 0; i < array.length; i++) {
        if(array[i] > bigger) {
            bigger = array[i]; // Update 'bigger' if a larger number is found
        }
    }
    return bigger; // Return the largest number
}

// Find and output the largest number in each array
console.log(find(numbers));
console.log(find(numbers1));
console.log(find(numbers2));
console.log(find(numbers3));
console.log(find(numbers4));
console.log(find(numbers5));
