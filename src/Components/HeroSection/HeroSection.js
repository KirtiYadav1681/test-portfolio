import { Typewriter } from "react-simple-typewriter";
import'./HeroSection.css'

 function HeroSection(){
    return (
    <section id="Home" className="hero--section">
      
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'm Harsh Yadav</p>
                <h1 className="hero--section--title" style={{ color: '#5e3bee', fontWeight: '800',fontSize:"45px" }}>
                    <Typewriter
                        words={['Web Developer', 'React Developer', 'Tech Enthusiast']}
                        loop={true}
                        cursor
                        cursorColor="red"
                        cursorStyle='_'
                        typeSpeed={200}
                        deleteSpeed={25}
                        delaySpeed={1500}
                    />
                </h1>
               
               <p className="hero--section-description">Skilled MERN Stack Web Developer ready to bring your ideas to life.</p>
            </div>

            <button className="btn">
                <a href='#contact'>Get In Touch</a>
            </button>
        </div>

        <div className="hero--section--img">
            <img src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/img/hire-web-developers/png/Hire-Web-Developers.png" alt="Hero"/>
        </div>

    </section>
    );
  }
  
  export default HeroSection;