 <template>
  <div class="nav-container">
    <nuxt-link to="/">
      <div class="logo">
       <!-- Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40.3px"
	 height="36px" viewBox="0 0 40.3 48" style="enable-background:new 0 0 40.3 48;" xml:space="preserve">
<style type="text/css">
	.st0{fill:url(#SVGID_1_);}
	.st1{fill:url(#SVGID_2_);}
	.st2{opacity:0.3;fill:url(#SVGID_3_);}
	.st3{opacity:0.3;fill:url(#SVGID_4_);}
	.st4{fill:url(#SVGID_5_);}
	.st5{fill:url(#SVGID_6_);}
	.st6{opacity:0.3;fill:url(#SVGID_7_);}
	.st7{opacity:0.3;fill:url(#SVGID_8_);}
</style>
<defs>
</defs>
<g>
	<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="41.8973" y1="43.5181" x2="18.8588" y2="3.6142">
		<stop  offset="1.231435e-02" style="stop-color:#D91C5C"/>
		<stop  offset="1" style="stop-color:#610028"/>
	</linearGradient>
	<polygon class="st0" points="40.3,39 31.5,39 15.7,0 24.5,0 	"/>
	<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="19.5" x2="24.6042" y2="19.5">
		<stop  offset="1.231435e-02" style="stop-color:#D91C5C"/>
		<stop  offset="1" style="stop-color:#B30028"/>
	</linearGradient>
	<polygon class="st1" points="0,39 8.7,39 24.6,0 15.7,0 	"/>
	<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="14.9667" y1="20.0326" x2="14.9667" y2="48">
		<stop  offset="1.231460e-02" style="stop-color:#434343"/>
		<stop  offset="1" style="stop-color:#000000"/>
	</linearGradient>
	<polygon class="st2" points="20.6,48 9.3,48 15,34 20.6,20 	"/>
	
		<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-576.4799" y1="48" x2="-576.4799" y2="20.0326" gradientTransform="matrix(-1 0 0 1 -550.1791 0)">
		<stop  offset="1.231460e-02" style="stop-color:#434343"/>
		<stop  offset="1" style="stop-color:#000000"/>
	</linearGradient>
	<polygon class="st3" points="20.6,48 32,48 26.3,34 20.6,20 	"/>
</g>
</svg>


      </div>
    </nuxt-link>

    <!-- <div class="menu-button-container">AAAAAA
      <button v-on:click="show = !show" class="menu-button">Toggle</button>
      <transition name="slide">
        <div v-if="show" class="test1">hello</div>
      </transition>
    </div>-->

    <div class="menu-slide1" :class="{ active: changed }"></div>
    <div class="menu-icon" @click="show = !show">
      <!-- <button @click="changed = !changed">Change</button> -->

      <svg
        @click="changed = !changed"
        :class="{ active: changed }"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <transition-group name="layout" tag="g">
          <rect class="items line1" ref="rect" key="rect1" width="15" height="2" />
          <rect class="items line2" ref="rect" key="rect2" x="0" y="6" width="30" height="2" />
          <rect class="items line3" ref="rect" key="rect3" x="15" y="12" width="15" height="2" />
        </transition-group>
      </svg>
      <span class="menu-text">MENU</span>
      
    </div>
    <transition name="slide-in">
      <div v-if="show">
        <div class="nav">
          <span class="nav__content">
            <span class="nav__list-item">
              <nuxt-link to="/">Home</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/projects">Projects</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/about">About</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/blog">Blog</nuxt-link>
            </span>
            <!-- <span class="nav__list-item">
              <nuxt-link to="/blog">Contact</nuxt-link>
            </span> -->
          </span>
        </div>
      </div>
    </transition>

    <!-- <span class="h-fullscreen-container">
      <button class="full-screen" onclick="openFullscreen();">
        <p>menu</p>
      </button>
    </span> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      changed: false
    }
  }
}
</script>
<style scoped>
.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

@media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 9.5vh;
  }
}

.nav-container input,
button {
  border: none;
}

.logo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  position: absolute;
  overflow: hidden;
  left: 25%;
  padding-top: 30px;
  transform: translate(-50%);
  z-index: 10;
}

@media screen and (max-width: 999px) {
  .logo {
    left: 8%;
    padding-top: 15px;
  }

  svg {
    width: 60px;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}

/* menu */
/* menu icon */

/* testing */
svg {
  fill: var(--primary-color);
}

/* .active .circ {
  transform: translate3d(30px, 0, 0) scale(0.5);
}
.active .text {
  transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
} */

.items {
  transition: all 0.4s ease;
}

#text {
  transform-origin: 50% 50%;
}

/* testing end */

.menu-icon {
  position: fixed;
  z-index: 10;
  left: 32px;
  top: 50%;
  cursor: pointer;
  z-index: 10;
}

@media screen and (max-width: 999px) {
  .menu-icon {
    height: 30px;
    width: 30px;
    left: auto;
    right: 22px;
    top: 25px;
  }
}

.active {
  fill: black;
}
.active .rect {
  transform: translate3d(0, 30px, 0);
}

.active .line1 {
  transform: translateX(1px) rotate(45deg);
}
.active .line2 {
  transform: translate3d(-4px, 18px, 0px) rotate(-45deg);
}
.active .line3 {
  transform: translate3d(10px, -7px, 0px) rotate(45deg);
}
/* .menu-icon__line {
  background-color: #000;
  transform: translateX(0px) rotate(-45deg);
}
.menu-icon__line-left {
  transform: translateX(1px) rotate(45deg);
}
.menu-icon__line-right {
  transform: translateX(-2px) rotate(45deg);
} */

.nav {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--secondary-color);
  z-index: 8;
}

.menu-slide1 {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: -1;
  transform: translateX(-100vw);
  transition-delay: 0s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
}
/* .menu-slide2 {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: 12;
  transform: translateX(-100vw);
  transition-delay: 0.1s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
} */

.active.menu-slide1 {
  transform: translateX(0vw);
  transition-delay: 0s;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-100vw) translateY(0%);
}

/* .nav:after {
  background: #c21818;
  transition-delay: 0s;
} */
/* .nav:before {
  transition-delay: 0.1s;
} */
.slide-in-enter-to,
.slide-in-leave {
  transform: translateX(0%) translateY(0%);
}

.slide-in-enter-active {
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition-delay: 0.1s;
}

.slide-in-leave-active {
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s;
  transition-delay: 0 s;
}

.nav__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.6em;
  font-weight: 900;
  letter-spacing: -1px;
}

.nav__list-item {
  margin: 10px 24px;
  display: inline-block;
  position: relative;
      background: #000;
    color: #fff;
    padding: 0 10px 0 0;
}

/* .nav__content {
  position: relative;
  top: 75%;
  left: 71%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.6em;
  font-weight: 200;
} */

/* .nav__list {
  display: flex;
}
.nav__list-item {
  position: relative;
  display: inline-block;
  transition-delay: 0.8s;
  opacity: 1;
  transform: translate(100%, 100%);
  transition: opacity 0.2s ease, transform 0.3s ease;

  margin-right: 5%;
} */

.nav__list-item:before {
  content: '';
  position: absolute;
  background: var(--primary-color);
  width: 20px;
  height: 3px;
  top: 100%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}
.nav__list-item:hover:before {
  width: 100%;
}

.menu-link-active .nav__list-item {
  width: 100%;
}

/* .slide-in-enter-to .nav__list-item {
  opacity: 1;
  transform: translateX(0%);
} */

/* .slide-in-enter-active .nav__list-item {
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
}
.slide-in-enter-active .nav__list-item:nth-child(0) {
  transition-delay: 0.5s;
}
.slide-in-enter-active .nav__list-item:nth-child(1) {
  transition-delay: 0.6s;
}
.slide-in-enter-active .nav__list-item:nth-child(2) {
  transition-delay: 0.7s;
}
.slide-in-enter-active .nav__list-item:nth-child(3) {
  transition-delay: 0.8s;
}
.slide-in-enter-active .nav__list-item:nth-child(4) {
  transition-delay: 0.9s;
} */

.h-fullscreen-container {
  position: absolute;
  bottom: 44px;
  left: 39%;
  z-index: 8;
}

.h-fullscreen-container p {
  font-size: 12px;
  position: absolute;
  white-space: nowrap;
  color: black;
  opacity: 0.5;
  padding: 0px 1px 0px 0px;
  margin: 20px 1px 0px -31px;
}

button.full-screen {
  background: white;
}
@media screen and (max-width: 999px) {
  .h-fullscreen-container {
    bottom: 26px;
    left: 50%;
  }

  .h-fullscreen-container p {
    margin: 15px 1px 0px -31px;
  }
}

.full-screen {
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
  border: 0.1em solid var(--primary-color);
  width: 23px;
  height: 23px;
  position: relative;
  font-size: 23px;
  cursor: pointer;
}
.full-screen:before,
.full-screen:after {
  content: '';
  background: white;
  position: absolute;
}
.full-screen:before {
  width: 0.333em;
  height: 1em;
  left: 0.233em;
  top: -0.1em;
}
.full-screen:after {
  width: 1em;
  height: 0.333em;
  top: 0.233em;
  left: -0.1em;
}


.menu-text{
    font-size: 10px;
    color: #767676;
    top: -15px;
    position: absolute;
    left: 0px;
}

.blacklogo{
  fill: black !important;
}

.quick-contact{
  text-align: center;
    bottom: 0;
    /* position: absolute; */
    margin-top: 100px;
    opacity: 0.2;
}

.quick-contact > svg{
  width: 100% !important;
}
</style>
