<template>
  <div>
    <div class="page" id="page">
        <!-- HEADER -->
        <Header :items="this.itemsBasket" :goodCost="this.goodCost" @remove-from-basket="removeFromBasket"/>
        <!-- NAV -->
        <Nav />
        <!-- PROMO -->
        <SectionPromo />
        <!-- PRODUCTS -->
        <SectionProducts />
        <!-- CATALOG -->
        <SectionCatalog @add-to-basket="addToBasket"/>
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
            itemsBasket: [],
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            url: '/api/basket',
            showBasket: false,
            goodCost: 0
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
    },
    methods: {
        addToBasket(item) {
            let find = this.itemsBasket.find(el => el.productId == item.productId);

            if (!find) {
                this.itemsBasket.push(Object.assign({}, item, { amount: 1 }));
            } else {
                find.amount++;
            }

            this.calculateGoodsCost();
        },
        removeFromBasket(id) {
            let find = this.itemsBasket.find(el => el.productId == id);
                    
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.itemsBasket.splice(this.itemsBasket.indexOf(find), 1);
            }

            this.calculateGoodsCost();
        },
        _get(url) {
            return fetch(url)
                .then(data => data.json())
        },
        calculateGoodsCost () {
            this.goodCost = 0;
            this.itemsBasket.forEach(item => {
                this.goodCost += item.productPrice * item.amount;
            });
        }
    },
    mounted() {
        this._get(this.url)
            .then(items => {
                this.itemsBasket = items.content;
                this.calculateGoodsCost();
            })
    }
}

</script>
