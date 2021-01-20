import React from "react";
import "./styles.css";
import bg from "./bg.svg";
import { useState } from "react";
import yt from "./yt.png";
var singers_songs = {
  "Arijit Singh": [
    { name: "Raabta", url: "https://www.youtube.com/watch?v=QDKPdf86QtY" },
    { name: "Laal Ishq", url: "https://www.youtube.com/watch?v=TuJXwmHmwhQ" },
    { name: "Binte Dil", url: "https://www.youtube.com/watch?v=9aoUpCXY7uk" },
    {
      name: "Aabad Barbaad",
      url: "https://www.youtube.com/watch?v=jh66Pjtqr4k"
    },
    {
      name: "Phir Mohhabat",
      url: "https://www.youtube.com/watch?v=m1rcse8INWk"
    }
  ],
  "Shreya Ghoshal": [
    { name: "Rosaana", url: "https://www.youtube.com/watch?v=CtgD91Ev4NU" },
    { name: "Yeh Aaina", url: "https://www.youtube.com/watch?v=UcOx6Bm3_4k" },
    { name: "Piyu Bole", url: "https://www.youtube.com/watch?v=ZAkr0KFFLLs" },
    { name: "Hasi", url: "https://www.youtube.com/watch?v=0ObN7lzx8tE" }
  ],
  "Sonu Nigam": [
    { name: "Dekho Na", url: "https://www.youtube.com/watch?v=gxGQYDD5l_o" },
    { name: "Is Kadar", url: "https://www.youtube.com/watch?v=VcbzW874Qag" },
    {
      name: "Tumhi Dekho Na",
      url: "https://www.youtube.com/watch?v=DULDIS2qlCU"
    },
    {
      name: "Main Agar Kahoon",
      url: "https://www.youtube.com/watch?v=DAYszemgPxc"
    },
    { name: "" }
  ],
  Shaan: [
    {
      name: "Wo Pehli Baar",
      url: "https://www.youtube.com/watch?v=KsFCVaDiegU"
    },
    {
      name: "Jab Se Tere Naina",
      url: "https://www.youtube.com/watch?v=jUfsdDJFYXI"
    },
    {
      name: "Chain Aapko Mila",
      url: "https://www.youtube.com/watch?v=ymi0zEaLZeI"
    },
    {
      name: "My Dil Goes mm..",
      url: "https://www.youtube.com/watch?v=fV4x7OCqFLA"
    },
    {
      name: "Wo Ladki H kaha",
      url: "https://www.youtube.com/watch?v=IIg8H60bRJo"
    }
  ],
  "Shankar Ehsaan Loy": [
    { name: "Virah", url: "https://www.youtube.com/watch?v=2lARCtyoiT8" },
    { name: "Garaj Garaj", url: "https://www.youtube.com/watch?v=52KcZK8KLos" },
    {
      name: "Noor E Khuda",
      url: "https://www.youtube.com/watch?v=JJ5r5Z6G2Zo"
    },
    { name: "Breathless", url: "https://www.youtube.com/watch?v=71RRcv5Jci0" },
    {
      name: "Padharo Mare Des",
      url: "https://www.youtube.com/watch?v=m9RtCRCsFDg"
    }
  ],
  KK: [
    { name: "Aashayein", url: "https://www.youtube.com/watch?v=bmyv0nRkDmc" },
    {
      name: "Tu Aashiqui Hai",
      url: "https://www.youtube.com/watch?v=aw0s2KaoA2Q"
    },
    { name: "Zara Se", url: "https://www.youtube.com/watch?v=5IY4BNj0-10" },
    {
      name: "Zindagi Do Pal Ki",
      url: "https://www.youtube.com/watch?v=r-XG86T2jNc"
    }
  ],
  "Niraj Shridhar": [
    { name: "Tim Mile", url: "https://www.youtube.com/watch?v=w6AZ52kaWTw" },
    { name: "Kyaa", url: "https://www.youtube.com/watch?v=pX5m9gN7Z60" },
    {
      name: "Woh Chali Wo Chali",
      url: "https://www.youtube.com/watch?v=8OwbwYNw4Pk"
    },
    { name: "Ale", url: "https://www.youtube.com/watch?v=17VUV2e0ZEM" }
  ]
};

export default function App() {
  function MouseOn(event) {
    event.target.style.background = "#fce38a";
    event.target.style.transition = "0.3s";
  }
  function MouseOut(event) {
    event.target.style.background = "#3fc1c9";
    event.target.style.transition = "0.3s";
  }
  const [selectedSinger, setSinger] = useState("Arijit Singh");
  function singerSelction(singer) {
    setSinger(singer);
  }
  return (
    <div className="App">
      <header>Nostalgic Songs 🎶</header>
      <img src={bg} alt="Wallpaper"></img>
      <div>
        {Object.keys(singers_songs).map((singer) => (
          <button
            onClick={() => singerSelction(singer)}
            className="singers-button"
            onMouseOver={MouseOn}
            onMouseOut={MouseOut}
          >
            {singer}
          </button>
        ))}
      </div>
      <hr style={{ "margin-top": "1rem", "margin-bottom": "1rem" }}></hr>
      <div id="output">
        <ul>
          {singers_songs[selectedSinger].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                color: "#364f6b",
                fontWeight: "bold",
                padding: "1rem",
                border: "1px solid #fc5185",
                backgroundColor: "#fce38a",
                margin: "1rem auto 1rem auto",
                width: "20%",
                minWidth: "10rem",
                borderRadius: "10rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div>
                <p style={{ display: "inline", width: "100%" }}>
                  Listen it here{" "}
                  <span>
                    <a
                      style={{ fontSize: "smaller" }}
                      href={song.url}
                      alt="YouTube"
                      target="_blank"
                    >
                      <img src={yt} width="30" height="50" />
                    </a>
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
