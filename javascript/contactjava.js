document.getElementById("contactForm").addEventListener("submit", function(event) 
{
    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const query = document.getElementById("query").value.trim();
    const phonePattern = /^[0-9\s\-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 


    if (name ==="") 
    {
        alert("Please enter your name.");
        return;
    }
    if (!phonePattern.test(phone))
    {
        alert("Please enter a valid phone number (digits, spaces, or dashes only).");
        return;
    }
    if (!emailPattern.test(email))
    {
        alert("Please enter a valid email address ");
        return;
    }
    if(query=== "") 
    {
        alert("Please enter your query.");
        return;
    }
    alert("Your query has been delivered!");
    
});