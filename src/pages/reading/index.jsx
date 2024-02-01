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
      "https://www.harukimurakami.com/wp-content/uploads/2015/07/NorwegianWood_r1_GB-682x1024.jpg",
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
        <div className="readings" style={{ marginTop: "50px" }}>
          I'm originally from Southern California. Besides research and reading,
          I enjoy calisthenics and StarCraft II. One day, I'll find the time to
          study for my ham radio Technician license.
        </div>
      </Layout>
    </div>
  )
}
export default Reading
