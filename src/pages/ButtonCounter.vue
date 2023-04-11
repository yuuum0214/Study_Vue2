<template>

  <!--컴포넌트 정의하기-->
  <button @click="count++">당신은 {{ count }}번 클릭했습니다.</button>

  <!-- 이 템플릿이 DOM에 작성된 경우, 아래처럼 닫는 태그 사용해야함-->
  <!--
  <button-counter></button-counter>
  -->

</template>

<script>

export default{


  data(){
    return {
      count: 0
    }
  },

  //이런식으로도 컴포넌트 정의 가능
  template:`
  <button @click="count++">
  당신은 {{ count }} 번 클릭했습니다.
  </button>`

}
</script>
