<template>
    <div>
        <div class='headline'>
            {{ data.headline }}
        </div>
        <div class='wrapper'>
            <div v-for='el in data.content' :key='el.title'>
                <div class='how-works-icon'>{{ el.src }}</div>
                <div class='how-works-title'>{{ el.title }}</div>
                <div class='how-works-description'>{{ el.description }}</div>
                <router-link :to='el.link' class='how-works-more'>Learn more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SquareGrid',
    props: ['data'],
  }
</script>

<style lang='scss' scoped>
    .wrapper {
        display: flex;

        > div {
            flex: 33.333% 0 0;
        }
    }
</style>
