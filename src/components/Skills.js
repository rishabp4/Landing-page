import meter6 from "../assets/img/cpu_900618.png";
import meter7 from "../assets/img/coding_17359748.png";
import meter8 from "../assets/img/engineering_2861721.png";
import meter9 from "../assets/img/coding_2010957.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import resumePDF from '../assets/RishabP.Resume.pdf'; 

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills & Resume</h2>
              <p>Below is a slider of my main skills along with a link to download my resume.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Programming</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Engineering</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Hardware & Electronics</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
              {/* Resume Download Button */}
              <div className="resume-download">
                <a href={resumePDF} download className="btn-outline">
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};