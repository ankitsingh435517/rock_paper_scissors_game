// // welcome to rock paper scissors game
// // run the program to get started










// ui code ----------------------------------------->

// create a div called root-div
let mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "root-div");

// select body element
let body = document.querySelector("body");
body.appendChild(mainDiv);

// change bgColor of body ele
body.style.backgroundColor = "#0099cc";

// create a h1 heading
let h1 = document.createElement("h1");

h1.textContent = "Rock paper & scissors";

// create a container div for heading 
let div = document.createElement('div');
// append it to container div in body
div.appendChild(h1);

// appendcontainer div to mainDiv(root)
mainDiv.appendChild(div);

// style first div to center
div.style.cssText =
  "display: flex; justify-content: center; color: white; font-family: monospace; font-size: 19px";

  let div_2 = document.createElement('div');

  let button = document.createElement('button');
  button.style.cssText = `background: white; 
                          padding: 8px 26px; 
                          border-style: none;
                          font-weight: bold;
                          border-radius: 4px;
                          cursor: pointer`;
  button.textContent = 'Play';

  div_2.appendChild(button);

  mainDiv.appendChild(div_2);

  div_2.style.cssText = `display: flex; justify-content: center`;


//   create a big div for game ui

let gameDiv = document.createElement('div');

let h1_Div = document.createElement('div');

let h1_in_div = document.createElement('h1');

h1_in_div.textContent = 'Click Play button above';





h1_in_div.style.cssText = `color: black;
                           font-family: monospace;
                           font-size: 21px;
                           font-weight: light;
                           margin-top: 2rem`

// append h1_in_div in h1_Div                           
h1_Div.appendChild(h1_in_div);

h1_Div.style.cssText += `display: flex;
                         justify-content:center;` 

// append h1_Div in gameDiv
gameDiv.appendChild(h1_Div);

gameDiv.style.cssText += `height: 400px;
                          width: 900px;
                          background: white;`

// create a game div container
let gameDiv_container = document.createElement('div');

// append gameDiv in the gameDiv_container
gameDiv_container.appendChild(gameDiv);


                // append gameDiv_cotainer to body
                body.appendChild(gameDiv_container);


gameDiv_container.style.cssText = `display: flex;
                                   justify-content: center;
                                   margin-top: 36px;`;

// options of rock, paper, scissors
let options_Div = document.createElement('div');


       //rock div

// rock option div contains img and title
let rock_Div = document.createElement('div');
rock_Div.setAttribute('data', 'rock');

let img_option_rock = document.createElement('img');

// set attribute for img_option
img_option_rock.setAttribute('src','/img/rock_img.jpg');
img_option_rock.setAttribute('alt','a rock image');
img_option_rock.setAttribute('data', 'rock');
// style img_option
img_option_rock.style.cssText = `height: 100px;
                                 width: 130px;`


// title of options_Div
let optionsTitle_span_rock = document.createElement('span');
optionsTitle_span_rock.setAttribute('data', 'rock');

optionsTitle_span_rock.textContent = 'Rock';

optionsTitle_span_rock.style.cssText = `font-family: sans-serif;
                                   font-size: 13px;
                                   font-weight: bolder;
                                   padding-top: 0.5rem`;

rock_Div.style.cssText += `display: flex;
                           flex-direction: column;
                           align-items: center;
                           cursor:pointer;
                           box-sizing: border-box`
                           

    
// add event listner mouseover on rock_Div to apply transform
rock_Div.addEventListener('mouseover', () => {
    rock_Div.style.cssText += `transform: scale(1.1);
                               border: 1px solid #0099cc;
                               border-radius: 2px;
                               transition: .3s all ease;
                               box-shadow: 0.5px 1.5px gray;
                               `
});

// add event listener mouseleave to remove transform and other properties
rock_Div.addEventListener('mouseleave', () => {
    rock_Div.style.cssText += `transform: scale(1);
                               border: 1px solid white;
                               transition: .3s all ease;
                               box-shadow: 0px 0px white;
                               `
});



