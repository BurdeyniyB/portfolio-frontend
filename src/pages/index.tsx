import Nav from "../components/Nav";
import indexCSS from "../styles/index.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import heroImg from '../assets/images/image_2025-03-10_02-20-49-removebg-preview.png';
import { ReactTyped } from "react-typed";
import Project from "../components/Project";
import frontend from "../assets/images/Frontend.png";
import backend from "../assets/images/Backend.png";
import fullStack from "../assets/images/FullStack.png";
import kpi from "../assets/images/kpi.png";
import Skill from "../components/Skill";
import CustomCarousel from "../components/Carousel";
import { useState } from "react";
import { sendMessage } from "../http/contact";

const projects = [
    {
        folder: "music/",
        title: "Music Platform",
        description: "A full-featured music streaming platform built with Nest.js, Next.js, TypeScript, and MongoDB.",
        repo: "https://github.com/BurdeyniyB/music-platform-client",
        images: ["img1", "img2", "img3", "img4", "img5", "img6"],
    },
    {
        folder: "store/",
        title: "Online Store",
        description: "An e-commerce platform built with Node.js, React, PostgreSQL, and Express.",
        repo: "https://github.com/BurdeyniyB/online-store",
        images: ["img1", "img2", "img3", "img4", "img5", "img6"],
    },
    {
        folder: "crisp/",
        title: "Crisp",
        description: "Crisp is a modern online fashion store offering the latest trends and exclusive deals.",
        repo: "https://github.com/BurdeyniyB/Crisp",
        images: ["img1", "img2", "img3", "img4", "img5", "img6"],
    },
    {
        folder: "findtrend/",
        title: "Findtrend",
        description: "Findtrend helps you gather all your favorite websites in one place and stay updated on trends.",
        repo: "https://github.com/BurdeyniyB/Findtrend",
        images: ["img1", "img2", "img3", "img4", "img5"],
    },
    {
        folder: "quiz/",
        title: "Quiz",
        description: "Develop a quiz with different types of questions.",
        repo: "https://github.com/BurdeyniyB/Quiz",
        images: ["img1", "img2", "img3", "img4", "img5"],
    },
];

