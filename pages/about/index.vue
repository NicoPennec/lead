<template>
  <div>
    <!-- <div class="vl1 vl"></div>
    <div class="vl2 vl"></div>
    <div class="vl3 vl"></div>-->

    <!-- about hero -->

    <div class="a-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img src="~assets/svg/a.svg" alt="A" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain a-h-container">
        <p
          class="pm a-h-subheading"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >who are we</p>
        <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          We live by the
          <span class="outlined">Code of</span> <span class="designer">Passionate</span>
          Determination
        </h1>
        <p
          class="pm a-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >We’re technologists and entrepreneurs, so we understand both the technical and business challenges of creating digital products.

</p>

      </div>
    </div>

    <div class="about-section2">
      <div class="me-images">
        <div v-rellax="{ speed: -1.2, center: 0.4 }" class="me-image1">
          <img
            src="~/assets/img/about/about-me-1c.jpg?webp"
            alt="leadstaship"
          />
        </div>
        <div v-rellax="{ speed: 1, center: 0.3 }" class="me-image2">
          <img src="~/assets/img/about/about-me-2.jpg?webp" alt="leadstaship" />
        </div>
        <div v-rellax="{ speed: -2, center: 0.7 }" class="me-image4">
          <img src="~/assets/img/about/about-me-4.jpg?webp" alt="leadstaship" />
        </div>
        <div v-rellax="{ speed: 3, center: 0.5 }" class="me-image3">
          <img src="~/assets/img/about/about-me-3.jpg?webp" alt="leadstaship" />
        </div>
      </div>
    </div>
    <a href></a>

    <div class="about-section3">
      <div class="about-me-text a-hello_container contain">
        <p class="para hero-para black70">
          We strive to grab <span class="underline-magical">new possibilities</span>, not to stutter or trip, but to <span class="underline-magical">walk with determination</span>, to walk with <span class="underline-magical">passion</span>, and decode the unknown and the known.
        </p>
      </div>
    </div>

    <!-- services -->
    <section class="a-c-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Services</h1>
          </div>
        </div>

        <div class="a-c_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Services</span>
        </div>

        <div class="a-c-design">
          <p class="a-c_subheading red">+Digital Products</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Combining a strategic approach to product development with technology and design expertise to shape your business idea into a digital product that is able to achieve defined goals.</span>
            </div>
          </div>
        </div>
        <div class="a-c-design">
          <p class="a-c_subheading red">+Custom Software</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Developing innovative digital platforms and one-of-a-kind custom software solutions that upgrade your business processes, solve specific problems and enable you to grow your business.</span>
            </div>
          </div>
        </div>
        <div class="a-c-design">
          <p class="a-c_subheading red">+Mobile Applications</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Leveraging the benefits of iOS and Android to design and develop custom mobile apps that will make your customers and employees want to keep your business close to them.</span>
            </div>
          </div>
        </div>
        <div class="a-c-design">
          <p class="a-c_subheading red">+Advanced Websites</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Using a user-centric approach and advanced UX/UI methodologies to create amazing-looking and responsive web platforms that grow your business and evolve your users’ experience.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

