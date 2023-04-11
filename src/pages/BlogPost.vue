<script>

export default {

  props: ['title'],
  emits: ['enlarge-text'],

}

</script>


<template>

  <!--Props 전달하기-->
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">
      텍스트 확대
    </button>
  </div>


</template>
