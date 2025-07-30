const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros)

 //console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

 //NOTE here push did not murge the array isne poore array ko ek single element ki tarah marvelheros mei add krdia 






// console.log(marvel_heros[3][1]);//flash

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



//note  push works on exisitng arr but cocatenate donot change orig array


const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);//arrays merged to 1 now 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]


const real_another_array1 = another_array.flat(1)
//console.log(real_another_array1);//[1,2, 3, 4, 5, 6, 7, 6, 7,[4,5]]
//flat complex array ko simle krta h till gove depth here infinity to poore ko krdia solbe 





//console.log(Array.isArray("Hitesh"))//false
//console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
//console.log(Array.from("123"))//['1','2','3']
//console.log(Array.from({name: "hitesh"})) //[]// interesting
//here op is [] bcoz it didnt know ki keys ka array bnana h ya value ka 
//from basically array mei conv krna h input ko

let score1 = 100
let score2 = 200
let score3 = 300

 console.log(Array.of(score1, score2, score3));//[100,200,300]