function Index() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [text, setText] = useState<string>('');

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setText('');
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setter(event.target.value);
        };

    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = encodeURI("/files/CV - Borys Burdeinyi - Full stack.pdf");
        link.download = "CV - Borys Burdeinyi.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("text", text);

        await sendMessage(formData).then(clearForm).catch(console.error);
    };

    return (
        <div>
            <div className={indexCSS.headerWrapper}>
                <Nav />
                <div className={indexCSS.headerContainer}>
                    <div className={indexCSS.headerContent}>
                        <h5>Hello I'm </h5>
                        <h1>Boris</h1>
                        <p>A Passionate&nbsp;
                            <span>
                                <ReactTyped
                                    strings={['Frontend Dev', 'Backend Dev', 'Full-Stack Dev']}
                                    typeSpeed={20}
                                    loop={true}
                                    backSpeed={20}
                                />
                            </span>
                        </p>
                        <p>I specialize in developing modern, scalable, and high-performance web
                            applications, covering both frontend and backend development. My expertise
                            includes React (Vite.js, Next.js), TypeScript, and advanced styling techniques with
                            Tailwind CSS, Sass, and Bootstrap. On the backend, I work with Node.js, Nest.js,
                            and databases like PostgreSQL and MongoDB.</p>

                        <div className={indexCSS.social}>
                            <a href="https://www.upwork.com/freelancers/~01d0ef1a2dd7b4a7b3?mp_source=share" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-upwork" />
                            </a>
                            <a href="https://github.com/BurdeyniyB" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" />
                            </a>
                            <a href="https://www.linkedin.com/in/boris-burdeyniy-a74b07205/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin" />
                            </a>
                            <a href="https://t.me/Raikern" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-telegram" />
                            </a>
                        </div>

                        <button onClick={downloadPDF}>CV <i className="ri-file-list-3-line"></i></button>
                    </div>
                    <div className={indexCSS.headerImage}>
                        <img src={heroImg} alt="hero" />
                        <div className={indexCSS.borderAnimation}></div>
                    </div>
                </div>
            </div>

            <section id="about" className={indexCSS.about_wrapper}>
                <h2 className="SectionTitle">About</h2>
                <div className={indexCSS.about}>
                    <div className={indexCSS.aboutImage}>
                        <CustomCarousel />
                    </div>
                    <div className={indexCSS.aboutContent}>
                        <div className={indexCSS.aboutCard}>
                            <img src={frontend} alt="Frontend" />
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Frontend Dev</h3>
                                <p>Create the visual and interactive parts of a website or app that users see and engage with.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={backend} alt="Backend" />
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Backend Dev</h3>
                                <p>Build and maintain the server, database, and logic that power the application behind the scenes.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={fullStack} alt="Full-Stack" />
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Full-Stack Dev</h3>
                                <p>Handle both frontend and backend, integrating user interfaces with server-side functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className={indexCSS.skillsContainer}>
                <h2 className="SectionTitle">Skills</h2>
                <div className={indexCSS.skills}>
                    <div className={indexCSS.general}>
                        <h3>Frontend Technologies</h3>
                        <Skill name="React" level={85} />
                        <Skill name="Vite.js" level={75} />
                        <Skill name="Next.js" level={80} />
                        <Skill name="TypeScript" level={90} />
                        <Skill name="Tailwind CSS" level={85} />
                        <Skill name="Bootstrap" level={70} />
                        <Skill name="Sass" level={70} />
                    </div>
                    <div className={indexCSS.additional}>
                        <h3>Backend Technologies</h3>
                        <Skill name="Node.js" level={80} />
                        <Skill name="Nest.js" level={75} />
                        <Skill name="Express.js" level={70} />
                        <h3>Databases</h3>
                        <Skill name="PostgreSQL" level={75} />
                        <Skill name="MongoDB" level={80} />
                    </div>
                </div>
                <div className={indexCSS.skills}>
                    <div className={indexCSS.general}>
                        <h3>Tools & Development</h3>
                        <Skill name="Docker" level={70} />
                        <Skill name="GitHub" level={85} />
                        <Skill name="GitLab" level={80} />
                        <Skill name="Jira" level={75} />
                        <h3>State Management</h3>
                        <Skill name="Context API" level={80} />
                        <Skill name="Redux" level={70} />
                    </div>
                    <div className={indexCSS.additional}>
                        <h3>API Integration</h3>
                        <Skill name="REST API" level={85} />
                        <Skill name="Ajax" level={80} />
                        <Skill name="Telegram Bots" level={70} />
                        <h3>UI/UX & SEO</h3>
                        <Skill name="Figma" level={70} />
                        <Skill name="jQuery" level={75} />
                        <Skill name="SEO Optimization" level={80} />
                    </div>
                </div>
                <div className={indexCSS.skills}>
                    <div className={indexCSS.general}>
                        <h3>Payment Systems</h3>
                        <Skill name="Stripe" level={70} />
                        <Skill name="PayPal" level={65} />
                    </div>
                    <div className={indexCSS.additional}>
                        <h3>Languages</h3>
                        <Skill name="Ukrainian" level={100} />
                        <Skill name="English" level={90} />
                    </div>
                </div>
                <div className={indexCSS.education}>
                    <h3>Education</h3>
                    <div className={indexCSS.aboutCard}>
                        <img src={kpi} alt="Education" />
                        <div className={indexCSS.aboutCardContent}>
                            <h3>Bachelor of Software Engineering</h3>
                            <p>National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className={indexCSS.portfolioContainer}>
                <h2 className="SectionTitle">Portfolio</h2>

                <div className={indexCSS.projects}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={indexCSS.project}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <Project folder={project.folder} imagesProp={project.images} isHovered={hoveredProject === index} />
                            <div className={indexCSS.projectText}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={indexCSS.gitLink}>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                        {project.repo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className={indexCSS.contact_wrapper}>
                <h3 className="SectionTitle">Get in Touch</h3>

                <div className={indexCSS.contact}>
                    <div className={indexCSS.contact_form}>
                        <h4>Send a Message</h4>

                        <div className={indexCSS.input_wrapper}>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={handleInputChange(setFirstName)}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={handleInputChange(setLastName)}
                            />
                        </div>

                        <div className={indexCSS.input_wrapper}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleInputChange(setEmail)}
                            />
                            <input
                                type="text"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={handleInputChange(setPhone)}
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            value={text}
                            onChange={handleInputChange(setText)}
                        ></textarea>
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                    <div className={indexCSS.contact_details}>
                        <h4>Contact Info</h4>

                        <div className={indexCSS.info_wrapper}>
                            <a href="tel:0973431619">
                                <i className="ri-phone-line"></i>
                            </a>
                            <span>+380 97 343 16 19</span>
                        </div>
                        <div className={indexCSS.info_wrapper}>
                            <a href="mailto: borisburdeyniy@gmail.com">
                                <i className="ri-mail-line"></i>
                            </a>
                            <span>borisburdeyniy@gmail.com</span>
                        </div>
                        <div className={indexCSS.social}>
                            <a href="https://t.me/Raikern" target="_blank" rel="noopener noreferrer">
                                <i className="ri-telegram-line"></i>
                            </a>
                            <a href="https://wa.me/380973431619" target="_blank" rel="noopener noreferrer">
                                <i className="ri-whatsapp-line"></i>
                            </a>
                            <a href="https://www.snapchat.com/add/borisburdieiniy" target="_blank" rel="noopener noreferrer">
                                <i className="ri-snapchat-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={indexCSS.footer}>
                <div className={indexCSS.footerLinks}>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
                <p>@copyright 2025 all rights reserved</p>
            </section>
        </div>
    );
}

export default Index;
