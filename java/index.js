let dayEle =document.querySelector(".day")
let hoursEle =document.querySelector(".hours")
let minsEle =document.querySelector(".mins")
let secsEle =document.querySelector(".secs")



let sidBarPosistion = $ (".sideBar-content").innerWidth();
$("#sideBar").animate({left:-sidBarPosistion},0)





$("#sideBar p").click(function(){
console.log($("#sideBar").css("left"))
    let sidBarPosistion = $ (".sideBar-content").innerWidth();

if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate({left:-sidBarPosistion},700)

    
}else{
    $("#sideBar").animate({left:"0px"},750)

}


})




$("#start-one").click(function(){
    $("#content-senger-one").slideToggle(500);
})
$("#start-two").click(function(){
    $("#content-senger-two").slideToggle(500);
})
$("#start-three").click(function(){
    $("#content-senger-three").slideToggle(500);
})
$("#start-four").click(function(){
    $("#content-senger-four").slideToggle(500);
})



// let date =new Date()
// let day = date.getDate()
// let hours = date.getHours()
// let mins = date.getMinutes()
// let secs = date.getSeconds()

// console.log(day)

// dayEle.innerHTML =`${day-70}`
// hoursEle.innerHTML =`${hours-24}`
// minsEle.innerHTML =`${mins-60}`
// secsEle.innerHTML =`${secs-60}`


setInterval(function(){
    let date =new Date()
    let day = date.getDate()
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    
    console.log(day)
    
    dayEle.innerHTML =`${day-70} D`
    hoursEle.innerHTML =`${hours-24} H`
    minsEle.innerHTML =`${mins-60} M`
    secsEle.innerHTML =`${secs-60} S`
},1)