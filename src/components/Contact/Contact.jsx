import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.mainContact}>
        <h2>Feel Free To Contact Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.5469049942348!2d67.08908028983126!3d24.92567760000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60a0781265%3A0x2befaba123014ab1!2sSaylani%20Mass%20IT%20Training%20(SMIT)!5e0!3m2!1sen!2s!4v1695669195373!5m2!1sen!2s"
          title="Example Website"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.container}>
          <div className={styles.contactForm}>
            <form>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                name="Message"
                placeholder="Enter your message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
