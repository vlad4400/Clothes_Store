<template>
    <div id="basket" class="d-flex flex-column">
        <div v-for="item of itemsBasket" :key="item.productId" class="d-flex headerCartWrapIn">
            <a href="#" class="d-flex">
                <img :src="item.productImg" alt="" style="height: 85px">
                <div>
                    <div>{{ item.productName }}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="headerCartWrapPrice">{{ item.amount }} 
                        <span>x</span> ${{ item.productPrice }}
                    </div>
                </div>
            </a>
            <a @click="removeItemFromBasket(item.productId)" class="remove cursor-pointer"><i class="fas fa-times-circle remove" :data-id="item.productId"></i></a>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            showBasket: false
        }
    },
    methods: {
        ...mapActions(['getItemsBasket', 'removeItemFromBasket'])
    },
    computed: {
        ...mapGetters(['itemsBasket'])
    },
    mounted() {
        this.getItemsBasket();
    }
}
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
    }
    .cursor-pointer:active {
        cursor: progress;
    }
</style>