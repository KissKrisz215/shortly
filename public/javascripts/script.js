async function copyFunc(val){
    const copyText = document.getElementById("link");
    try{
        await navigator.clipboard.writeText(copyText.innerHTML);
        changeBtn();
    }catch(err){
        console.error("Failed to copy", err);
    }
}

async function changeBtn(){
    try{
        const copyBtn = document.querySelector('.copyButton');
        const link = document.getElementById("links");
        copyBtn.innerHTML = "Copied";
        copyBtn.classList.add("bg-secondary");
        setTimeout(() => {
         link.remove();
        },5000)
    }catch(err){
        console.error("There was an error", err)
    }
}