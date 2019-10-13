<template>
  <div>
    <div class="w-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hero-svg" src="~assets/svg/w.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain w-h-container">
        <p class="pm w-h-subheading" data-aos="fade-up" data-aos-duration="1000">case studies & white paper</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Some of our
          <br /><span class="designer">Latest</span>
          <span class="outlined">Work</span>
        </h1>
        <p
          class="pm w-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >
         Strategy + Design + Development</br>
        Whatever the challenge, we always deliver a solution.
        </p>
      </div>
    </div>
    <!-- timeline 2019 -->
    <!-- <projecttimeline timeline="2019" /> -->

    <!-- project grid -->
    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/sierra-green">
            <thumbnail
              thumbnailName="Sierra Green"
              thumbnailDescription="Mobile App Design & Development"
              thumbnail="/showcase1.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/toko">
            <thumbnail
              thumbnailName="Toko"
              thumbnailDescription="Mobile App & Blockchain Development"
              thumbnail="/showcase2.jpg"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/concityre">
            <thumbnail
              thumbnailName="ConciTyre"
              thumbnailDescription="eCommerce Design & Development"
              thumbnail="/showcase3.jpg"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>
         <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/avataremoji">
            <thumbnail
              thumbnailName="Avatar emoji"
              thumbnailDescription="Design and Illustration"
              thumbnail="/showcase4.jpg"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="start-a-project">
      <div class="center-h-v">
        <nuxt-link to="/projects">
          <discovermore button-text="view more work" />
        </nuxt-link>
      </div>
    </div>


    <!-- thumbnail end here -->
    <!-- some more projects links  -->

    <Footer />
  </div>
  
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Projecttimeline from '~/components/projects/projecttimeline'
import Footer from '~/components/footer'
export default {
  layout: 'projects',
  components: {
    Thumbnail,
    Projecttimeline,
    Footer
  }
}
</script>

<style>
.my-project-quote {
  width: 100%;
  height: 50vh;
  background-color: var(--primary-color);
  padding: 0px 0px 0px 0px;
  position: relative;
}

.my-project-quote h1 {
  color: white;
  position: relative;
  top: 25%;
}
</style>
