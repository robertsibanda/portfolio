import { useEffect } from "react";
import "../css/projects.css";
import image from "../image.JPG";
document.title = "My Projects";
export default function Project() {
  function handleFocus(info) {
    console.log("targerted");
    console.log(info["width"]);
    info["width"] = 500;
  }
  return (
    <>
      <div className="project">
        <h3>project title</h3>

        <img
          onMouseOver={(e) => handleFocus(e.target)}
          width="400px"
          src={image}
          alt="project image"
        />

        <p>
          simple project description with a little bit information about the
          project
        </p>
        <p>
          <a href="#">Soruce Code</a>
        </p>
      </div>
    </>
  );
}
