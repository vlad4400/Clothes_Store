<template>
    <section class="catalog center">
        <h3 class="catalog__header">Featured Items</h3>
        <p class="catalog__header_text">Shop for items based on what we featured in this week</p>
        <div class="catalog__main" id="catalog">
            <div v-for="item of itemsCatalog" class="catalog__item" :key="item.productId">
                <button 
                    class="catalog__bucket" 
                    name="add"
                    @click="addItemToBasket(item)"
                >
                    <img class="catalog__hidden_img" 
                    src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
                    <span class="catalog__hidden_text">Add to Cart</span>
                </button>
                <div class="catalog__photo">
                    <img class="catalog__img" :src="item.productImg" alt="#">
                </div>
                <div class="catalog__content">
                    <a class="catalog__name" href="#">{{item.productName}}</a>
                    <div class="catalog__price">{{item.productPrice}}.00</div>
                </div>
            </div>
        </div> <!-- ./CATALOG__MAIN -->
        <div class="catalog__button">
            <a class="catalog__link" href="product.html">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    methods: {
        ...mapActions(['getItemsCatalog', 'addItemToBasket'])
    },
    computed: {
        ...mapGetters(['itemsCatalog'])
    },
    mounted() {
        this.getItemsCatalog()
    }
}
</script>