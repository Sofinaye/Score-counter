const btn1 = document.querySelector("#p1btn")
const btn2 = document.querySelector("#p2btn")
const p1Select = document.querySelector("#p1Score")
const p2Select = document.querySelector("#p2Score")
const btnReset = document.querySelector("#reset")
const wSS = document.querySelector("#round")
let p1Display = 0;
let p2Display = 0;
let winningPoint=3;
let isGameOver = false;
function reset(){
  isGameOver = false;
  p1Display = 0;
  p2Display = 0;
  p1Select.textContent = p1Display;
  p2Select.innerText = p2Display;
  p1btn.disabled = false;
  p2btn.disabled = false;
  p1Select.classList.remove('has-text-success', 'has-text-danger')
  p2Select.classList.remove('has-text-success', 'has-text-danger')
}

btn1.addEventListener("click",()=>{
  if(!isGameOver){
    p1Display +=1;
    if(p1Display === winningPoint){
      isGameOver = true;
      p1Select.classList.add("has-text-success")
      p2Select.classList.add("has-text-danger")
      p1btn.disabled = true;
      p2btn.disabled = true;
    }  
  p1Select.textContent= p1Display
}
  

})
btn2.addEventListener("click", ()=>{
  if(!isGameOver){
    p2Display +=1;
    if(p2Display === winningPoint){
      isGameOver = true;
      p2Select.classList.add("has-text-success")
      p1Select.classList.add("has-text-danger")
      p1btn.disabled = true;
      p2btn.disabled = true;
    
    }  
  p2Select.textContent= p2Display
  }
})
btnReset.addEventListener('click' ,reset)
wSS.addEventListener("change", (e)=>{
  winningPoint = parseInt(e.target.value);
  reset();

})