//append img_option and optionsTitle_span in rock_Div
rock_Div.appendChild(img_option_rock);
rock_Div.appendChild(optionsTitle_span_rock);

// append rock_Div in options_Div
options_Div.appendChild(rock_Div);



        // paper div

 // paper option div contains img and title
let paper_Div = document.createElement('div');
paper_Div.setAttribute('data', 'paper');

let img_option_paper = document.createElement('img');
img_option_paper.setAttribute('data', 'paper');
// set attribute for img_option
img_option_paper.setAttribute('src','/img/paper_img.jpg');
img_option_paper.setAttribute('alt','a paper image');

// style img_option
img_option_paper.style.cssText = `height: 100px;
                                 width: 130px;`


// title of options_Div
let optionsTitle_span_paper = document.createElement('span');
optionsTitle_span_paper.setAttribute('data', 'paper');
optionsTitle_span_paper.textContent = 'Paper';

optionsTitle_span_paper.style.cssText = `font-family: sans-serif;
                                   font-size: 13px;
                                   font-weight: bolder;
                                   padding-top: 0.5rem`;

paper_Div.style.cssText += `display: flex;
                           flex-direction: column;
                           align-items: center;
                           cursor:pointer;
                           box-sizing: border-box`
 

// add event listner mouseover on paper_Div to apply transform
paper_Div.addEventListener('mouseover', () => {
    paper_Div.style.cssText += `transform: scale(1.1);
                               border: 1px solid #0099cc;
                               border-radius: 2px;
                               transition: .3s all ease;
                               box-shadow: 0.5px 1.5px gray;
                               `
});

// add event listener mouseleave to remove transform and other properties
paper_Div.addEventListener('mouseleave', () => {
    paper_Div.style.cssText += `transform: scale(1);
                               border: 1px solid white;
                               transition: .3s all ease;
                               box-shadow: 0px 0px white;
                               `
});


//append img_option and optionsTitle_span in rock_Div
paper_Div.appendChild(img_option_paper);
paper_Div.appendChild(optionsTitle_span_paper);

// append paper_Div in options_Div
options_Div.appendChild(paper_Div);



        // scissors div

 // scissor option div contains img and title
 let scissor_Div = document.createElement('div');
scissor_Div.setAttribute('data', 'scissor');
 let img_option_scissor = document.createElement('img');
 img_option_scissor.setAttribute('data', 'scissor');
 // set attribute for img_option
 img_option_scissor.setAttribute('src','/img/scissor_img.jpg');
 img_option_scissor.setAttribute('alt','a scissor image');
 
 // style img_option
 img_option_scissor.style.cssText = `height: 100px;
                                     width: 130px;`
 
 
 // title of options_Div
 let optionsTitle_span_scissor = document.createElement('span');
 optionsTitle_span_scissor.setAttribute('data', 'scissor');
 optionsTitle_span_scissor.textContent = 'Scissor';
 
 optionsTitle_span_scissor.style.cssText = `font-family: sans-serif;
                                    font-size: 13px;
                                    font-weight: bolder;
                                    padding-top: 0.5rem`;
 
 scissor_Div.style.cssText += `display: flex;
                               flex-direction: column;
                               align-items: center;
                               cursor:pointer;
                               box-sizing: border-box`
                            

// add event listner mouseover on scissor_Div to apply transform
scissor_Div.addEventListener('mouseover', () => {
    scissor_Div.style.cssText += `transform: scale(1.1);
                               border: 1px solid #0099cc;
                               border-radius: 2px;
                               transition: .3s all ease;
                               box-shadow: 0.5px 1.5px gray;
                               `
});

