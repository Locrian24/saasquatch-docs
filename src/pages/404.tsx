import React from "react";
import Meta from "../components/Meta";

const entry = {
  permalink: false,
  template: "fullpage.html",
  category: "error"
};
export default () => (
  <>
    <Meta title="Page Not Found" />
    <section className="page">
      <div className="text-center">
        <h1>Page Not Found</h1>
        <h3 className="visible-desktop" style={{paddingTop:"43px"}}>
          Looks like you found the missing link!
        </h3>
        <h3 className="hidden-desktop">
          Looks like you found the missing link!
        </h3>
        <p className="lead">
          We couldn't find a page for{" "}
          <b>
            <span id="js-location-path"></span>
          </b>
          .
        </p>

        <img
          src="https://d2vi0firws6omr.cloudfront.net/img/http-404.jpg"
          style={{maxWidth: "500px", margin: "0 auto"}}
          alt="The Missing Link 404 Page"
        />

        <p className="text-center">
          <a href="/">Return to Help Center Home</a>
        </p>
        <br />
        <br />
        <p>
          <blockquote>
            Please excuse the mess&mdash;We are in the process of making our
            documentation even better. If you cannot find the information you're
            looking for, let our{" "}
            <a
              href="mailto:support@saasquat.ch?Subject=Searching%20For%20Article"
              target="_top"
            >
              Success team
            </a>{" "}
            know, and they will be more than happy to provide!
          </blockquote>
        </p>
      </div>
    </section>
  </>
);
