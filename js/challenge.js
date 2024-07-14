// choosing h1 that has the number
const counterEl = document.getElementById("counter"); 

let count = 0;
let intervalId = null;
let isPaused = false;

// ............counter...........................
function incrementCounter() {
  count++;
  counterEl.textContent = count;
}

//................ Start timer..................
function startTimer() {
  intervalId = setInterval(incrementCounter, 1000);
}
startTimer();

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");


plusButton.addEventListener("click", handlePlusClick);
minusButton.addEventListener("click", handleMinusClick);
likeButton.addEventListener("click", handleLikeClick);
pauseButton.addEventListener("click", () => {
  if (!isPaused) {
    pauseCounter();
  } else {
    resumeCounter();
  }
});



// .........plus.......................
function handlePlusClick() {
    count++;
    counterEl.textContent = count;
  }



// ........minus.........................  
function handleMinusClick() {
    if (count > 0) {
      count--;
      counterEl.textContent = count;
    }
  }
    //  number will only minus if counter is above 0


// .........like.................
function handleLikeClick() {
    const likeSpan = document.createElement("span");
    likeSpan.textContent = " (1 Like)";
    counterEl.appendChild(likeSpan);
  }

  
//........pause and resume....................................
// pause
function pauseCounter() {
    clearInterval(intervalId);
    plusButton.setAttribute("disabled", true);   //  <button id="plus" disabled="true"></button>
    minusButton.setAttribute("disabled", true);
    pauseButton.textContent = "Resume";
    isPaused = true; 
  }

  //resume  
  function resumeCounter() {
    intervalId = setInterval(incrementCounter, 1000); //when resumed the counter starts counting after 1 second
    plusButton.removeAttribute("disabled");
    minusButton.removeAttribute("disabled");
    pauseButton.textContent = "Pause";
    isPaused = false;
  } 


//..........comments..................................................
commentForm.addEventListener("submit", handleCommentSubmit);

function handleCommentSubmit(event) {
    event.preventDefault();

    const commentInput = document.getElementById("comment-input");

    const comment = commentInput.value;

    if (comment) {
      const commentElement = document.createElement("p");
      commentElement.textContent = comment;

      const commentsContainer = document.getElementById("list");
      commentsContainer.appendChild(commentElement);
      commentInput.value = "";
    }
  }

