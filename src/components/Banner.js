import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 5);
  const [index, setIndex] = useState(1);
  const toRotate = ["a Computer Engineer","a Student","a Developer"];
  const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(400);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">  
                </span>
                <h1>{`Hi! I'm:`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["a Computer Engineer","a Student","a Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>As a junior at Rutgers University pursuing a BS in Computer Engineering with a minor in Computer Science, I am deeply passionate about leveraging technology to solve real-world problems. My journey has been marked by active involvement in the IEEE community and hands-on experience in software development, AI integration, and innovative project execution.

I have developed a strong technical foundation with proficiency in Java, Python, MATLAB, and web development frameworks like Next.js and React. My skills extend to data science with tools like Pandas and machine learning, as well as hardware expertise in digital logic/circuit design and test equipment.

I am actively seeking internships to further develop my industry knowledge and gain practical business experience, with a goal to contribute effectively to cutting-edge projects in the tech industry.</p>
                  <button onClick={() => console.log('connect')}> <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}