import * as React from "react";

import Layout from "../component/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <section className="intro">
        <div className="container">
          <div className="intro__cta flow-content">
            <h1>
              The only marketing agency on
              <span className="txt-highlight">a mission from God,</span> fully
              dedicated to increase your web traffic.
            </h1>
            <p>
              We’re two brothers from Chicago that are trying to pay back our
              debt. We can help you with
              <span className="bold-inverse">
                SEO, SEM content marketing
              </span>{" "}
              and whatever else.
            </p>
            <a className="btn" href="contact.html">
              contact us
            </a>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container split">
          <div className="info flow-content">
            <h2>
              About Us
              <div className="divider"></div>
            </h2>
            <p>
              We grew up in downtown Chicago, and we used to play in a band.
              <span className="bold">Jake loves fried chicken</span>, and
              <span className="bold">Elwood loves dry white toast.</span>
            </p>
          </div>
          <div className="info flow-content">
            <h2>
              Our skills
              <div className="divider"></div>
            </h2>
            <p>
              Elwood is an expert in
              <span className="bold">
                SEO, SEM, and driving from the police.
              </span>
              Jake is our <span className="bold">social media specialist,</span>{" "}
              and he has an amazing voice.
            </p>
          </div>
          <div className="info flow-content">
            <h2>
              Get in touch
              <div className="divider"></div>
            </h2>
            <p>
              Send us an email with some info about what help you need and
              <span className="bold">we’ll drive over to your place</span> in
              our Bluesmobile the following day to discuss the deal.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
