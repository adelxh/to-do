let saveData = () => {
    const input = document.querySelector("li"); 
    
        const date = new Date().toLocaleDateString("en-US");
        let data = 'Your plan for today at ' + date + ': is ' + input; 

    

    const texttoBLOB = new Blob([data], { type: 'text/plain'}); 
    const filename = 'data.txt'; 

    let newLink = document.createElement('a'); 
    newLink.download = filename; 

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(texttoBLOB); 
    }
    else {
        newLink.href = window.URL.createObjectURL(texttoBLOB); 
        newLink.style.display="none"; 
        document.body.appendChild(newLink); 
    }
    newLink.click();

    console.log(newLink);

}