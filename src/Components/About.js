import React, { Component } from "react";
import OtherFooter from "./OtherFooter";

export default class About extends Component {
  render() {
    return (
      <>
        <span hidden>{(document.title = "InfoWave - About")}</span>
        <div className="container py-5">
          <div className="">
            <h1 className="mb-4 fw-bold">About Us</h1>
            <p className="lead">
              Welcome to InfoWave, your go-to source for the latest news,
              trending topics, and insightful updates from around the world. We
              are committed to delivering accurate, timely, and relevant news to
              keep you informed and engaged.
            </p>
          </div>

          <div className="my-4">
            <h2 className="my-5 fw-bold">What We Offer</h2>
            <h4 className="fw-bold">1: Latest Updates</h4>
            <p className="my-4">
              Stay ahead with our real-time updates on breaking news, politics,
              technology, business, entertainment, sports, and more.
            </p>

            <h4 className="fw-bold">2: In-depth Analysis</h4>
            <p className="my-4">
              Dive deep into critical issues through our in-depth articles,
              op-eds, and analysis, helping you comprehend the underlying
              factors shaping the headlines.
            </p>

            <h4 className="fw-bold">3: Global Perspective</h4>
            <p className="my-4">
              Our international coverage ensures you are well-informed about
              events and developments happening across continents.
            </p>

            <h4 className="fw-bold">4: Community Engagement</h4>
            <p className="my-4">
              We encourage discussions and opinions from our readers, fostering
              a sense of community and enabling diverse perspectives.
            </p>
          </div>

          <div className="my-5">
            <h2 className="my-4 fw-bold">Our Mission</h2>
            <p>
              At InfoWave, we believe that access to reliable and up-to-date
              information is crucial for making informed decisions in today's
              fast-paced world. Our mission is to provide a platform where news
              seekers can access a diverse range of news, spanning across
              various domains, and gain a comprehensive understanding of current
              affairs.
            </p>
          </div>

          <div className="my-5">
            <h2 className="my-4 fw-bold">Our Team</h2>
            <p>
              Our team at InfoWave comprises dedicated journalists, editors, and
              tech enthusiasts who are passionate about delivering news that
              matters. We adhere to the highest journalistic standards, ensuring
              our readers receive credible and unbiased information.
            </p>
          </div>

          <div className="my-5">
            <h2 className="my-4 fw-bold">Contact Us</h2>
            <p>
              We value your feedback and are here to assist you. If you have any
              inquiries, suggestions, or concerns, please contact us. We
              appreciate your engagement and support!
            </p>
            <p>
              Thank you for choosing InfoWave as your trusted source for news.
            </p>
          </div>
        </div>
        <OtherFooter />
      </>
    );
  }
}