// add event listener mouseleave to remove transform and other properties
scissor_Div.addEventListener('mouseleave', () => {
    scissor_Div.style.cssText += `transform: scale(1);
                               border: 1px solid white;
                               transition: .3s all ease;
                               box-shadow: 0px 0px white;
                               `
});


 //append img_option and optionsTitle_span in rock_Div
 scissor_Div.appendChild(img_option_scissor);
 scissor_Div.appendChild(optionsTitle_span_scissor);
 
 // append paper_Div in options_Div
 options_Div.appendChild(scissor_Div);
 
 
//  style options div
options_Div.style.cssText += `display: flex;
                              justify-content: space-evenly;
                              margin-top: 2rem;
                              `


 // append options_Div in gameDiv
gameDiv.appendChild(options_Div);


           // options div ends

           
           // scores div---->

let scores_Div_Container = document.createElement('div');           
let scores_Div = document.createElement('div');

let h1_for_scores_Div = document.createElement('h1');

h1_for_scores_Div.textContent = 'YOU vs COM';
h1_for_scores_Div.style.cssText = `font-family: monospace;
                                   font-size: 20px;
                                   font-weight: bold;`


let hr = document.createElement('hr');

let scores_Div_title = document.createElement('div');

scores_Div_title.appendChild(h1_for_scores_Div);

scores_Div_title.appendChild(hr);

scores_Div.appendChild(scores_Div_title);

scores_Div_Container.appendChild(scores_Div);


scores_Div_Container.style.cssText = `display: flex;
                            justify-content: center;
                            margin-top: 1.5rem`



gameDiv.appendChild(scores_Div_Container);

let playerScore = 0, computerScore = 0;
let scores_count_div = document.createElement('div');

let h1_for_scores_count_player = document.createElement('h1');

h1_for_scores_count_player.textContent = playerScore;
h1_for_scores_count_player.style.cssText = 'color: #0099cc;'


let h1_for_scores_count_comp = document.createElement('h1');

h1_for_scores_count_comp.textContent = computerScore;
h1_for_scores_count_comp.style.cssText = 'color: gray'

scores_count_div.appendChild(h1_for_scores_count_player);
scores_count_div.appendChild(h1_for_scores_count_comp)

scores_count_div.style.cssText += `display: flex;
                            justify-content: space-between`

scores_Div.appendChild(scores_count_div);

    // scores div ends -->


    






        
// gamelogic -------------------->
 



function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];

    const random_index =  parseInt(Math.random() * 3);

    return options[random_index];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
       return computerSelection == 'paper' ? `You Lost this round! ${computerSelection} beats ${playerSelection}` : "You won this round!"
    }else if(playerSelection == 'paper'){
       return computerSelection == 'scissors' ? `You Lost this round! ${computerSelection} beats ${playerSelection}` : "You won this round!"
    }else{
        return computerSelection == 'rock' ? `You Lost this round! ${computerSelection} beats ${playerSelection}` : "You won this round!"
    }
}



// play button clicked
let playing = false;
button.addEventListener('click', () => {
    if(playing)return;
    playing = true;
    h1_in_div.textContent = 'your turn choose one';
    startGame(playing);
})

async function startGame(){
     playerScore = 0;
     computerScore = 0;
        
rock_Div.addEventListener('click', (e) => {
    let playerSelection = e.target.getAttribute('data');
    let computerSelection = computerPlay();

    showSelections(playerSelection, computerSelection);

    console.log("you----> ",playerSelection, "comp---->",computerSelection);

    playRound(playerSelection, computerSelection)  == 'You won this round!' ? playerScore += 1 : computerScore += 1;;
    
    console.log(playerScore, computerScore);

    h1_for_scores_count_player.textContent = playerScore;
    h1_for_scores_count_comp.textContent = computerScore;

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            giveVerdict("You won the game!")
        }else{
            giveVerdict('You lost this game!');
        }
        playerScore = 0;
        computerScore = 0;

        return;
    }
    
})

