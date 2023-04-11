<template class="q-pa-md q-gutter-md">
  <q-card-section>Message: {{ msg }}</q-card-section>
  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-separator/>

  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
      ></q-btn>
  </q-card-section>
  <q-separator/>

  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>
  <q-separator/>

  <q-card-section>
      {{ number+1 }}
  </q-card-section>
  <q-separator/>
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator/>
  <q-card-section>
    {{ message.split("").reverse().join("") }}
  </q-card-section>
  <q-separator/>
  <q-card-section :id="`list-${id}`">list-{{ id }}</q-card-section>
  <q-separater/>

  <q-card-section class="text-h6">
      {{ calculationDate() }}
  </q-card-section>
  <q-separator/>

  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator/>
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesom! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator/>
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'c'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <q-separator/>

  <div clss="q-pa-md row items-start">
    <q-btn @click="increment" label="카운트" color="primary"></q-btn>
    <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
  </div>
  <q-separator/>

  <q-card-section>
    <q-input v-model="inputData"
      outlined
      bottom-slots
      label="DebounceEx"
      counter
      :dense="true"
    />
  </q-card-section>
  <q-separator/>

  <q-card-section>책을 가지고 있다 : {{ publishedBooksMessage }}</q-card-section>
  <q-separator/>

  <q-card-section>책을 가지고 있다 : {{ calculateBooksMessage() }}</q-card-section>
  <q-separator/>

  <q-card-section class="text-h6">
    {{ toTitleDate }}
    {{ calculateDate() }}
  </q-card-section>
  <q-separator/>

  <q-card-section class="text-h6">
    {{ fullName }}
  </q-card-section>
  <q-separator/>

  <q-card-section :class="{active:isActive, 'text-h3': hasError}"> change color </q-card-section>

  <q-card-section class="static" :class="{active:isActive, 'text-h3': hasError}"> change color </q-card-section>
    <div class="static active"></div>

  <q-card-section :class="classObject"> chage color </q-card-section>

  <q-card-section :class="classObj"> chage color </q-card-section>


  <q-card-section :class="[activeClass, errorClass]"> change Color </q-card-section>
  <div class="active text-danger"></div>
  <q-card-section :class="[isActive ? activeClass : '', errorClass]"> change color </q-card-section>
  <q-card-section :class="[{active:isAction}, errorClass]"> change color </q-card-section>

  <class-child></class-child>
  <class-child :class="[baz, boo]"></class-child>
  <class-child :class="{ active: isActive }"></class-child>
  <div class="foo bar"></div>
  <div class="foo bar baz boo"></div>
  <div class="foo bar active"></div>

  <!-- MyComponent 템플릿에서 $attrs 속성을 사용 :id="$attrs.id"-->
  <q-card-section :class="{foo:true, barr:true}" :id="$attrs.id">안녕!</q-card-section>
  <class-child id="hi"></class-child>
  <div class="foo bar" id="hi"></div>

  <div :style="{ color: activeColor, fontSize: fontSize + 'px'}"></div>
  <q-card-section :style="styleObject"> Change color </q-card-section>

  <q-card-section :style="[baseStyles, overridingStyles]"> change color </q-card-section>

  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox']}"></div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="ok" dark bordered class="bg-gray-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-show="ok"
      dark
      bordered
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100% )"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md">
    <q-list v-for="(item,idx) in listItems" :key="idx" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>

  <div class="q-pa-md">
    <q-list v-for="(item, index) in listItems" :key="index" bordered separator>
      <q-item-section>
        {{ parentMessage }} - {{ index + 1 }} - {{ item.message }}
      </q-item-section>
    </q-list>
  </div>
  <q-separator/>

  <div class="q-pa-md">
    <q-list v-for="({message}, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ message }} - {{ index + 1 }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>

  <div class="q-pa-md">
    <q-list v-for="(item, index) in tupleListItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section v-for="(childItem, index) in item.children" :key="index">
          <q-item-section>{{ item.message }} - {{ childItem }}</q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>

  <!-- Vue에서 목록을 작성하는 방법 -->
  <div class="q-pa-md">
    <q-list
      v-for="(value, key, index) in myObject"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section>
          {{ index + 1 }}. {{ key }} : {{ value }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>
  <div class="q-pa-md">
    <q-list
      v-for="(value, key) in myObject"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section>
          {{ index + 1 }}. {{ key }} : {{ value }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>
  <div class="q-pa-md">
    <q-list
      v-for="(value, key, index) in myObject"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section>
          {{ index + 1 }}. {{ key }} : {{ value }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>

  <!-- 숫자 범위에 v-for 사용하기 -->
  <div class="q-pa-md row items-start">
    <q-list v-for="n in 10" :key="n" bordered separater>
      <q-item clickable v-ripple>
        <q-item-section>{{ n }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>

  <!-- 컴포넌트에 v-for 사용하기 -->
  <div class="q-pa-md items-start">
    <my-component
      v-for="(item, index) in listItems"
      :key="index"
      :item="item"
      :index="index"
    ></my-component>
  </div>
  <q-separator/>

  <q-card-section>{{ filterItems }}</q-card-section>

  <q-list v-for="n in evenNumbers" :key="n" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section>{{ n }}</q-item-section>
    </q-item>
  </q-list>

  <q-list v-for="(numbers, idex) in sets" :key="index" bordered separator>
    <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
      <q-item-section><q-item-label class="text-h6 text-weight-bolder text-center">{{ n }}</q-item-label></q-item-section>
    </q-item>
  </q-list>

  <q-card-section>{{ reverseNumbers }}</q-card-section>

  <!-- 이벤트 핸들링 : 인라인 핸들러 -->
  <div class="q-pa-md row items-start">
    <q-btn @click="count++" label="카운트" color="primary"></q-btn>
    <q-card-section>Count is : {{ count }}</q-card-section>
  </div>

  <div class="q-pa-md row items-start">
    <!--https://quasar.dev/quasar-plugins/notify#introduction-->
    <q-btn
      @click="greet"
      label="greet"
      color="secondary"
      class="q-ma-sm"></q-btn>
    <!--https://quasar.dev/quasar-plugins/dialog#introduction-->
    <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm"/>
    <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm"/>
    <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm"/>
  </div>
  <q-separator/>

  <!-- 인라인 핸들러에서 메서드 호출하기 -->
  <div class="q-pa-md row items-start">
    <q-btn
      @click="say('안녕')"
      label="안녕이라고 말하기"
      color="secondary"
      class="q-ma-sm"></q-btn>
    <q-btn
      @click="say('잘가')"
      label="잘가라고 말하기"
      color="secondary"
      class="q-ma-sm"></q-btn>
  </div>

  <!-- 인라인 핸들러에서 이벤트 객체 접근하기-->
  <div class="q-pa-md row items-start">
    <q-btn
      @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
      label="아직 양식을 제출할 수 없습니다."
      color="secondary"
      class="q-ma-sm"></q-btn>
    <q-btn
      @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
      label="아직 양식을 제출할 수 없습니다1"
      color="secondary"
      class="q-ma-sm"></q-btn>
  </div>
  <q-separator/>

  <!-- 이벤트 핸들러 -->
  <div class="q-pa-md row items-start">
    <!-- 클릭 이벤트 전파가 중지됩니다 -->
    <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm"/>
    <!-- submit 이벤트가 더 이상 페이지 리로드 하지 않습니다-->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent="doThis"
      class="q-ma-sm">
      <q-input v-model="name"/>
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>
    <!--수식어를 연결할 수 있습니다-->
    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm"/>
    <!--이벤트에 핸들러 없이 수식어만 사용 가능-->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm">
      <q-input v-model="name"/>
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>
    <!--event.target이 엘리먼트 자신일 경우에만 핸들러 실행-->
    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm"/>
  </div>

  <!-- Form 바인딩 -->
  <q-card-section class="col-4">
    <q-input outlinde bottom-slots v-model.lazy="text"
      label="Label" counter :dense="true">
      <template v-slot:prepend>
        <q-icon name="place"/>
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer"/>
      </template>
      <template v-slot:hint> Field hint </template>
    </q-input>
  </q-card-section>
  <input v-model="text">

  <!--기본사용:텍스트-->
  메시지 입력하기 : {{ text }}
  <q-input
    outlined bottom-slots
    v-model.lazy="text" label="Label"
    counter :dense="true">
    <template v-slot:prepend>
      <q-icon name="place"/>
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="text = ''" class="cursor=pointer"/>
    </template>
    <template v-slot:hint> Field hint </template>
  </q-input>

  <span>여러 줄 메세지:</span>
  <p style="white-space: pre-line;">{{ textArea }}</p>
  <div class="q-pa-ma" style="max-width: 300px">
    <q-input
      v-model="textArea"
      filled type="textarea"/>
  </div>

  <!--체크박스-->
  <!--select https://quasar.dev/vue-components/option-groug-->
  <q-card-section class="col-4 q-mt-md">
    <q-option-group
      v-model="group" :options="opts"
      color="green" type="checkbox"/>
  </q-card-section>

  <!--checkbox https://quasar.dev/vue-compoents/radio-->
  <q-card-section class="col-4 q-mt-md">
    <q-radio v-model="color" val="teal" label="Teal" color="teal"/>
    <q-radio v-model="color" val="orange" label="Orange" color="orange"/>
    <q-radio v-model="color" val="red" label="Red" color="red"/>
    <q-card-section>
      {{ color }}
    </q-card-section>
  </q-card-section>

  <!--select https://quasar.dev/vue-components/select-->
  <q-card-section class="col-4">
    <q-select
      filled bottom-slots
      v-model="model" :options="options"
      label="Label" counter
      dense :options-dense="false">
      <template v-slot:prepend>
        <q-icon name="place" @click.stop.prevent/>
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="model = ''"
          class="cursor-pointer"/>
      </template>
      <template v-slot:hini> Field hint </template>
    </q-select>
  </q-card-section>

  <!--multiple-->
  <q-select
    filled v-model="model2"
    multiple :options="options"
    counter max-values="2"
    hint="Max 2 selections" style="width: 250px"/>

  <!--toggle https://quasar.dev/vue-componets/toggle-->
  <q-card-section class="col-4 q-mt-md">
    <q-toggle v-model="value" color="green" label="On Right" true-value="네"
      false-value="아니오"/> {{ value }}
  </q-card-section>

  <!--toggle https://quasar.dev/vue-components/toggle-->
  <q-card-section class="col-4 q-mt-md">
    <q-toggle v-model="value1" color="green" label="On Right" :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"/>
      {{ value1 }}
  </q-card-section>

  <!--라디오-->
  <q-card-section class="col-4 q-mt-md">
    <q-radio v-model="color1" :val="first" label="Teal" color="teal"/>
    <q-radio v-model="color1" :val="second" label="Orange" color="orange"/>
    <q-card-section>
      {{ color1 }}
    </q-card-section>
  </q-card-section>

  <!--Select Option-->
  <select v-model="selected">
    <!--Inline Object riteral-->
    <option :value="{ number: 123 }">123</option>
  </select>

  <!--수식어 : input 대신 change 이벤트 후에 동기화 됨-->
  <input v-model.lazy="msg"/>
  <input v-model.number="age"/>
  <input v-model.trim="msg"/>

  <!-- 감시자 : 기본 예제-->
  <p>
    예/아니오 질문 :
    <input v-model="question"/>
  </p>
  <p>{{ answer }}</p>

  <!--탬플릿 참조-->
  <input ref="input"/>

  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
  <input :ref="(el) => { /* el을 속성이나 ref에 할당*/ }">

  <Child ref="child"/>

  <!--컴포넌트 정의하기-->
  <button @click="count++">당신은 {{ count }}번 클릭했습니다.</button>


  <h1>아래에 자식 컴포넌트가 있습니다.</h1>
  <ButtonCounter/>
  <ButtonCounter/>
  <ButtonCounter/>


  <BlogPost title="Vue와 함께한 나의 여행"/>
  <BlogPost title="Vue로 블로깅하기"/>
  <BlogPost title="Vue가 재미있는 이유"/>

  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    @enlarge-text="postFontSize += 0.1"
  />

  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    />
  </div>

  <AlerBox>
    나쁜 일이 일어났습니다.
  </AlerBox>

  <div class="alert-box">
    <strong>이것은 데모용 에러입니다.</strong>
    <slot />
  </div>

  <!--currentTab이 변경되면 컴포넌트가 변경됩니다.-->
  <component :is="currenTeab"></component>

  <!-- HTML에서 kebab-case -->
  <blog-post post-title="안녕!" @update-post="onUpdatePost"></blog-post>


</template>


<script>

import { date } from 'quasar'
import { nextTick } from 'vue'
//import { debounce } from 'lodash-es'
import { debounce } from 'lodash';
//console은 왜 생겼을까
import { timeStamp } from 'console';
import ClassChild from "components/ClassChild.vue";
import { GREATEST_LOWER_BOUND } from '@jridgewell/trace-mapping';
import Child from './Child.vue'
import ButtonCounter from './ButtonCounter.vue'
import BlogPost from './BlogPost.vue'

/*//감시자 중지하기
const unwatch = this.$watch('foo', callback)
unwatch()*/

const parentMessage = 'Parent'
const listItmes = [

]

plugins: [ 'notify', ]

listItmes.forEach((item, index)=> {
  console.log(parentMessage, itme.message, index)
})

//JavaScript에서 camelCase
const BlogPost1 = {
  props: ['postTitle'],
  emits: ['updatePost'],
  template:`
    <h3>{{ postTitle }}</h3>
    `
}

export default {
  name:'VueEx',
  components:{},
  title:"Vue Basic",

  created(){
    //이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
    this.debouncedClick = _.debounce(this.click, 500)

    //감시자: this.$watch()
   /* this.$watch('question', (newQuestion) => {

    })*/
  },

  components: { ClassChild },

  components: { Child },

  components: { ButtonCounter },

  components: { BlogPost },

  data(){
    return{
      msg: "hello Vue",
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
      linkId: "vue",
      link:{
        to: "http://vuejs.org",
        title: "뷰 공식 사이트",
        label: "Vuejs.org",
      },
      isButtonDisabled: true,

      ok: true,
      number: 1000,
      message:
        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
      id: "genie",

      seen: true,
      awesom: true,
      type: "B",

      //반응형 상태 설정
      methodCount: 1,

      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      },

      inputData:'',

      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },

      str:'',

      firstName: 'John',
      lastName: 'Doe',

      isActive: true,
      hasError: false,

      classObject: {
        active: true,
        'text-h3': false
      },

      isActive : true,
      error: null,

      activeClass: 'active',
      errorClass: 'text-danger',

      activeColor: 'red',
      fontSize: 30,

      styleObject: {
        color: 'red',
        fontSize: '13px'
      },

      baseStyle:{
        textDecorationLine:'underline',
        textDecorationThickness: '5px',
        textDecorationColor: 'red',
      },
      overridingStyles:{
        color:'blue',
        fontSize:'35px',
      },

      ok: true,

      listItems: [{ message: "Foo" }, { message: "Bar" }],

      parentMessage: 'Parent',
      listItems: [{ message: "Foo" }, { message: "Bar" }],

      tupleListItems: [{ message: "Foo", children:["baby"]}, { message: "Bar", childred:['child'] }],

      myObject: {
        title: 'Vue에서 목록을 작성하는 방법',
        author: '홍길동',
        publishedAt: '2016-04-10'
      },

      items: [{ message: "Foo" }, { message: "Bar" }],

      numbers: [1,2,3,4,5],
      sets: [[1,2,3,4,5], [6,7,8,9,10]],

      count: 0,

      name: "Vue.js",

      text: "",
      textArea: "",

      group: ["op1"],
      opts: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 2",
          value: "op2",
        },
        {
          label: "Option 3",
          value: "op3",
        },
      ],

      color:"",

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      model: null,

      model2: [],

      value:"네",

      value1:"No",
      dynamicTrueValue: "Yes",
      dynamicFalseValue: "No",

      color1:"",
      first:"첫번재 선택",
      second:"두번째 선택",

      //감시자 : 기본 예제
      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.',

      list: [
        /*...*/
      ],

      //컴포넌트 정의하기
      count: 0,

      //일반적인 부모 컴포넌트에서의 게시물 배열
      posts: [
       /* {id: 1, title: 'Vue와 함께한 나의 여행'},
        {id: 2, title: 'Vue로 블로깅하기'},
        {id: 3, title: 'Vue가 재미있는 이유'}*/
      ],
      postFontSize: 1,

    }
  },

  //이런식으로도 컴포넌트 정의 가능
  template:`
  <button @click="count++">
    당신은 {{ count }} 번 클릭했습니다.
  </button>`,



  computed:{
    //계산된 값을 반환하는 속성
    publishedBooksMessage(){
      //`this`는 컴포넌트 인스턴스를 가리킵니다
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    toTitleDate() {

    const timeStamp = Date.now();
    const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
    return formattedString;
    },

    fullName:{
      get(){
        return this.firstName+ ' ' + this.lastName
      },
      set(newVal){
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    },

    classObj() {
      return {
        active: this.isActive && !this.error,
        'text-h3': this.error && this.error.type === 'fatal'
      }
    },

    filterItems(){
      return (this.items = this.items.filter((item)=>
        item.message.match(/foo/)
        ));
    },

    evenNumbers(){
      return this.numbers.filter(n => n % 2 === 0)
    },

    reverseNumbers(){
      const numbers = this.numbers;
      return [...numbers].reverse();
    },


  },

  /*//콜백 실행 타이밍
  data: () => ({ count: 0}),*/

  watch:{
    inputData: debounce(function(newVal, oldVal){
      //처리로직 작성
      console.log(newVal, oldVal);
    }, 500),

    //감시자 : 기본 예제 // 질문이 변경될 때마다 이 함수가 실행됩니다.
    question(newQuestion, oldQuestion){
      if(newQuestion.includes('?')){
        this.getAnswer()
      }
    },

    'some.nested.key'(newValue){
      //이 형식으로는 단순 경로만 지정 가능. 표현식 지원X
    },

    /*  //깊은 감시자
    someObject: {
      handler(newValue, oldValue) {
        //참고 : someObject가 다른 객체로 교체되지 않는 한, newValue와 oldValue는 같다.
        //둘 다 동일한 객체를 참고하고 있기 때문임.
      },
      deep: true
    }, */

    /*
    question: {
      handler(newQuestion){
        //이제 컴포넌트 생성 시, `beforeCreate`와 `created`훅 사이에 한 번 실행됨
      },
      //열성적으로 콜백 실행
      immediate: true
    },*/

    /* //콜백 실행 타이밍
    key:{
      handler() {},
      flush: 'post'
    },*/

    /* //감시자 : 콜백 실행 타이밍
    count: {
      handler(val, preVal){
        console.log('변경이 감지됨!', val, preVal)
      },
      flush: 'sync'
    },*/


  },


  mounted(){
    console.log(this.methodCount) //=>1
    this.methodCount = 2
    console.log(this.methodCount) //=>2

    this.increment()

    this.error = {};
    this.error.type = 'fatal';

    console.log('컴포넌트가 마운트 됐습니다.') //생명주기 훅 등록하기

    //ref로 접근하기
    this.$refs.input.focus()

    console.log(this.$refs.items)
  },


  unmounted(){
    //컴포넌트가 제거된 후, 타이머를 취소하는 것은 좋은 방법입니다.
    this.debouncedClick.cancel()
  },


  methods:{
      calculationDate(){
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
        return formattedString;
      },

      increment(){
        this.methodCount++
        console.log('methodCount', this.methodCount);

        this.count++
        nextTick(() => {
          //업데이트 된 DOM에 접근가능
        })
      },
      increment: () => {
        // 나쁨: 여기서 `this`에 접근할 수 없습니다!
      },

      mutateDeeply() {
        //변경 사항이 감지됩니다.
        this.obj.nested.count++
        this.obj.arr.push('baz')
      },

      click: debounce(function () {
      // ... 클릭에 응답 ...
      }, 500),

      click() {
        //...클릭에 응답...
      },

      //컴포넌트내에서
      calculateBooksMessage(){
        return this.author.books.length > 0 ? 'Yes' : 'No'
      },

      calculateDate(){
        setInterval(()=>{
          const timeStamp = Date.now();
          const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
          this.str = formattedString;
        }, 1000);
        return this.str; //binding 되는 변수 필요
      },

      even(numbers){
        return numbers.filter(number => number % 2 === 0)
      },

      greet(e) {
        this.$q.notify({
          message: `hello ${this.name}!`,
          caption: "5 minutes ago",
          color: "secondary",
        });
      },

      say(message){
        alert(message)
      },

      warn(message, event){
        if (event) {
          event.prevetDefault();
          this.$q
          .dialog({
            title: "Alert",
            message: `${message}`,
          })
          .onOk(() => {
            //console.log('OK')
          })
          .onDismiss(() => {
            //console.log('I am triggered on both OK and Cancel')
          });
        }
      },

      doThis(event){
        console.log(event)
        this.$q.notify({
          color: "green-5",
          textColor: "white",
          icon: "warning",
          message: `doThis pointerType`,
        });
        console.log("doThis pointerType", event);
      },
      doThat(event){
        this.$q.notify({
          color: "yellow-5",
          textColor: "white",
          icon: "warning",
          message: `doThat pointerType`,
        });
        console.log("doThat event", event);
      },

      //감시자 : 기본 예제
      async getAnswer(){
        this.answer = '생각 중...'
        try{
          const res = await fetch('https://yesno.wtf/api')
          this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
        } catch (error) {
          this.answer = '에러! API에 연결할 수 없습니다.' + error
        }
      },

      /* //감시자 : 콜백 실행 타이밍
      increment() {
        this.count++
        //이어서 callback이 실행됨 아래도 동일
        this.count++
        this.count++
      },*/


  },
}
</script>

<style scoped>
    .active{
      color:red;
    }

    #hi{
      font-size:3em;
      color:darkorchid;
    }

    .my-card{
      width: 100%;
      max-width: 250px;
    }

    .alert-box{
      color:red;
    }
</style>
