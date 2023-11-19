<template>
  <div class="page-home">
    <div class="home-img-wrapper">
      <img src="https://reloadwavmedia.s3.eu-central-1.amazonaws.com/Images/reload_wei%C3%9F.png" class="home-img" alt="RELOAD Logo">
    </div>
    <div class="scroll-down-wrapper">
      <i class="fa-light fa-chevrons-down"></i>
      <button class="scroll-down-button">
        <i class="fa-solid fa-angles-down"></i>
      </button>
    </div>
    <div class="new-content">
      <div class="more-content-section-1">
        <h3 class="more-content-headline">WHAT RELOAD MEANS</h3>
          <section class="vision-content"><span class="reload-word">RELOAD</span> is a party series from Düsseldorf, 
            where people get together who feel closely connected to hiphop culture and 
            the happenings around it. The intention of the event is to finally get rid 
            of the mainstream sound, which people are getting more and more tired of 
            every week and to create a vibe that has never existed before.
            You can expect a refreshing mix of the hottest Hiphop, Trap, UK, Drill 
            & Grime tunes. Come thru and enjoy.
          </section>
      </div>
        <div class="more-content-section-3">
        <h3 class="more-content-headline">EXPERIENCE</h3>
          <section class="experience-content">
            <h4>Want to catch some <span class="reload-word">RELOAD</span> vibes?</h4>
            <p>Checkout DJ Chiefs refreshing tapes, either on 
              <a href="https://www.mixcloud.com/beatsource/chief/" target="_blank">DJcity</a> or
              <a id="soundcloud-link" href="https://soundcloud.com/chiefinspectorlelke" target="_blank">SoundCloud</a>. 
              You can expect a fine selection of tracks from different genres like Trap, Hip-Hop, 
              R&B and Garage.
            </p>
            <p>Also don't forget to check out our <a class="galery-link" href="/galery">galery</a> to get
              some insights of recent events and get yourself hyped for the next round!
            </p>
          </section>
        </div>
        <div class="more-content-section-2">
            <img class="recent-video" src="https://reloadwavmedia.s3.eu-central-1.amazonaws.com/gifs/reload_aftermovie1.gif" type="gif">
            <h3 class="more-content-headline">NEXT<br>EVENT</h3>
              <section class="next-event-content">
                <div class="next-event-list">
                  <ul>
                    <li class="time-and-date">When: 24.11.23</li>
                    <li class="location">Where: Cologne, Club Subway</li> <!-- Also possible to insert a google maps link to the location -->
                  </ul>
                </div>
                <details class="event-info">
                  <summary>MORE INFOS</summary>
                  <div class="tickets-n-djs">
                    <ul class="tickets-list">
                      <a id="event-tickets" href="/tickets">Tickets:</a>
                      <li>Guestlist: 10€</li>
                      <li>Box-Office: 12€</li>
                      <!-- <li>Standard: 17€</li> -->
                    </ul>
                    
                    <ul class="djs-list">
                      <p id="djs">DJs:</p>
                      <li><a href="https://www.instagram.com/chiefinspectorlelke/" target="_blank"><i class="fa-solid fa-arrow-right"></i> CHIEF</a></li>
                      <li><a href="https://www.instagram.com/bash.ofc/" target="_blank"><i class="fa-solid fa-arrow-right"></i> BA$H</a></li>
                      <li><a href="https://www.instagram.com/fabiana.stwn/" target="_blank"><i class="fa-solid fa-arrow-right"></i> Fabiana</a></li>
                      <li><a href="https://www.instagram.com/i.am.keisha/" target="_blank"><i class="fa-solid fa-arrow-right"></i> Keisha</a></li>
                    </ul>
                  </div>
                  <h5 class="about-event">About the next event</h5>
                  <p>Stay tuned!</p>
                </details>
              </section>
        </div>
      </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Home',
  // data() {
  //   return {
  //     latestProducts: [],
  //   }
  // },
  // components: {
  //   ProductBox
  // },
  mounted() {
    // this.getLatestProducts()

    document.title = 'Home | RELOAD'

    const scrollDownButton = document.querySelector('.scroll-down-button')
    const newContent = document.querySelector('.new-content')

    setTimeout(() => {
        document.querySelector('.home-img').classList.add('flicker-animation')
    }, 1200);

    scrollDownButton.addEventListener('click', () => {
        newContent.scrollIntoView({ behavior: 'smooth'})
    });

  },
  // methods: {
  //   getLatestProducts() {
  //     axios
  //       .get('/api/v1/latest-products/')
  //       .then(response => {
  //         this.latestProducts = response.data
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }
}
</script>