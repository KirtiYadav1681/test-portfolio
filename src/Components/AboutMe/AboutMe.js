import './About.css'

export default function AboutMe() {
    return (
 <section id="About" className="about--section">
 <h1 className="section--title-about">About Me</h1>
    <div className="wrapper">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="hero--section-description">
            Graduate in Electronics and Communication with 1.5 years of experience as a Research and Developer Officer at Aimil Private Ltd, Delhi. Excited about transitioning into the IT department, I am currently learning Full Stack Development. Proficient in HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, Express.js, React.js, and MongoDB. Created projects such as a Todo App, E-learning App ,Habit tracker App and an IMDb Clone. 
            </p>
            <p className="hero--section-description">
            Seeking to expand my network in the IT industry and eager to seize opportunities for a quick start and valuable experience.
            </p>
          </div>
        </div>
     </div>
</section>
    );
  }
  