paper_Div.addEventListener('click', (e) => {
    let playerSelection = e.target.getAttribute('data');
    let computerSelection = computerPlay();

    showSelections(playerSelection, computerSelection);

    console.log("you----> ",playerSelection, "comp---->",computerSelection);

    playRound(playerSelection, computerSelection)  == 'You won this round!' ? playerScore += 1 : computerScore += 1;;
    
    console.log(playerScore, computerScore);

    h1_for_scores_count_player.textContent = playerScore;
    h1_for_scores_count_comp.textContent = computerScore;
    
    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            giveVerdict("You won the game!")
        }else{
            giveVerdict('You lost this game!');
        }
        
        playerScore = 0;
        computerScore = 0;
        return;
    }
    
})

scissor_Div.addEventListener('click', (e) => {
    let playerSelection = e.target.getAttribute('data');
    let computerSelection = computerPlay();

    showSelections(playerSelection, computerSelection);

    console.log("you----> ",playerSelection, "comp---->",computerSelection);

    playRound(playerSelection, computerSelection)  == 'You won this round!' ? playerScore += 1 : computerScore += 1;;
    
    console.log(playerScore, computerScore);

    h1_for_scores_count_player.textContent = playerScore;
    h1_for_scores_count_comp.textContent = computerScore;
    
    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            giveVerdict("You won the game!")
        }else{
            giveVerdict('You lost this game!');
        }
        playerScore = 0;
        computerScore = 0;
        
        return;
    }
})

}

    
function showSelections(playerSelection, computerSelection){
    let notify_Selection_div_container = document.createElement('div');

    notify_Selection_div_container.style.cssText = `display: flex;
                                                    justify-content: space-between`
                                                    
    let notify_playerSelection_div = document.createElement('div');

    notify_playerSelection_div.style.cssText = `display: flex;
                                                justify-content: center;
                                                background-color: white;
                                                height: 40px;
                                                width: 160px;
                                                margin-top: 2rem;
                                                margin-left: 14rem`
    let h1_for_notify_ps = document.createElement('h1');

    
    h1_for_notify_ps.style.cssText = `font-size: 12px;
    font-family: monospace;`
    h1_for_notify_ps.textContent = `You selected ${playerSelection}`;
    
    let notify_computerSelection_div = document.createElement('div');

    notify_computerSelection_div.style.cssText = `display: flex;
                                                justify-content: center;
                                                background-color: white;
                                                height: 40px;
                                                width: 160px;
                                                margin-top: 2rem;
                                                margin-right: 14rem;
                                                `
    
    let h1_for_notify_cs = document.createElement('h1');
    
    h1_for_notify_cs.style.cssText = `font-size: 12px;
                                      font-family: monospace;`
    h1_for_notify_cs.textContent = `comp selected ${computerSelection}`;

    notify_playerSelection_div.appendChild(h1_for_notify_ps);
    notify_computerSelection_div.appendChild(h1_for_notify_cs);

    notify_Selection_div_container.appendChild(notify_playerSelection_div);
    notify_Selection_div_container.appendChild(notify_computerSelection_div);

    body.appendChild(notify_Selection_div_container);
    setTimeout(() => {
        body.removeChild(notify_Selection_div_container);
    },2000);
}
     

function giveVerdict(message){
    let verdict_div = document.createElement('div');

    let verdict_h1 = document.createElement('h1');

    verdict_div.style.cssText = `display: flex;
                                 justify-content: center;
                                 background-color: white;
                                 height: 40px;
                                 width: 200px;
                                 margin-top: 2rem;
                                 margin-left: 35rem;`
    verdict_h1.textContent = message;

    verdict_h1.style.cssText = `font-family: monospace;
                                font-size: 18px;`;

    if(message == 'You won the game!'){
        verdict_h1.style.cssText += 'color: green';
    }else{
        verdict_h1.style.cssText += 'color: gray';
    }
    verdict_div.appendChild(verdict_h1);

    body.appendChild(verdict_div);
    setTimeout(() => {
      body.removeChild(verdict_div);
    },5000);
}


//  game logic end ---------------------------->

