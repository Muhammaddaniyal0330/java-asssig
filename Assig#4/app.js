// ----- CHAPTER 15 ------ //

// Q1 

// var arr = [];

// // Q2 

// var stringArr = ['hello world'];
// console.log(stringArr);

// Q3

// var alphabet = ['h','i','j','k']
// var alphaJ = alphabet[2]
// alert(alphaJ)

// Q4

// var alphabet = ['h','i','j','k','l','m','o']
// var alphabetLeg = alphabet.length;
// console.log(alphabetLeg);

// // Q5

// var arr = ['apple'];
// var arr2 = ['banana']

// alert(arr2)

// ----- CHAPTER 16 -------- // 

// Q1

// var nameArr = ['ali','saad','bilal','marko','joispoi'];
// var newArr = nameArr.push('mahnoor');
// alert(nameArr);


// // Q2

// var alpha = ['i','j','k','l']
// var lastAlpha = alpha.pop()
// alert(alpha)


// Q3

// var alpha = ['h','i','j','k'];
// var newAlpha = alpha.push('l');
// alert(alpha)


// ------- CHAPTER 16 ------ // 

//  Q1 

// var size = ['m','n','o','p','q','r']
// var removeElement = size.shift();
// alert(size)

// Q2 

// var size = ['S','M','XL','XXL','XXXL']

// var newSize = size.unshift('X','0','P')
// console.log(size);

// Q4 

// var size = ['S','M','XL','XXL','XXXL']

// var newSize = size.splice(2,0,'L')
// console.log(newSize);
// console.log(size);


// Q5

// var size = ['S','M','XL','XXL','XXXL']
// var regSizes = size.slice(0,3)
// console.log(regSizes);

// Q6

// var pet = ["dog",'cat','ox','duck','frog'];
// var newPets = pet.splice(1,4,'monkey','donkey')
// console.log(pet);


// Q7

// var pet = ["dog",'cat','ox','duck','frog'];
// var newPets = pet.splice(1,2)
// console.log(pet);


// Q8

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5); 
// console.log(reducedPets);


// ------- CHAPTER 14-16 -------- //


// Q1 


// var futureStudents = [];

// // Q2 

// var futureStudentArr = {};

// // Q3 

// var strigArr = ['ali','saad','khan'];
// console.log(strigArr);

// // Q4

// var numberArr = [1,299,244,102,999]
// console.log(numberArr);

// // Q5 

// var boleanArr = [true,false];
// console.log(boleanArr);

// // Q6 

// var mixArr = ['ali',true,9210,'saad',false,102]
// console.log(mixArr);


// Q9A 
// var colourArr = ['pink','blue','dark','white','black','yellow'];
// var newColour = prompt('which colour you want to add');

// if(newColour != ''){
//     colourArr.unshift(newColour)
// }

// document.write(colourArr)

// 9B
// var colourArr = ['pink','blue','dark','white','black','yellow'];
// var newColour = prompt('which colour you want to add at the end');

// if(newColour != ''){
//     colourArr.push(newColour)
// }

// document.write(colourArr)


// 9C
// var newColours = ['dark purple','green','pink','red'];

// var updateColours = newColours.unshift('dark green','blue')
// document.write(newColours)

// 9D 

// var newColours = ['dark purple','green','pink','red'];

// var removeColour = newColours.shift();
// document.write(newColours)

// 9E 

// var newColours = ['dark purple','green','pink','red'];

// var lastColour = newColours.pop();
// document.write(newColours)


// 9F 



// Q10 

// var numberSorts = [320,190,100,250,80,12,36]
// var sortNum = numberSorts.sort();
// console.log(sortNum);
// console.log(numberSorts);

// Q11 

// var cityName = ['krachi','lohore','islamabad','hydrabad','sukkar']

// var copyName = cityName.slice(0,3)
// document.write('City List ' + "</br>" , cityName + "</br>")
// document.write('Select City ' + "</br>" , copyName)


// Q12

// var arr = ['this','is','my','cat']
// var string = arr.join(' ')
// console.log(string);


// Q13

// var arry =  ['monitor','lcd', 'mouse','headset','mousepad']
// var revArr = arry.reverse()
// document.write(arry);

// Q15

var mobileArr = ['iphone', 'samsume', 'motoe4', 'nokia']

document.write('<label for="phoneSelect">Select a Phone Manufacturer:</label>' + "</br>");
document.write('<select id="phoneSelect">');
for (i = 0; i < mobileArr.length; i++) {
    document.write('<option value="' + mobileArr[i] + '">' + mobileArr[i] + '</option>');

}