import React from "react";

import Layout from "../component/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <section class="page-intro">
        <div class="container flow-content">
          <h1 class="highlight-header">Contact.</h1>
          <p>
            Let us know how we can help you need and we’ll drive over to your
            place in our Bluesmobile the following day to discuss the deal.
          </p>
          <div class="divider"></div>
        </div>
      </section>

      <section class="contact">
        <div class="container split">
          <div class="contact__instructions flow-content">
            <div class="stack">
              <img
                src="img/contact.jpg"
                alt="picture of plants and mail boxes"
                class="img-layers"
              />
            </div>

            <h2>Getting in touch with us</h2>
            <div class="divider"></div>
            <p>
              You can either use the form or
              <span class="bold">
                <a href="#">send us an email</a>
              </span>
              . I'll get back in touch with you as soon as possible!
            </p>
          </div>

          <form action="" class="form flow-content">
            <div class="form__user-info">
              <div>
                <label for="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="example@domain.com"
                />
              </div>
            </div>

            <div class="form__message">
              <div>
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message goes here."
                ></textarea>
              </div>
              <submit class="btn">send</submit>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
