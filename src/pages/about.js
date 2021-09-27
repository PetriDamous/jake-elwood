import React from "react";

import Layout from "../component/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <section class="page-intro">
        <div class="container flow-content">
          <h1 class="highlight-header">About us.</h1>
          <p>
            We’re two brothers from Chicago. We can help you with SEO, SEM,
            content marketing and whatever else.
          </p>
        </div>
        <div class="divider"></div>
      </section>

      <section class="about container split">
        <div class="about_image">
          <img
            src="img/contact.jpg"
            alt="picture of plants and mail boxes"
            class="img-layers"
          />
        </div>
        <div class="about-info">
          <h2>
            We're really great guys
            <div class="divider"></div>
          </h2>
          <p>
            We grew up in downtown Chicago, and we used to play in a band. Jake
            loves fried chicken, and Elwood loves dry white toast.
          </p>
          <p>
            While the band didn't make it, the hard work we put in trying to
            promote it sure did. Like a lot of people, we needed a website, and
            we needed to rank. The "experts" didn't seem to know what they were
            talking about, so we figured it out on our own.
          </p>
          <h2>
            We can do all sorts of great stuff
            <div class="divider"></div>
          </h2>

          <p>
            Honestly most people in this industry seem to be full of crap. We
            don't care what you've heard, or what others have told you, we get
            results and at the end of the day, what else matters?
          </p>
          <p>
            So sure, maybe we're a bit different from what you'd expect, but if
            you want to rank, market, and build your way to the top, we're the
            brothers for you.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
