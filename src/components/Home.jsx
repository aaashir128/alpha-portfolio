import { IconButton } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import Particles from "react-particles-js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Particles
        className="home__particles"
        params={{
          "particles": {
            "number": {
                "value": 250,
                "density": {
                    "enable": false
                }
            },

           
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
        }}
      />
      <div className="home__details">
        <div className="home__detailsText">
          <h1>Hi I'm <span> Ashir </span> </h1>
          <p>
            I am Full-Stack Developer. I love to solve problems and eager to
            learn new things
          </p>
          <div className="home__icons">
            <IconButton>
              <a href="https://github.com/aaashir128" target="_blank">
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.facebook.com/Ultimatemak123/"
                target="_blank"
              >
                <FacebookIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.linkedin.com/in/muhammad-ashir-khan-392103180/"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
