import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function App() {

    return (
        // <div style={{display:"flex"}}>Hello</div>
        <div style={{ display:"grid", gridTemplateRows: "auto 1fr", height: "100vh", background:"transparent" }}>
            <div className='header'>
                <div style={{cursor: "pointer"}}><a href="#home">Home</a></div>
                <div style={{cursor: "pointer"}}><a href="#about-me">About Me</a></div>
                <div style={{cursor: "pointer"}}><a href="#skills">Skills</a></div>
                <div style={{cursor: "pointer"}}><a href="#projects">Projects</a></div>
            </div>
            <div style={{display:'grid', overflowY: 'auto', padding: '100px 20px 20px 20px'}}>
                
                <div id="home">
                    <Avatar  sx={{ width: 150, height: 150 }} alt="Ajithkumar Krishnamoorthy" src="src/assets/AjithPhoto.jpg" />
                    <h2>Ajithkumar Krishnamoorthy</h2>
                    <h3>Senior Associate Developer</h3>
                </div>

                <Divider />
                <div id="about-me">
                    <h2>About Me</h2>
                    <p>I’m a Software Engineer with 4+ years of hands-on experience designing and delivering scalable, cloud-native web applications across healthcare, compliance, and enterprise domains. I specialize in modernizing legacy systems, leading micro-frontend transformations, and architecting robust, cloud-native solutions with Angular, React, .NET Core, PostgreSQL, and Azure. I love crafting seamless RESTful APIs, applying strong DSA fundamentals, and unifying diverse UI frameworks to accelerate delivery and create real business impact.</p>

                    <button style={{marginRight: "15px"}} onClick={() => window.location.href = 'mailto:ajithkumar.krishnamoorthy@example.com'}>Contact Me</button>
                    
                    <a href="https://www.linkedin.com/in/ajithkumar-krishnamoorthy-3b4b6215b/" target="_blank" rel="noopener noreferrer" style={{marginRight: "15px"}}>LinkedIn</a>
                    <a href="https://github.com/ajithkumar-krishnamoorthy" target="_blank" rel="noopener noreferrer">GitHub</a>

                </div>
                <Divider />
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
                <Divider />
                <div id="projects">
                    <h2>Projects</h2>
                    <p>Here are some of my projects.</p>
                </div>
            </div>  
        </div>
    );
}

export default App;