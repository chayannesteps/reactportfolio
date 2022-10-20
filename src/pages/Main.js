import React from 'react'
import headshot from './headshot.jpg';

class Main extends React.Component {
    render() {
        return (
        <section class="about-me-section container">
        <h2 class="section-headers">
            About me:
        </h2>
        <img class="headshot" src={headshot} alt="A headshot of myself"/>
        <p class="content">
            I am a new computer programming student who is currently attending Rutgers Coding Bootcamp full-time. Previously, I was involved in the healthcare field and was on track to becoming a nurse. However, I realized that field was not for me and decided to focus on my love for problem solving and computers in general. I am excited to see where this career change takes me!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus adipisci ullam voluptate quisquam sequi animi quaerat, ducimus veritatis hic quidem tenetur obcaecati aspernatur explicabo iusto cum similique nesciunt vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam inventore quidem exercitationem vel! Eius dolores quod quibusdam tenetur reprehenderit quisquam autem rerum velit saepe, dignissimos dicta laudantium ipsa. Sed, ex?
            
        </p>
        
        <h2 class="section-headers">
            Projects so far:
        </h2>
        <p class="content">
            Place holder text!!!!!! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sunt perspiciatis nostrum consectetur aperiam voluptate soluta vero velit aut, amet vel sint eligendi minima ratione? Ut laudantium cupiditate animi qui!
        </p>
    </section>
        )
    }
}

export default Main