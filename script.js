const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit");
const displaydata = document.querySelector("#display-data");
const dicecontainer = document.querySelector("#dice-container");
const dice = document.querySelector("#dice");
const sum = document.querySelector("#sum");
let main_name, email, userName;
let image = 1;
let main_sum = 0;
let rolls = 0;
let chances = 2;


// Display the form on clicking Image-1

img1.addEventListener("click", function () {
    if (image === 1) {
        form.style.display = "block";
        img1.style.pointerEvents = "none";
    }
})

// Functionality on clicking the Submit Button

form.addEventListener("submit", function (event) {
    event.preventDefault();
    main_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    userName = document.getElementById("username").value;
    localStorage.setItem("name", main_name);
    localStorage.setItem("userName", userName);
    form.style.display = "none";
    img1.style.pointerEvents = "none";
    image++;
})

// Functionality on clicking the Image-2

img2.addEventListener("click", function () {
    if (image === 2) {
        // form.style.display = "none";
        displaydata.style.display = "block";
        document.getElementById("data-name").innerHTML = localStorage.getItem("name");
        document.getElementById("data-username").innerHTML = localStorage.getItem("userName");
        this.style.pointerEvents = "none";
        image++
    }
})

// Functionality on clicking Image-3

img3.addEventListener("click", function rolldice() {
    if (image === 3) {
        dicecontainer.style.display = "block";
        displaydata.style.display = "none";
        img3.style.pointerEvents = "none";
    }
})

// Functionality on clicking the Dice(clicking the dice thrice and adding the values to ensure that we can access the Fourth image)

dice.addEventListener("click", function () {
    if(rolls < 3) {
        let num = Math.floor(Math.random() * 6) + 1;
        main_sum = main_sum + num;
        rolls++;
        sum.innerHTML = "Sum: " + main_sum;
        if( rolls === 3){
            if( main_sum >10){
                sum.innerHTML = "Your Sum is " + main_sum + " Which is Greater than 10, So You can go for Fourth Image";
                image++;
                dice.style.display = "none";
                dice.style.pointerEvents = "none";
                        } else{
                // chances--;
                img3.addEventListener("click", function rolldice() {
                    if (image === 3) {
                        dicecontainer.style.display = "block";
                        displaydata.style.display = "none";
                        img3.style.pointerEvents = "none";
                    }
                })
                
            }         
        }
    }
})

// Functionality on clicking Image-4

img4.addEventListener("click", function(){
    if (image === 4) {
        dicecontainer.style.display = "none";
        document.getElementById("couponcode").style.display = "block";
        img4.style.pointerEvents = "none";
        document.getElementById("coupon").innerHTML = coupon_generator();
    }
})

// Coupon Generating with a function

function coupon_generator(){
    let fnl_coupon = '';
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for( let i=0; i< 11; i++){
        fnl_coupon = fnl_coupon + chars.charAt(Math.floor(Math.random() * chars.length))
    };
    return fnl_coupon;
}


// @CODED BY MANASH FOR ACCIOJOB MODULE TEST FEBRUARY








