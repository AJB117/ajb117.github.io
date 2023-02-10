import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"

const Interests = () => {
  const [showBio, setShowBio] = React.useState(false)
  const showOrHideBioText = showBio ? "Hide" : "Show"

  return (
    <section className="interests">
      <section>
        I just graduated from the{" "}
        <a href="https://nd.edu">University of Notre Dame </a>
        with degrees in <a href="http://cse.nd.edu/">CS</a> and{" "}
        <a href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/">
          philosophy.
        </a>{" "}
        {/* . I plan to apply to AI/ML PhD programs this fall.<p></p> */}
        <section className="interests">
          {" "}
          <p>
            My interests are in graph ML and its applications. I am currently
            applying to AI/ML PhD programs.
            {/* <p>
              <button
                style={{
                  background: "none",
                  border: "none",
                  margin: "0",
                  padding: "0",
                  cursor: "pointer",
                }}
                onClick={() => setShowBio(!showBio)}
              >
                <span style={{ fontStyle: "italic" }}>
                  {showOrHideBioText} bio
                </span>
              </button>
              {showBio ? (
                <div>
                  At first, I wanted to become a professional philosopher, 
                  so I read a lot of philosophy of math and logic. Those plans
                  changed after my second year of college when I learned web and
                  app development and thought I wanted to be a software
                  engineer. In my final year, I realized I wanted to pursue a
                  research career in AI/ML.
                </div>
              ) : null}
            </p> */}
          </p>{" "}
          <p>I also have some experience in web development.</p>
        </section>
      </section>
    </section>
  )
}

export default Interests
