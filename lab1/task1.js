function ageCheck(age){
    if(age >= 0 && age <= 2){
        console.log("Младенец")
    }
    else if(age >= 3 && age <= 13){
        console.log("Ребенок")
    }
    else if(age >= 14 && age <= 19){
        console.log("Подросток")
    }
    else if(age >= 20 && age <= 65){
        console.log("Взрослый")
    }
    else if(age >= 65){
        console.log("Пожилой")
    }

    else{
        console.log("Каким образом???")
    }
}

let age = 1
let age2 = 5
let age3 = 17
let age4 = 20
let age5 = 65

ageCheck(age)
ageCheck(age2)
ageCheck(age3)
ageCheck(age4)
ageCheck(age5)

