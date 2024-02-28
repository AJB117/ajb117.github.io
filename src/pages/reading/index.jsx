import React from "react"
import Layout from "../../components/Layout"
import "../../styles/home.css"
import "../../styles/global.css"

const readings = [
  {
    author: "Kazuo Ishiguro",
    title: "Never Let You Go",
    img:
      "https://m.media-amazon.com/images/P/1400078776.01._SCLZZZZZZZ_SX500_.jpg",
    url: "https://en.wikipedia.org/wiki/Never_Let_Me_Go_(novel)",
  },
  {
    author: "Haruki Murakami",
    title: "Norwegian Wood",
    img:
      "data:image/jpeg;base64,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",
    url: "https://en.wikipedia.org/wiki/Norwegian_Wood_(novel)",
  },
  // {
  //   author: "Christopher Lasch",
  //   title: "The Culture of Narcissism",
  //   img:
  //     "https://m.media-amazon.com/images/I/51cwvqnAPYL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  //   url: "https://en.wikipedia.org/wiki/The_Culture_of_Narcissism",
  // },
  {
    author: "Eric Steinhart",
    title: "More Precisely: The Math You Need to Do Philosophy",
    img: "https://ericsteinhart.com/images/moreprecisely2.jpg",
    url: "https://ericsteinhart.com/TOOLS/tools-home.html",
  },
  {
    author: "Scott Soames",
    title: "Philosophical Analysis in the Twentieth Century Vol. 2",
    img:
      "https://pup-assets.imgix.net/onix/images/9780691123127.jpg?w=600&auto=format",
    url:
      "https://press.princeton.edu/books/paperback/9780691123127/philosophical-analysis-in-the-twentieth-century-volume-2",
  },
  {
    author: "Alexander George & Daniel Velleman",
    title: "Philosophies of Mathematics",
    img:
      "https://m.media-amazon.com/images/P/0631195440.01._SCLZZZZZZZ_SX500_.jpg",
    url:
      "https://www.wiley.com/en-us/Philosophies+of+Mathematics-p-9780631195443",
  },
  {
    author: "Herbert Enderton",
    title: "A Mathematical Introduction to Logic",
    img:
      "https://m.media-amazon.com/images/P/0122384520.01._SCLZZZZZZZ_SX500_.jpg",
    url: "https://www.logicmatters.net/tyl/booknotes/enderton/",
  },
  {
    author: "Chet Haase",
    title: "Androids: The Team That Built the Android Operating System",
    img:
      "https://static.wixstatic.com/media/0b8e78_63b5f87eb9a74676ae418a4a6ebf7d2e~mv2.jpeg/v1/fill/w_192,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/androids_cover_front.jpeg",
    url: "https://www.chethaase.com/androids",
  },
]

