import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './contact.css';
import photo2 from '../../../assets/photo2.jpg';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9lxamql',
        'template_p2q66ye',
        e.target,
        'apSRHYZU7LZihPeib'
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'تم الإرسال!',
          text: 'تم إرسال بياناتك بنجاح.',
          confirmButtonText: 'تمام',
        });
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'خطأ!',
          text: 'تعذر إرسال البيانات. حاول مرة تانية.',
          confirmButtonText: 'تمام',
        });
      });
  };

  return (
    <>
    <section id="contact">

      <h1 className="logo" style={{ textAlign: 'center' }}>
        Contact us
      </h1>

      <div className="form-container">
        <div className="form-image">
          <img src={photo2} />
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="اكتب اسمك"
            required
            />
          <input
            type="text"
            name="phone"
            placeholder="اكتب رقم الواتس"
            required
            />
          <input type="email" name="email" placeholder="اكتب ايميلك" required />

          <button type="submit">إرسال</button>
        </form>
      </div>
            </section>
    </>
  );
}

export default Contact;
