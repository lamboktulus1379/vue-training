<template>
   <nav>
 <ul class="nav-menu">
        <li><router-link :to="link">{{ label }}</router-link></li>
    </ul>
   </nav>
</template>
<script>
export default {
    data: () => {
        return {

        }
    },

    props: [
        'label',
        'link'
    ]
}
</script>
<style lang="scss" scoped>
    .nav-menu {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            float: left;
            
            a {
                text-decoration: none;
                display: block;
                padding: 5px;
                background: rebeccapurple;
                color: white;
            }
        }

    }
</style>