const links = [
  {
    title: "Ireizō (慰霊像)",
    subtitle:
      "Web monument for the Japanese-American incarceration during WWII.",
    url: "https://ireizo.com/",
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAACWCAMAAAAynWeiAAAARVBMVEULHkP///9mcooeHj+kHiKkqrlIVnIxHjqRHiYpOlqFjqHg4+gaLE/Cx9Dw8fOUnK12gJU5SGZXZH55HiuzucXR1dwVHkEwbcSxAAAEAElEQVR4nO2d25qbIBRGE1ttEc9N+v6P2sAkRtgbzaTxcLHW1QwRhZ/Nz0bmm5xOAAAAAAAAAAAAAACf42fMn71bdBB+CPZuERwbETB/927RQcBjAD4CHpMAjwH4CL9iyHy/+B2DxwC8Ax6TAI8BAAAAAAAAgONjRqq9m3IozHmk3rsthwJhElTFSL93WwBeocpGJvY/PEuzoVCq9ZkguKxQi5VaccVnu/KrtbZuh0/08h3Kh8mVU2HseUKTm7iWuZxjApM0jxtcp90uRSVHJhtVlc3c07fB1L5bocdVvg9tUQyd/7gU1TLX9frhkLVYPTrXtSas524aBIu7dS6b5Oo2Ze88OL9dYRXpNsF1URTm41gOroutuGCYduoWIfGymkk9y6jECWVlPLji9hG/5qo+fRMWhDkVbmCFExTBaPfNS8LY6a9Gn0htVDHXw2oDloQ51dqghcKcspeECcLDqrFQinq1Opc3YFGYTEtAI2FOcSKmCSMnktgJuTCyYVHVaBG7AYvCFK8IE6MIE6jgJ6g0mKtSWu60M1gUpr/9fIkveEOYKZVVP1fHYK+QWRRm0EzyP4Vp5ZRxXJJ+LEZmfRaFyTUziIQRwzwvTGIiVa5YvoFxVzfJe63GkjBGHcVQmEzcYVYYnxl3stzd9CqLvV7bb7MXhHGdUHoYCHO7Jv58Vpg8YadlYs5YfeuwMklh6tzRnK1mfD687Z1G3mFOmExPedPJ3D6pTFKYO1f1tet/CGOSAZAS4GDCdMbo2wFHOJWa7wiTTvLVHPt0OGHcoLap5Co03+4bwiQn0vxUOpDHuKZUifUjXq5Fd5LC+ImUeP+UGoZ9Mrz5Vcl7ieIybyd4+cx7hExPWPw+fOZZK7GwXNe6Au8Kk6l7xzuVbmnZITNfo8fxm8L4iZR+Wam7rL5RWJ2lzLdTtzVvCnOZ33SrE1d5FbEJL72oEn0UwkQOrQujiFwGsaA9K98nYF57H9PE4R8LU0ariSqMn5bhnUzYZ3dF9KxhITZXY1EYv4rGe7tIGBMvs6owtVz78ygYRJbjXCnp1quyLEylvJ6NhBHHBJowyqu4TMyS6OygsMl0cGV6Gd43KcLk3O8M5CFRPv0t6rGSxBqZ8rpwiO3DHfc19/O/yqd8e8SLf7ITIWjw8HUS+DzqKiNlen8OZ+sHcSgUX0eRNshwg/PNJ8JXjRO1uZRl6+7baHn36lRjY6dD+dxaj87iTx7H9WRQ+jcVphtLJ2JqlVRhnDSPdtXd4f+kqi/6Lad67/6yoDi8KgAAAAAAAAAAAAAAAAAAO8E/U0/Al8LA9+ALGxLgMQAfAY9JgMcAfAS+sCEBX9gA8BHwmAR4DAAAAAAAAAAAAACsyj+jKCRhEqf1VgAAAABJRU5ErkJggg==",
    height: 50,
  },
  {
    title: "Beej's Guides",
    subtitle: "I probably learned more from this than most of my coursework.",
    url: "https://beej.us/guide/",
    img: "https://beej.us/guide/bg.gif",
    height: 20,
  },
  {
    title: "Build Your Own X",
    subtitle: "Digestible hands-on resource.",
    url: "https://build-your-own.org/",
    img: "https://build-your-own.org/favicon.ico",
    height: 50,
  },
]

function Reading() {
  return (
    <div className="readings-page">
      <Layout inBlogPost={true}>
        <div className="readings">
          <h1>Books I like</h1>
          {readings.map(reading => (
            <div className="reading-paper">
              <div className="reading-title-author">
                <em>{reading.title}</em>
                <div>{reading.author}</div>
              </div>
              <div className="reading-img">
                <a href={reading.url} target="_blank">
                  <img
                    src={reading.img}
                    height={90}
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="readings">
          <h1>Links I like</h1>
          {links.map(link => (
            <div className="reading-paper">
              <div className="reading-title-author">
                <em>{link.title}</em>
                <div>{link.subtitle}</div>
              </div>
              <div className="reading-img">
                <a href={link.url} target="_blank">
                  <img
                    src={link.img}
                    height={link.height}
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="readings" style={{ marginTop: "40px" }}>
          I'm originally from Southern California. Besides research and reading,
          I enjoy calisthenics and StarCraft II. One day, I'll find the time to
          study for my ham radio Technician license.
        </div>
      </Layout>
    </div>
  )
}
export default Reading