<section class="a-p-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Expertise</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Expertise</span>
        </div>

        <div class="pm black70">
          <div class="a-p_layout_column">
            <nuxt-link to="/projects/filmingeye">
              <div class="a-p_layout_row black70">
                <h2 class="designer">Strategy</h2>
                <h2 class=""></h2>
                <span>The first people you’ll meet are our business, UX and technology experts. Together you'll discuss ideas and opportunities, and then we'll deliver blueprints for the best solution.</span>
              </div>
            </nuxt-link>
           <nuxt-link to="/projects/filmingeye">
              <div class="a-p_layout_row black70">
                <h2 class="designer">Design</h2>
                <h2 class=""></h2>
                <span>In this stage, we translate the strategic basis of the project into visual design. The aim is to create an impressive experience in the interaction between the brand and the user.</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/projects/filmingeye">
              <div class="a-p_layout_row black70">
                <h2 class="designer">Development</h2>
                <h2 class=""></h2>
                <span>Our code crafters are included in the project from the very beginning. They create progressive solutions placed on the right platforms to enhance the user experience.</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- tools -->

    <section class="a-t-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Technology Stack</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Stack</span>
        </div>
        <h3 class="margin_reveal">Design</h3>
        <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Sketch
            </span>
            <span>
              <img src="~assets/img/about/a-tools-1.svg" alt="adobe xd svg icon" /> Adobe XD
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Framer X
            </span>
            <span>
              <img src="~assets/img/about/a-tools-2.svg" alt="Invision svg icon" />Invision Studio
            </span>
            <span>
              <img src="~assets/img/about/a-tools-10.svg" alt="Adobe Illustrator svg icon" />Adobe Creative Suite
            </span>
            <span>
              <img src="~assets/img/about/a-tools-5.svg" alt="Zeplin svg icon" />Zeplin
            </span>
            <span>
              <img src="~assets/img/about/a-tools-14.svg" alt="UXPin svg icon" />Figma
            </span>
            <span>
              <img src="~assets/img/about/a-tools-17.png" alt="Balsamiq svg icon" />Balsamiq
            </span>
            <!-- <span>
              <img src="~assets/img/about/a-tools-6.svg" alt="Visual Studio Code svg icon" />Visual Studio Code
            </span>
            <span>
              <img src="~assets/img/about/a-tools-18.svg" alt="Atom svg icon" />Atom
            </span>
            <span>
              <img src="~assets/img/about/a-tools-19.svg" alt="GitHub svg icon" />GitHub
            </span>
            <span>
              <img src="~assets/img/about/a-tools-7.svg" alt="Slack svg icon" />Slack
            </span> -->
            <span>
              <img src="~assets/img/about/a-tools-21.png" alt="Pen & Paper png icon" />Pen & Paper
            </span>
        </div>
        <br/>
        <h3 class="margin_reveal">Front end</h3>
        <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Angular JS
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Vue JS
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />React
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Javascript ES6
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Sass
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Flexbox
            </span>
        </div>
        <br/>
        <h3 class="margin_reveal">Mobile</h3>
        <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />React Native
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Kotlin
            </span>
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Swift
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Java
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Ionic
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Flutter
            </span>
        </div>
        <br/>
        <h3 class="margin_reveal">Technologies</h3>
        <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Docker
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Blockchain
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />IoT
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />ML
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Gaming
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />VR & AR
            </span>
        </div>
        <h3 class="margin_reveal">Server side</h3>
        <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />LAMP
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Java
            </span>
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Node JS
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Mongo
            </span>
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Redis
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />C#
            </span>
             <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Python
            </span>
        </div>
      </div>
    </section>
    <!-- projects section -->

    <!-- work -->

    <section class="a-crazy-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Discuss your project with us</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -3, center: 0.5 }">
          <span>Discuss</span>
        </div>
      </div>
      <div class="p-quote contain red">
        <blockquote>
          4 ways to work with us:<br/>
          <small class="black70">Fixed Price<br/>Time and Materials <br/>Retained Partnership<br/>Consulting & Training</small>
        </blockquote>
      </div>
        
      <div class="a-crazy-layout">
        <div class="a-crazy-bg">
          <img src="~assets/img/about/crazy-bg-red.svg" alt="backgrounds red" />
          <img src="~assets/img/about/crazy-bg-light-grey.svg" alt="backgrounds red" />
        </div>
        <div class="me-crazy">
          <img
            class="me-crazy-1"
            src="~assets/img/about/me-face1.png?webp"
            alt="  Crazzy Myself, blank and white"
          />
          <img
            class="me-crazy-2"
            src="~assets/img/about/me-face-2.png?webp"
            alt="  Crazzy Myself, black and white"
          />
        </div>
      </div>
    </section>
    

    <!-- get connected -->
    <section class="connect-container">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">To stay connected</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Connect</span>
        </div>

        <div class="a-social-links">
          <p>
            <span>
              <a
                href="https://www.facebook.com/leadstarship"
                target="_blank"
                title="Facebook (new tab)"
                rel="noopener"
              >
                <img src="~assets/svg/facebook.svg" alt="facebook icon" />
                <span class="underline-magical">facebook</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.instagram.com/leadstarship"
                target="_blank"
                rel="noopener"
                title="Instagram (new tab)"
              >
                <img src="~assets/svg/instagram.svg" alt="facebook icon" />
                <span class="underline-magical">instagram</span>
              </a>
            </span>
            <br />

            <span>
              <a href="mailto:hello@leadstarship.com">
                <img src="~assets/svg/mail.svg" alt="mail icon svg" />
                <span class="underline-magical">hello@leadstarship.com</span>
              </a>
            </span>
            <br />
            <span>
              <a
                href="https://medium.com/@leadstarship"
                target="_blank"
                rel="noopener"
                title="Medium (new tab)"
              >
                <img src="~assets/svg/medium.svg" alt="medium icon svg" />
                <span class="underline-magical">medium</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.linkedin.com/in/leadstarship/"
                target="_blank"
                rel="noopener"
                title="Linkdin (new tab)"
              >
                <img src="~assets/svg/linkedin.svg" alt="linkedin icon" />
                <span class="underline-magical">linkedin</span>
              </a>
            </span>
            <br />
            <span>
              <a
                href="https://github.com/leadstarship"
                target="_blank"
                rel="noopener"
                title="Github (new tab)"
              >
                <img src="~assets/svg/github.svg" alt="github icon" />
                <span class="underline-magical">github</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.behance.net/leadstarship"
                target="_blank"
                rel="noopener"
                title="Behance (new tab)"
              >
                <img src="~assets/svg/behance.svg" alt="behance icon" />
                <span class="underline-magical">behance</span>
              </a>
            </span>
            <br />
          </p>
        </div>
      </div>
    </section>

    <!-- <div class="a-section-divider">
      <div class="section-divider a-end-dots">
        <hr class="section-divider" />
      </div>
    </div> -->

    <!-- <section class="a-footer">
      <img src="~assets/img/about/a-footer-bg.svg" alt="bg svg" />
      <div class="a-footer_bg_text outlined">
        <span>Hello World!</span>
      </div>
      <img class="a-footer-hand" src="~assets/footer/footer-hand.png?webp" alt="hand gesture" />
    </section> -->
  </div>
</template>

<script>
export default {
  layout: 'projects',
  head() {
    return {
      title: 'About Us',
      titleTemplate: '%s - leadStarship',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Digital Innovation Company'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'leadstarship, digital, app, software, web, strategy, app, design, development, ai, ml, dl, data, marketing, singapore, sri lanka'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
