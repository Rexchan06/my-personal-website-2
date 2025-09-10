// Mobile hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
// Wait for the page to fully load before running JavaScript
    // Get references to the hamburger button and navigation menu
    const hamburger = document.querySelector('.hamburger'); 
    const navLinks = document.querySelector('.nav-links');   
    
    // Add click event listener to hamburger button
    hamburger.addEventListener('click', function() {         
        navLinks.classList.toggle('active');                 
    });
    
    // Close mobile menu when clicking on a navigation link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');  // Hide menu after clicking a link
        });
    });
});

/* ===== CONTACT FORM EMAIL HANDLER ===== */
function sendEmail(event) {
    event.preventDefault();  
    
    const form = event.target;           
    const name = form.name.value;        
    const email = form.email.value;      
    const message = form.message.value;  
    
    // Create structured email subject and body
    const subject = `New Contact Form Submission from ${name}`;
    const body = `Hi there,

You have received a new message from your website contact form.

Contact Details:
-----------------------------------------------------------------------------------------------
Name: ${name}
Email: ${email}

Message:
-----------------------------------------------------------------------------------------------
${message}

-----------------------------------------------------------------------------------------------

Please reply directly to: ${email}

Best regards,
Your Website Contact Form`;
    
    // Create mailto URL with encoded subject and body
    const mailtoURL = `mailto:rexchan06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoURL, '_blank');  
    
    // Optional: Show success message
    alert('Thank you for your message! Your email client should open now.');
}