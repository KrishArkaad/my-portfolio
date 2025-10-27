import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function App() {

    return (
        <div style={{ display:"flex", height: "100vh", background:"transparent" }}>
            <div className='header'>
                <div className='tabs'><a href="#home-section">Home</a></div>
                <div className='tabs'><a href="#aboutme-section">About Me</a></div>
                <div className='tabs'><a href="#skills-section">Skills</a></div>
                <div className='tabs'><a href="#projects-section">Projects</a></div>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

                <section className='body-section' >
                    <section id="home-section">
                        <div id="home">
                            <Avatar  sx={{ width: 150, height: 150 }} alt="Ajithkumar Krishnamoorthy" src="/assets/AjithPhoto.jpg" />
                            <h2>Ajithkumar Krishnamoorthy</h2>
                            <h3>Senior Associate Developer</h3>
                        </div>
                    </section>

                    <Divider />
                    <section id="aboutme-section">
                        <div id="about-me">
                            <h2>About Me</h2>
                            <p>I’m a Software Engineer with 4+ years of hands-on experience designing and delivering scalable, cloud-native web applications across healthcare, compliance, and enterprise domains. I specialize in modernizing legacy systems, leading micro-frontend transformations, and architecting robust, cloud-native solutions with Angular, React, .NET Core, PostgreSQL, and Azure. I love crafting seamless RESTful APIs, applying strong DSA fundamentals, and unifying diverse UI frameworks to accelerate delivery and create real business impact.</p>

                            <button style={{marginRight: "15px"}} onClick={() => window.location.href = 'mailto:ajithkumar.krishnamoorthy@example.com'}>Contact Me</button>
                            
                            <a href="https://www.linkedin.com/in/ajithkumar-krishnamoorthy-3b4b6215b/" target="_blank" rel="noopener noreferrer" style={{marginRight: "15px"}}>LinkedIn</a>
                            <a href="https://github.com/ajithkumar-krishnamoorthy" target="_blank" rel="noopener noreferrer">GitHub</a>

                        </div>
                    </section>
                    <Divider />

                    <section id="skills-section">
                        <div id="skills">   
                            <h2>Skills</h2>
                            <div>
                                <ul>
                                    <li>Programming Languages: JavaScript, TypeScript, C#</li>
                                    <li>Frontend Frameworks: React, Angular, HTML, CSS</li>
                                    <li>Backend Technologies: .NET Core, .Net Framework</li>
                                    <li>Databases: MSSQL</li>
                                    <li>Cloud Platforms: AWS, Microsoft Azure (App Services, Functions, Blob Storage)</li>
                                    <li>Version Control: Git, GitHub</li>
                                    <li>Containerization: Docker, Kubernetes</li>
                                    <li>CI/CD: Github Actions, Azure DevOps</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                
                    <Divider />
                    <section id="projects-section">
                        <div id="projects">
                            <h2>Projects</h2>
                            <p>Here are some of my projects.</p>
                        </div>
                        </section>
                    </section>
            </div>  
        </div>
    );
}

export default App;