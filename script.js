let intro = document.getElementById("intro");
let my_name_intro = document.getElementById("my_name_intro");
let my_name = document.getElementById("name");
let bio = document.getElementById("bio");
let previous_button = document.getElementById("previous_button")
let next_button = document.getElementById("next_button")
let profile_pic = document.getElementById("profile_picture");

let original_name_intro = my_name_intro.innerText;
let original_name = my_name.innerText;

function changeText(index) {
    if (index == 1) { // previous button is clicked
        my_name_intro.innerText = original_name_intro;
        my_name.innerText = original_name;
        bio.innerText = "";
        next_button.style.display = "block";
        previous_button.style.display = "none";

    }
    else { // next button is clicked
        my_name_intro.innerText = "";
        my_name.innerText = "";
        let text = "I am a Junior II Computer Science student at the American University of Sharjah. I describe myself as an ambitious person who yearns to contribute in making the world better. I'm a hardworking, tea-motivated, cat-loving, puzzle-solver, who enjoys the excitement of challenging academic and non-academic situations" 
        bio.innerText = text
        previous_button.style.display = "block";
        next_button.style.display = "none";
    }
}

// Change screen to "About Me" Slide and go back to "Home" Slide
next_button.addEventListener("click", () => {
    changeText(2)});
previous_button.addEventListener("click", () => {
    changeText(1);
});

// Zoom and Unzoom When Profile Picture Is Hovered Over
profile_pic.addEventListener("mouseover", () => {
    profile_pic.style.scale = 1.2;
});

profile_pic.addEventListener("mouseout", () => {
    profile_pic.style.scale = 1.0;
});

// When about_tab in navbar clicked, call ChangeText() function
let about_tab = document.getElementById("about-tab")
about_tab.addEventListener("click", changeText);

