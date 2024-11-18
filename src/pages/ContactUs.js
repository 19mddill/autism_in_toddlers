import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const ContactUs = () => {
  return (
    <DefaultLayout>
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">We'd love to hear from you! Reach out with your queries or feedback.</p>
      <div className="d-flex justify-content-center mt-4">
        <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-control" rows="5" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContactUs;
