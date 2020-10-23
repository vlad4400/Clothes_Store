<template>
    <header class="header center">
        <div class="header__left">
            <a href="" class="logo">
                <img class="logo__img" src="../../../src/assets/imgs/logo.png" alt="logo"><span class="logo__text">BRAN<span class="logo__text--last_letter">D</span></span>
            </a>
            <div class="header__form">
                <button class="header__browse" onclick="displayMenu()">Browse</button>
                <input class="header__input" type="text" name="name" placeholder="Search for Item...">
                <button class="header__search"><img src="../../../src/assets/imgs/search.png" alt="search"></button>
                <div id="mega_menu" class="mega_menu mega_menu--browse">
                    <div class="mega_menu__column">
                        <h6 class="mega_menu__title">Women</h6>
                        <ul class="mega_menu__ul">
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Blazers</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Denim</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Leggings/Pants</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Skirts/Shorts</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Accessories</a></li>
                        </ul>
                        <h6 class="mega_menu__title mega_menu__title--middle">Men</h6>
                        <ul class="mega_menu__ul">
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Tees/Tank tops</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Shirts/Polos</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweatshirts/Hoodies</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Blazers</a></li>
                            <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/vests</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__right">
            <div class="header__bucket">
                <div class="header__count" id="basket-count"></div>
                <button id="basket-toggler"><img class="header__cart" src="../../../src/assets/imgs/cart.png" alt="cart"></button>
                <!-- DROP CART -->
                <div class="drop" id="basket">
                    <div id="basket-items">
                        <div v-for="item of items" class="drop__box" :key="item.productId">
                            <a class="drop__img" href="single.html"><img :src="item.productImg" alt="#" width="72" height="85"></a>
                            <div class="drop__info">
                                <a href="single.html" class="drop__title">
                                    {{ item.productName }}
                                </a>
                                <img src="../../../src/assets/imgs/drop_cart/stars.png" alt="#">
                                <div class="drop__price">
                                    <span class="drop__count">
                                        {{ item.amount }}
                                    </span>
                                    <span class="drop__span">
                                        x
                                    </span>
                                    ${{ item.productPrice }}
                                </div>
                            </div>
                            <button class="drop__cancel fas fa-times-circle" name="remove"></button>
                        </div>
                    </div>
                    <div class="drop__total">
                        <div>TOTAL</div>
                        <div id="total-sum"></div>
                    </div>
                    <a href="checkout.html" class="drop__link">Checkout</a>
                    <a href="#" class="drop__link">Go to cart</a>
                </div>
            </div>
            <a class="header__link" href="#">My Account</a>
        </div>
    </header>
</template>

<script>
export default {
    props: ['items']
}
</script>