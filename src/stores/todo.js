import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from 'quasar';


export default defineStore("useTodo", {
  state: () =>({
    tasks: [],
  }),

  getters : {

  },

  actions : {
    insertTodo(title){
      if(this.tasks){
        this.tasks.unshift({
          id: uid(),
          title,
          done: 'N'
        });
      }else{
        this.tasks=[];
        this.tasks.push({
          id: uid(),
          title,
          done: 'N'
        })
      }

      LocalStorage.set("todo", this.tasks);
    },

    removeTodo(id){
      //배열 안 오브젝트일때 idx
      const idx = this.tasks.findIndex(task=>task.id == id);
      //삭제 array.splice( 시작 인덱스, 제거 인덱스, 추가요소)
      this.tasks.splice(idx, 1);
      LocalStorage.set("todo", this.tasks);
    },

    listTodo(){
      this.tasks = LocalStorage.getItem("todo");
    },

    editTodo(item){
      const idx = this.tasks.findIndex(task=>task == item);
      item.done = 'N';
      this.tasks.splice(idx, 1, item);
      LocalStorage.set("todo", this.tasks);
    }

  }

})
