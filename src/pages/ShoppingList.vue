<template>
<!-- ShoppingList Check -->
  <q-card-section class="row text-center">
    <q-card-section class="col text-h4 text-primary">
      {{ header || "welCome" }}
      <!--add item or modi-->
        <q-btn
          v-if="editing"
          @click="doEdit(false)"
          unelevated
          rounded
          icon-right="clear"
          label="Cancel"
        ></q-btn>
        <q-btn
        v-else
        @click="doEdit(true)"
        color="primary"
              unelevated
              rounded
              icon-right="send"
              label="Add Item"
        ></q-btn>
    </q-card-section>
  </q-card-section>

    <!--item add-->
    <q-card-section class="row justify-center">
      <q-card-section v-if="editing" class="col-8 col-md-3">
        <q-input
          v-model="newItem"
          @keyup.enter="saveItem"
          label="아이템 추가"
        ></q-input>
      </q-card-section>

      <q-card-section v-if="editing" class="col-4 col-md-3">
      <q-checkbox
        class="q-pa-none"
        :disable="newItem.length == 0 ? true : false"
        v-model="newItemHighPriority"
        :true-value="true"
        :false-value="false"
        label="높은 우선순위"
      ></q-checkbox>
      </q-card-section>

      <!--내용 저장-->
      <q-card-section v-if="editing" class="col-12 col-md-3">
        <q-btn outline rounded color="primary"
          @click="saveItem()" label="아이템 저장">
        </q-btn>
      </q-card-section>
    </q-card-section>

  <!--item list 출력-->
  <q-card-section>
    <q-list bordered>
    <q-item
      v-for="item in reversedItems"
      :key="item.id"
      @click="togglePurchased(item)"
      class="rounded-border"
      :class="{strikeout:item.purchased, priority:item.highPriority}"
      dense
      padding
      clickable
      v-ripple
    >
        <q-item-section>
          {{ item.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-card-section>


  <!--notify-->
  <q-item-section class="row text-center">
    <q-card-section>
      <span v-if="items.length === 0">
        <h5>모든 상품을 구매하셨군요! 새 상품을 담아보세요!</h5>
      </span>
    </q-card-section>
  </q-item-section>

</template>

<script>
/*
import  { useQuasar }  from  'quasar' //notify를 쓰기위한 몸부림

const $q =  useQuasar ( ) //notify를 쓰기 위한 몸부림

plugins : [
      'Notify' //notify를 쓰기 위한 몸부림
      ]
*/

export default {
  name:"ShoppingList",
  title:"쇼핑 리스트",

  data(){

    return{
      header: "Shopping List App",

      items : [
/*
        { id: 1, label: "10 party hats", purchased: true, highPriority: false },
        { id: 2, label: "2 board games", purchased: true, highPriority: false },
        { id: 3, label: "20 cups", purchased: false, highPriority: true },
*/
      ],

      editing:false,
      newItem:"",
      newItemHighPriority:false,


      /*config: {
        notify : { /*notify를 쓰기 위한 몸부림 */


    }

  },

  computed : {
    reversedItems() {
      return [...this.items].reverse();
    }
  },

  methods :{
    togglePurchased(item){
      item.purchased = !item.purchased;
    },

    doEdit(editing){
      this.editing = editing;
      this.newItem = "";
      this.newItemHighPriority = false;
    },

    async saveItem(){
      if(this.newItem.length == 0) return;
      this.items.push({
        id: this.items.length + 1,
        //이 부분 this.items.length + 1 이었을 때, 2개 이상 입력시 무한증식 에러남 => 오타 고치고 지우니까 멀쩡함; 추후에 에러나면 '1'로 수정할 것
        label: this.newItem,
        highPriority: this.newItemHighPriority,
      });

      //notify
      await this.$q.notify({
          color: "primary",
          icon: "done",
          message: `<span style="color: white"><strong style="color: yellow">${this.newItem}</strong>상품을 담았습니다</span>`,
          html: true,
        });
        this.newItem = "";
        this.newItemHighPriority = false;

    }
  }
}
</script>

<style>
.strikeout{
  text-decoration: line-through;
  color: #b8c2cc;
}
.priority{
  color: #de751f;
  font-weight: 600;
}

</style>
