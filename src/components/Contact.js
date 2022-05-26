import '../style.css';

function Contact() {
  return (
    <div className="Main">
        <h1>Contact</h1>
        <form id="contact-form" method="POST" enctype="multipart/form-data">
            <label id="fname">Nom/Pseudo:</label><br/>
            <input type="text" name="name" id="name" required/><br/>
            <label id="fmail">Mail:</label><br/>
            <input type="email" name="email" id="email" required/><br/>
            <label id="fsujet">Sujet:</label><br/>
            <input type="text" name="subject" id="subject" required/><br/>
            <label id="fmessage">Message:</label><br/>
            <textarea name="message" id="message" rows="3" required></textarea><br/>
            <input type="submit" value="Envoyer" id="bSend"/>
        </form>
    </div>
  );
}

export default Contact;