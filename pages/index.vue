<template>
  <section class="container">
    <div class="hero">
      <div class="intro-wrapper">
        <h3 class="hello">Hello</h3>
        <p class="intro">My name is Tosho Ajibade, I am a software developer based in Lagos, Nigeria.</p>
      </div>
      <div class="avatar">
      </div>
    </div>
    <div class="skills subsection">
      <div class="subsection-header">
        <h4>Things I know</h4>
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
      </div>
      <div class="project-items">
        <div class="project-item">
          <div class="project-slide">

          </div>
          <div class="project-description">
            <h5>CrystalSleek</h5>
            <p>This is an e-commerce start-up in Nigeria, the customer site is available at www.crystalsleek.com and the admin site at admin.crystalsleek.com. These were my roles:</p>
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
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis ipsum dolorem? Esse modi tempora odit architecto labore unde explicabo minus consequuntur vel quos? Vero architecto nostrum veritatis voluptates vel obcaecati minima accusamus. Ratione placeat illum, dicta consequuntur rem dolorem.
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

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

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
  height: 500px;
  padding: 4rem;
  width: 100%;
  h3,
  p {
    color: $primary-blue;
  }
  // background-image: linear-gradient(
  //     rgba(79, 129, 255, 0.9),
  //     rgba(79, 129, 255, 0.9)
  //   ),
  //   url('../assets/images/computer.jpg');
  // background-repeat: no-repeat, no-repeat;
  // background-size: cover;
}
.intro-wrapper {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 3rem;
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
.hello {
  margin-bottom: 2rem;
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
    align-items: center;
    h4 {
      color: white;
    }
  }
}
.skills {
  .subsection-header {
    background-color: $primary-blue;
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
  }
  .project-items {
    padding: 4rem 8rem;
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
    height: 400px;
    margin-top: 0.25rem;
    border-radius: 5px;
    width: 500px;
    background-color: grey;
    margin-right: 2rem;
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
  }
  .certification-items {
    padding: 4rem 10rem;
  }
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
  }
  > div {
    padding: 4rem 10rem;
  }
}
.footer {
  display: flex;
  height: 200px;
  background-color: $primary-blue;
  padding: 0rem 10rem;
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
</style>
