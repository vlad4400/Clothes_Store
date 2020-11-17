<template>
    <div class="row" id="catalog">
        <div v-for="item of itemsCatalog" :key="item.productId" class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems col-lg-3" >
            <div class="feturedItem">
                <div class="feturedImgWrap">
                    <div class="feturedBuy">
                        <button class="add" @click="addItemToBasket(item)">
                            <div class="add">
                                <i class="add fas fa-shopping-cart"></i>
                                Add to Cart
                            </div>
                        </button>
                    </div>
                    <img class="feturedProduct" :src="item.productImg" alt="product1">
                </div>
                <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                    <div class="feturedItemName">{{ item.productName }}</div>
                    <div class="feturedItemPrice">${{ item.productPrice }}</div>
                </div>
            </div>
        </div>
    </div>
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