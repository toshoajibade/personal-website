<template>
  <section class="container">
    <div class="hero">
      <div class="intro-wrapper">
        <h3 class="hello">Hello</h3>
        <p class="intro">My name is Tosho Ajibade, I am a software developer based in Lagos, Nigeria.</p>
      </div>
      <div class="avatar">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
      </div>
    </div>
    <div class="skills subsection">
      <div class="subsection-header">
        <h4>Things I know</h4>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div class="skill-item">
          <img
            src="@/assets/icons/vue.svg"
            class="skill-item-image"
            alt="Vue.js"
            srcset=""
          >
          <p>Vue.js</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/scss.png"
            class="skill-item-image"
            alt="SCSS"
            srcset=""
          >
          <p>SCSS</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/nodejs.svg"
            class="skill-item-image"
            alt="Node.js"
            srcset=""
          >
          <p>Node.js</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/mongodb.png"
            class="skill-item-image"
            alt="MongoDB"
            srcset=""
          >
          <p>MongoDB</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/javascript.svg"
            class="skill-item-image"
            alt="JavaScript"
            srcset=""
          >
          <p>JavaScript</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/nuxt.svg"
            class="skill-item-image"
            alt="Nuxt.js"
            srcset=""
          >
          <p>Nuxt.js</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/pwa.png"
            class="skill-item-image"
            alt="pwa"
            srcset=""
          >
          <p>PWA</p>
        </div>
        <div class="skill-item">
          <img
            src="@/assets/icons/graphql.svg"
            class="skill-item-image"
            alt="graphql"
            srcset=""
          >
          <p>GraphQL</p>
        </div>
      </div>
    </div>
    <div class="subsection projects">
      <div class="subsection-header">
        <h4>Projects</h4>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="project-items">
        <div class="project-item">
          <div class="project-slide">
            <video
              autoplay
              loop
              muted
              poster="https://res.cloudinary.com/toshoajibade/image/upload/v1578399760/personal-website/tabulio-holder.png"
            >
              <source
                src="https://res.cloudinary.com/toshoajibade/video/upload/v1578398656/personal-website/Tabulio.mp4"
                type="video/mp4"
              >
            </video>
          </div>
          <div class="project-description">
            <h5>Tabulio (www.tabulio.com)</h5>
            <p>Tabulio is a social networking platform where creatives such as developers, designers, writers, artists and others can showcase their work and connect with one another. Users can share blogs, pictures and short videos about their work on the platform. These were my roles:</p>
            <ul>
              <li>Built the the frontend using Vue.js, SCSS and GraphQL</li>
              <li>Built a rich text editor where users can write blogs, insert images within the blog and emb status/post/pen from Twitter, Facebook and Codepen respectively</li>
              <li>Added functionality so users can upload multiple pictures and short videos about their work</li>
              <li>Implemented a code syntax highlighter within the blog editor</li>
              <li>Implemented a real time chatting app using GraphQL subscription so users can chat with one another within the platform</li>
              <li>Implemented social interactions so users can like, comment and reshare one another's post</li>
              <li>Played a very active role in the design of the website using Figma</li>
              <li>Worked together with the backend developer to build the backend using Express.js, GraphQL and MongoDB</li>
            </ul>
          </div>
        </div>
        <div class="project-item">
          <div class="project-slide">
            <video
              autoplay
              loop
              muted
              poster="https://res.cloudinary.com/toshoajibade/image/upload/v1555201910/personal-website/crystalsleek-holder.png"
            >
              <source
                src="https://res.cloudinary.com/toshoajibade/video/upload/v1555076673/personal-website/crystalsleek.mp4"
                type="video/mp4"
              >
            </video>
          </div>
          <div class="project-description">
            <h5>CrystalSleek (www.crystalsleek.com)</h5>
            <p>This is a new e-commerce start-up in Nigeria, I worked on both the customer and admin side of the site. The admin site is available at admin.crystalsleek.com. These were my roles:</p>
            <ul>
              <li>Built the websites from scratch using Vuejs, Nodejs, Express and MongoDB</li>
              <li>Designed the websites using Figma and Adobe Illustrator</li>
              <li>Admin can manage products, customers and orders from the admin website</li>
              <li>Integrated the websites with Flutterwave (a local payment gateway in Africa) API, Twilio SMS API, SendGrid Email API and Cloudinary API</li>
              <li>Customers can order, track order and mail admin from the site</li>
            </ul>
          </div>
        </div>
        <div class="project-item">
          <div class="project-slide">
            <video
              autoplay
              loop
              muted
              poster="https://res.cloudinary.com/toshoajibade/image/upload/v1555201907/personal-website/freshr-holder.png"
            >
              <source
                src="https://res.cloudinary.com/toshoajibade/video/upload/v1555076611/personal-website/freshr.mp4"
                type="video/mp4"
              >
            </video>
          </div>
          <div class="project-description">
            <h5>Freshr</h5>
            <p>Freshr is an Health and Lifestyle Blog Magazine. These were my roles in building their website:</p>
            <ul>
              <li>Built the site using Nuxtjs(Server Side Rendering)</li>
              <li>Designed the site using Figma and Adobe Illustrator</li>
              <li>Integrated Contentful API so the admin can update contents through Contentful CMS</li>
              <li> Integrated MailChimp API so visitors can subscribe to newsletter updates from the site</li>
              <li>This site is a Progressive Web App that averaged 90.8% when evaluated with Google Lighthouse</li>
              <li>The site is available at www.freshrblog.herokuapp.com</li>
            </ul>
          </div>
        </div>
        <div class="project-item">
          <div class="project-slide">
            <video
              poster="https://res.cloudinary.com/toshoajibade/image/upload/v1555201906/personal-website/texascuisine-holder.png"
              autoplay
              loop
              muted
            >
              <source
                src="https://res.cloudinary.com/toshoajibade/video/upload/v1555076700/personal-website/texascuisine.mp4"
                type="video/mp4"
              >
            </video>
          </div>
          <div class="project-description">
            <h5>Texas Cuisine</h5>
            <p>Texas Cuisine is a restaurant. I was given the task of building their Admin site where they can manage orders and products. These were my roles:</p>
            <ul>
              <li>Built the site with Vuejs and Nodejs backend using Sequelize with PostgreSQL database</li>
              <li>The client can upload menus, update delivery status, add other admins and also manage customers’ information</li>
              <li>This site is a Progressive Web App and has a score of 100% in both Progressive Web App and Performance metrics when evaluated with Google Lighthouse</li>
              <li>Designed the site using Figma and Adobe Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="subsection certifications">
      <div class="subsection-header">
        <h4>Certifications</h4>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="certification-items">
        <div class="certification-item">
          <h5>PluralSight Javascript Expert</h5>
          <p>PluralSight is one of the leading online software training platform in America. This certificate was earned upon successful completion of their Javascript Skill IQ test.</p>
        </div>
        <div class="certification-item">
          <h5>Mobile Web Specialist</h5>
          <p>Progressive Web Applications (PWA) are the new generation of web apps that are fast, reliable and engaging. I earned this certificate after successfully completing the Mobile Web Specialist course where I was taught how to build PWA. The course was offered by Google and Andela</p>
        </div>
        <div class="certification-item">
          <h5>MongoDB Certificates</h5>
          <p>
            MongoDB Aggregation Framework and MongoDB for Javascript Developer Certificates earned from MongoDB Inc. after scoring 100% in the first and 93% in the second course respectively
          </p>
        </div>
        <div class="certification-item">
          <h5>Free Code Camp Javascript Expert Certificate</h5>
          <p>I earned this certificate after successfully completing the Javascript projects on Free Code Camp</p>
        </div>
      </div>
    </div>
    <div class="subsection hobbies">
      <div class="subsection-header">
        <h4>Hobbies</h4>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <p>
          Travelling is something I have always loved, discovering new places, meeting new people and just exploring the world. I also read, I have read fictions from authors like Sidney Sheldon (<i>The Other Side of Me</i> where he wrote about his journey to becoming a world class author is a real inspiration to me), Jeffery Archer and Mario Puzo; I have also read business books like The Lean Start Up, The Innovators Dilemma and The Wealth of Nations (I consider this the best business book I have ever read)
        </p>
      </div>
    </div>
    <div class="footer">
      <div>
        <h4>Get in touch</h4>
      </div>
      <div>
        <div class="contact-item">
          <img
            src="@/assets/icons/gmail.png"
            alt=""
            srcset=""
          >
          <p>toshoajibade@gmail.com</p>
        </div>
        <div class="contact-item">
          <img
            src="@/assets/icons/github.png"
            alt=""
            srcset=""
          >
          <p>www.github.com/toshoajibade</p>
        </div>
        <div class="contact-item">
          <img
            src="@/assets/icons/twitter.svg"
            alt=""
            srcset=""
          >
          <p>@toshoajibade</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$secondary-blue: #16a8fb;
