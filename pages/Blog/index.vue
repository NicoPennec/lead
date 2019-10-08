<template>
  <div class="blog-page">
    <div class="b-hero-container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hero-svg" src="~assets/svg/b.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain b-heading-container">
        <p class="pm b-h-subheading" data-aos="fade-up" data-aos-duration="1000">Our Blog</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          We leave our
          <br /><span class="designer">foot-prints</span> for
          <br />
          <span class="outlined">the others</span>
        </h1>
        <p
          class="pm b-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >


          <span
            class="underline-magical"
          >Design</span>,
          <span class="underline-magical">Development</span>,
          <span class="underline-magical">Data</span> and
          <span class="underline-magical">Life.</span>
        </p>
      </div>
    </div>

    <!-- <ArticleList :isPaginated="true" :postsPerPage="10" /> -->

    <div class="b-all-article-container">
      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogSection from '~/components/Sections/BlogSection'
import blogsEn from '~/contents/en/blogsEn.js'
// import blogsEs from '~/contents/es/blogsEs.js'

export default {
  layout: 'blog',
  components: {
    BlogSection
  },

  async asyncData({ app }) {
    const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs

    async function asyncImport(blogName) {
      const wholeMD = await import(
        `~/contents/${app.i18n.locale}/blog/${blogName}.md`
      )
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res
      }
    })
  },

  head() {
    return {
      title: this.$t('indexPageHead.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Saurabh Rai' },
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('indexPageHead.description'),
          hid: 'description'
        },
        { property: 'og:title', content: this.$t('indexPageHead.title') },
        { property: 'og:image', content: this.ogImage },
        {
          name: 'twitter:description',
          content: this.$t('indexPageHead.description')
        },
        { name: 'twitter:image', content: this.ogImage }
      ]
    }
  },

  computed: {
    ogImage: function() {
      return
    }
  }
  
}
</script>

<style scoped>
.b-all-article-container {
  width: 100%;
  position: relative;
}
</style>