<template>
  <div>
    <h1>ID:{{ blog.title }}</h1>
    <p>{{ blog.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: 'My Title',
        description:
          'Elit officiis hic ullam ipsum consequuntur Nesciunt dolorem magni eos deleniti vero corporis. Commodi nam quasi accusantium corrupti sed Quidem.0',
      },
    }
  },
}
</script>