$primary-purple: #8e68ff;
$primary-blue: #4f81ff;
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.hero {
  min-height: 500px;
  width: 100%;
  display: flex;
  h3,
  p {
    color: $primary-blue;
  }
}
.intro-wrapper {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 10%;
}
.intro {
  color: white;
  font-size: 2rem;
}
h3 {
  font-size: 5rem;
  font-weight: normal;
  font-family: Playball;
  color: white;
}

h4 {
  font-weight: normal;
  font-size: 2rem;
}
h5 {
  font-size: 1.5rem;
  font-weight: normal;
}
.subsection {
  display: flex;
  flex-direction: column;
  p {
    color: #464646;
  }
  li {
    color: #464646;
  }
  .subsection-header {
    padding: 2rem;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0rem;
    width: 100%;
    height: 120px;
    align-items: center;
    h4 {
      z-index: 100;
      color: white;
    }
  }
}
.skills {
  .subsection-header {
    background-color: $primary-blue;
    > div {
      div {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        bottom: 0px;
        left: 10%;
        animation: skill1 10s ease-in-out infinite alternate;
        &:first-child {
          background-color: #2965fb;
        }
        &:nth-child(2) {
          background-color: $secondary-blue;
          animation-delay: 1s;
        }
        &:nth-child(3) {
          background-color: $primary-purple;
          animation-delay: 2s;
        }
      }
      @keyframes skill1 {
        50% {
          transform: translateY(-90px);
        }
        100% {
          left: calc(90% - 30px);
        }
      }
    }
  }
  > div {
    padding: 4rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3rem;
  }
}
.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 110px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
}
.projects {
  .subsection-header {
    background-color: $primary-purple;
    > div {
      div {
        width: 70px;
        height: 10px;
        background-color: #7d51ff;
        position: absolute;
        &:first-child {
          left: 10%;
          top: 20px;
          animation: project1 5s ease-in infinite alternate;
        }
        &:nth-child(2) {
          left: 50%;
          top: 55px;
          animation: project2 10s ease-in infinite alternate;
        }
        &:nth-child(3) {
          left: calc(90% - 70px);
          top: 90px;
          animation: project3 5s ease-in infinite alternate;
        }
        @keyframes project1 {
          100% {
            left: calc(90% - 70px);
          }
        }
        @keyframes project2 {
          50% {
            left: 10%;
          }
          100% {
            left: calc(90% - 70px);
          }
        }
        @keyframes project3 {
          100% {
            left: 10%;
          }
        }
      }
    }
  }
  .project-items {
    padding: 4rem 10%;
  }
  h5 {
    color: $primary-purple;
  }
}
.project-item {
  margin-bottom: 4rem;
  display: flex;
  &:nth-child(2) {
    flex-direction: row-reverse;
    .project-slide {
      margin-right: 0rem;
      margin-left: 2rem;
    }
  }
  &:last-child {
    margin-bottom: 0rem;
  }
  .project-slide {
    height: auto;
    margin-top: 0.25rem;
    border-radius: 5px;
    width: 500px;
    margin-right: 2rem;
    video {
      height: auto;
      object-fit: contain;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0px 0px 20px #bdbdbd;
    }
  }
  .project-description {
    flex: 1;
  }
  p {
    margin-bottom: 0.5rem;
  }
  ul {
    padding: 0px;
  }
  li {
    margin-bottom: 0.5rem;
    list-style: none;
    width: 100%;
  }
}
.certifications {
  .subsection-header {
    background-color: $secondary-blue;
    > div {
      > div {
        position: absolute;
        background-color: #0089d5;
        border-radius: 3px;
        > div {
          width: 10px;
          height: 10px;
          position: absolute;
          top: 8px;
          right: 5px;
          border-radius: 50%;
          background-color: #fff;
          opacity: 0.5;
        }
      }
      > div:first-child {
        bottom: 20px;
        left: 0%;
        width: 20px;
        height: 30px;
        animation: collect 5s linear infinite forwards;
      }
      > div:nth-child(2) {
        width: 40px;
        height: 50px;
        top: 30px;
        left: calc(90% - 20px);
      }
      @keyframes collect {
        50% {
          transform: translate(30px, -50px) skewX(30deg);
          left: 40%;
        }
        100% {
          transform: translate(0px, -20px) skewX(0deg);
          left: calc(90% - 20px);
          width: 40px;
          height: 50px;
        }
      }
    }
  }
}
.certification-items {
  padding: 4rem 10%;
}
.certification-item {
  margin-bottom: 1rem;
  h5 {
    color: $secondary-blue;
  }
}
.hobbies {
  min-height: calc(100vh - 200px);
  .subsection-header {
    background-color: $primary-purple;
    > div {
      width: 100%;
      height: 100%;
      position: absolute;
      > div {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background-color: #7d51ff;
        position: absolute;
        &:first-child {
          animation: play 10s linear infinite alternate;
          bottom: 0px;
          left: 0px;
        }
        &:nth-child(2) {
          animation: play 20s linear infinite alternate;
          bottom: 0px;
          left: 100px;
        }
      }
      @keyframes play {
        50% {
          bottom: 0px;
          left: 50%;
          transform: translateY(-90px);
        }

        100% {
          left: calc(100% - 30px);
          transform: translateY(0px);
        }
      }
    }
  }
  > div {
    padding: 4rem 10%;
  }
}
.footer {
  display: flex;
  min-height: 200px;
  background-color: $primary-blue;
  padding: 0rem 10%;
  align-items: center;

  h4 {
    color: white;
  }
  > div {
    display: flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    flex-direction: column;
  }
}
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  img {
    margin-right: 1rem;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    object-fit: cover;
  }
}
.avatar {
  position: relative;
  width: 40%;
  overflow: hidden;
}
.circle-1 {
  background-color: $primary-purple;
  position: absolute;
  right: -50px;
  top: -50px;
  opacity: 0.8;
  height: 250px;
  width: 250px;
  border-radius: 50%;
}
.circle-2 {
  background-color: $primary-blue;
  position: absolute;
  right: -20px;
  top: 100px;
  opacity: 0.8;
  height: 300px;
  width: 300px;
  border-radius: 50%;
}
.circle-3 {
  background-color: $secondary-blue;
  position: absolute;
  right: 180px;
  top: 150px;
  opacity: 0.8;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
@media (max-width: 1200px) {
  .project-item,
  .project-item:nth-child(2) {
    flex-direction: column-reverse;
    margin-bottom: 2rem;
    .project-slide {
      width: 100%;
      object-fit: contain;
      max-width: 500px;
      margin-right: 0rem;
      margin-left: 0rem;
    }
    .project-description {
      margin-bottom: 1rem;
    }
  }
}
@media (max-width: 1000px) {
  .circle-3 {
    display: none;
  }
}
@media (max-width: 768px) {
  .circle-3 {
    display: block;
    top: -50px;
    right: 100px;
  }
  .circle-2 {
    top: -100px;
    right: 200px;
  }
  .intro-wrapper {
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .avatar {
    width: 100%;
    height: 250px;
  }
  .hero {
    flex-direction: column-reverse;
  }
  .projects {
    .project-items {
      padding: 2rem 5%;
    }
  }
  .certification-items {
    padding: 2rem 5%;
  }
  .skills {
    > div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .hobbies > div {
    padding: 2rem 5%;
  }
  .footer {
    flex-direction: column;
    padding: 2rem 5%;
    > div {
      width: 100%;
    }
    h4 {
      margin-bottom: 1rem;
    }
  }
}
@media (max-width: 600px) {
  .skills {
    > div {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      padding: 2rem;
    }
    .skill-item {
      img {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
