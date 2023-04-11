async function copyFunc(val){
    const copyText = document.getElementById("link");
    try{
        await navigator.clipboard.writeText(copyText.innerHTML);
        changeBtn();
    }catch(err){
        console.error("Failed to copy", err);
    }
}