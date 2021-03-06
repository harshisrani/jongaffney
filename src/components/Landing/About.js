import React from "react"

const About = () => {
  return (
    <section className="landing-about" id="landing-about">
      <article className="landing-about__content">
        <h1 className="h1-underline">What I do</h1>
        <p>
          I am a software developer specialising in Web development. I build
          fullstack web applications written with a <strong>React</strong>{" "}
          frontend and a variety of backends depending on the need of the
          client. These include:
          <strong> Django</strong>, <strong>Flask</strong>,
          <strong> Laravel</strong>, <strong>Javalin</strong> and
          <strong> Node</strong>, with the option of hosting on{" "}
          <strong>AWS</strong>. My recent focus has been creating{" "}
          <strong>JAM stack</strong> web applications due to the flexability and
          speed they offer.
        </p>
        {/* <p>
          My development focus is on web accessibility. If you are creating your
          sites to work on Internet Explorer{" "}
          <i>
            (which is around <strong>3%</strong> of web users in Australia)
          </i>{" "}
          but are not making your website accessible{" "}
          <i>
            (around <strong>20%</strong> of Australians have difficulty using a
            website that has not been made accessible)
          </i>{" "}
          you are missing out on a market.{" "}
        </p>
        <p className="landing-about__content-tagLine">
          <strong>
            <i>
              Why wouldn’t you want everyone to be able to enjoy the content you
              have created?
            </i>
          </strong>
        </p> */}
      </article>
    </section>
  )
}
export default About
