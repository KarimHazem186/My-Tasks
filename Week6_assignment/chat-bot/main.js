const sendChatBtn = document.querySelector(".input-group span")
const chatInput = document.querySelector(".input-group input")
const chatbox = document.querySelector(".chatbox")
const chatbotToggler = document.querySelector(".chatbot-toggler")
const chatbotCloseBtn = document.querySelector(".close-btn")
let userMessage;
const API_KEY = ""
const inputInitHeight = chatInput.scrollHeight
const createChatLi = (message,className)=> {
    // Create a chat <li> element with the passed message and className
    const chatLi = document.createElement("li");
    console.log(chatLi)
    chatLi.classList.add("chat",className)
    console.log(chatLi)
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : ` <span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = async (incomingChatLi) => {
    // const API_URL = await "https://api.openai.com/v1/chat/completions";
   
    // const messageElement = incomingChatLi.querySelector("p")

    // const requestOptions = {
    //     method:"POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${API_KEY}`
    //     },
    //     body: JSON.stringify({
    //         model:"gpt-3.5-turbo",
    //         message:[{role:"user",content: userMessage}]
    //     })
    // }

    // // Send POST request to API get response
    // await fetch(API_URL, requestOptions).then(res=>res.json()).then(data=>{
    //     console.log(data);
    //     messageElement.textContent = data.choices[0].message.content;
    // }).catch((error)=> {
    //     messageElement.classList.add("error")
    //     console.log(error)
    //     messageElement.textContent = "Oops! Something went wrong. Please try again.";

    // }).finally(()=>{
    //     chatbox.scrollTo(0,chatbox.scrollHeight)
    // })

    async function fetchWithRetry(url, options = {}, retries = 3, backoff = 3000) {
        for (let i = 0; i < retries; i++) {
            const response = await fetch(url, options);
            if (response.status !== 429) {
                return response;
            }
            const retryAfter = response.headers.get('Retry-After');
            const delay = retryAfter ? parseInt(retryAfter) * 1000 : backoff;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        throw new Error('Max retries reached');
    }
    
    const url = 'https://api.openai.com/v1/chat/completions';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-4-turbo',
            messages: [{ role: 'user', content: 'Hello!' }]
        })
    };
    
    fetchWithRetry(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}



const handleChat=()=> {
    userMessage = chatInput.value.trim();
    chatInput.value =""
    console.log(userMessage);
    if(!userMessage) return;
    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage,"outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight)
    setTimeout(()=>{
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...","incoming");
        chatbox.appendChild(createChatLi("Thinking...","incoming"));
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight)
        generateResponse(incomingChatLi);
    },6000)
}

chatInput.addEventListener("input",()=>{
    // Adjust the height of the input based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
})

chatInput.addEventListener("keydown",(e)=>{
//  If Enter key is pressed without shift key and the window
//  width is greater than 800px, handle the chat 
    if(e.key==="Enter"&&!e.shiftJey&&window.innerWidth>800) {
        e.preventDefault();
        handleChat()
    }
})


chatbotToggler.addEventListener("click",()=>document.body.classList.toggle("show-chatbot"))

chatbotCloseBtn.addEventListener("click",()=>document.body.classList.remove("show-chatbot"))

sendChatBtn.addEventListener("click",handleChat);


// document.getElementById("inp_text").focus();
//         document.getElementsByTagName("body")[0].addEventListener("keypress", function (e) {
//             if (e.key == "Enter") {
//                 send();
//             }
//         });
//         document.getElementById("send").addEventListener("click", send);
//         function send() {

//             var text = document.getElementById("inp_text").value;
//             if (text == "") {
//             }
//             else {

//                 var request = document.createElement("div");
//                 request.className = "request";
//                 request.innerText = text;

//                 document.getElementsByClassName("main")[0].appendChild(request);
//                 document.getElementById("inp_text").value = "";
                
//                 fetch(`https://api.monkedev.com/fun/chat?msg=${text}`)
//                 .then(response => response.json())
//                 .then(function(data){
             
//                     var response = document.createElement("div");
//                     response.className = "response";
//                     response.innerText = data.response
                    
//                     setTimeout(function () {
//                         document.getElementsByClassName("main")[0].appendChild(response);
//                         var a = document.getElementsByClassName("main")[0].scrollHeight;
//                         document.getElementsByClassName("main")[0].scrollTop = a+100 ;
//                     }, 1000)
//                 });
//                 }
//             var a = document.getElementsByClassName("main")[0].scrollHeight;
//             document.getElementsByClassName("main")[0].scrollTop = a ;
//         };
