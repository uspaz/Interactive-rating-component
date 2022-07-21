let container = document.getElementById("container");
let value = document.getElementsByClassName("btn");
let rating = 0;

for (let i = 0; i < 5; i++) {
  value[i].addEventListener("click", () => {
    rating = value[i].attributes[1].value;
  })
}
document.getElementById("submit").addEventListener("click", () =>{
  container.innerHTML = 
`
  <div class="form details">
    <img src="./images/illustration-thank-you.svg" alt="agradecimiento" />
    <p class="score">You selected ${rating} out of 5</p>
    <h1 class="title">Thank you!</h1>
    <p class="text">We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!</p>
  </div>
`;
});



