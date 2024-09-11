import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./Projectcard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // Your projects data here
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <div className="project-content">
                    <h2>Projects [In Progress/Git not connected]</h2>
                    <p>In the projects section, I showcase a diverse range of work that demonstrates my skills in software development, machine learning, and web technologies. These projects reflect my passion for solving real-world problems and highlight my proficiency in languages and frameworks such as Python, Java, and Next.js. Each project serves as a testament to my continuous learning and adaptability in the ever-evolving tech landscape.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <p>My NBA MVP prediction model utilizes web scraping, Python, and machine learning to analyze player performance data and forecast MVP outcomes. By leveraging historical stats and advanced analytics, the model provides accurate and data-driven predictions, showcasing my ability to apply data science in sports analytics.</p>
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>My pantry tracker application, built with Next.js, Firebase, and Material UI, allows users to efficiently manage their pantry items by adding, removing, and updating quantities. This project highlights my skills in full-stack development and creating user-friendly interfaces for practical, everyday use.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>My AI-powered Customer Support Chatbot, developed using Next.js, React, and the OpenAI API, streamlines customer interactions by providing instant, intelligent responses. This project demonstrates my ability to integrate AI technology into web applications to enhance user experience and support automation.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image"/>
    </section>
  )
}