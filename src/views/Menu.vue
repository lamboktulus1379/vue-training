<template>
    <div class="menu">
        <nav>
            <navigationMenu v-for="(menu, index) in menus" :key="index" :label="menu.name" :link="menu.link">

            </navigationMenu>
        </nav>
    </div>
</template>
<script>
import navigationMenu from '../components/navigationMenu'

export default {
    data: () => {
        return {
            menus: [
                {name: "Home", link: "/", id: 1},
                {name: "Contact", link: "/contact", id: 2},
                {name: "About", link: "/about", id: 3},
                {name: "Employees", link: "/employees", id: 3},
            ]
        }
    },
    components: {
        navigationMenu
    }
}
</script>
<style lang="scss" scoped>

</style>


