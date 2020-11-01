<template>
  <div>
    <div class="page" id="page">
        <!-- HEADER -->
        <Header />
        <!-- NAV -->
        <Nav />
        <!-- PROMO -->
        <SectionPromo />
        <!-- PRODUCTS -->
        <SectionProducts />
        <!-- CATALOG -->
        <SectionCatalog />
        <!-- OFFER -->
        <SectionOffer />
        <!-- SUBSCRIBE -->
        <Subscribe />
        <!-- CONTACTS -->
        <Contacts />
        <!-- FOOTER -->
        <Footer />
    </div> <!-- ./PAGE -->
    <!-- POP-UP -->
    <PopUp />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/diff/Header.vue'
import Nav from '@/components/diff/Nav.vue'
import SectionPromo from '@/components/diff/SectionPromo.vue'
import SectionProducts from '@/components/diff/SectionProducts.vue'
import SectionCatalog from '@/components/diff/SectionCatalog.vue'
import SectionOffer from '@/components/diff/SectionOffer.vue'
import Subscribe from '@/components/diff/Subscribe.vue'
import Contacts from '@/components/diff/Contacts.vue'
import Footer from '@/components/diff/Footer.vue'
import PopUp from '@/components/diff/PopUp.vue'

export default {
    data() {
        return {
            showBasket: false
        }
    },
    name: 'Index',
    components: { 
        Header,
        Nav,
        SectionPromo,
        SectionProducts,
        SectionCatalog,
        SectionOffer,
        Subscribe,
        Contacts,
        Footer,
        PopUp
    }
}

</script>
