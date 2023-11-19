<template>
    <div class="page-ticket">
        <div class="ticket-header">
            <h1 class="ticket-headline">TICKETS</h1>
            <p class="ticket-headline-2">Just choose one of the available tickets and you will be redirected to our shop! Better be quick!</p>
        </div> 

        <div id="tickets">
            <div class="ticket-frame" onmouseover="this.classList.add('hover')" onmouseout="this.classList.remove('hover')">
                <p class="ticket-price">10 EURO</p>
                <img src="https://reloadwavmedia.s3.eu-central-1.amazonaws.com/Images/reload_wei%C3%9F.png" class="ticket-img">
                <a class="ticket-link" href="https://www.eventbrite.com/e/reload-registrierung-755860147047" target="_blank">PRE-SALE</a>
            </div>
            <div class="ticket-frame" onmouseover="this.classList.add('hover')" onmouseout="this.classList.remove('hover')">
                <p class="ticket-price">12 EURO</p>
                <img src="https://reloadwavmedia.s3.eu-central-1.amazonaws.com/Images/reload_wei%C3%9F.png" class="ticket-img">
                <a class="ticket-link" href="https://www.eventbrite.com/e/reload-registrierung-755860147047" target="_blank">EARLY BIRD</a>
            </div>
            <div class="ticket-frame" onmouseover="this.classList.add('hover')" onmouseout="this.classList.remove('hover')">
                <p class="ticket-price">17 EURO</p>
                <img src="https://reloadwavmedia.s3.eu-central-1.amazonaws.com/Images/reload_wei%C3%9F.png" class="ticket-img">
                <a class="ticket-link" href="https://www.eventbrite.com/e/reload-registrierung-755860147047" target="_blank">STANDARD</a>
            </div>
        </div>

        <div class="ticket-info">
            <!-- <div class="ticket-description">
                <p class="ticket-description-head">PRE-SALE</p>
                <ul class="ticket-description-list">
                    <li>Available even before announcment of the next event, watch out!</li>
                    <li>For all those who can't wait for the next party</li>
                    <li>Limited quantity</li>
                    <li>Cheapest ticket with 10€</li>
                </ul>
            </div> -->
            <div class="ticket-description">
                <p class="ticket-description-head">EARLY BIRD</p>
                <ul class="ticket-description-list">
                    <li>Avalaible on date of announcment of the next event</li>
                    <li>For all those who are not sure yet</li>
                    <li>Limited quantity</li>
                    <li>Middle price category with 10€</li>
                </ul>
            </div>
            <!-- <div class="ticket-description">
                <p class="ticket-description-head">STANDARD</p>
                <ul class="ticket-description-list">
                    <li>Avalaible two weeks after announcment</li>
                    <li>For all those who want to party spontaneously</li>
                    <li>Most expensive ticket with 17€</li>
                </ul>
            </div> -->
        </div>

        <!-- <div style="padding: 0;">
            <iframe 
            id="eventim-light-iframe-v2-64777f477c8b771e1c8224fe"
            src="https://www.eventim-light.com/de/a/64777f477c8b771e1c8224fe/iframe/"
            width="100%"
            data-scroll="true"
            data-scroll-offset-y="0"
            scrolling="no"
            frameborder="0"
            name="eventim-light-iframe-v2-64777f477c8b771e1c8224fe">
            </iframe>
        </div> -->

    </div>   
</template>

<script>
export default {
  name: 'Tickets',
  data() {
    return {
      // Add your data properties here if needed
    };
  },
  mounted() {
    document.title = 'Tickets | RELOAD';

    // Add your script here
    const script = document.createElement('script');
    script.src = 'https://www.eventim-light.com/de/a/64777f477c8b771e1c8224fe/public/iframe/el-shop.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);
  },
};
</script>
