import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
  e.preventDefault();

  fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      }
    })
    .catch(err => console.error("Error submitting contact form:", err));
};


  return (
    <section id="contact" style={{ padding: "50px" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Your Email" onChange={handleChange} /><br />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
export default Contact;
