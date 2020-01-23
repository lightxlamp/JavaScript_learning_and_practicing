var app = new Vue({
  el: "#app",
  data: {
    message: "Привет, Vue!"
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Вы загрузили эту страницу: " + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Изучить JavaScript" },
      { text: "Изучить Vue" },
      { text: "Создать что-нибудь классное" }
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message_app5: "АБВГДЕЖЗИКЛМНОПРСТ"
  },
  methods: {
    reverseMessage: function() {
      this.message_app5 = this.message_app5
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Текст из input поля автоматом пишется сюда"
  }
});

// Определяем новый компонент под именем todo-item
Vue.component("todo-item", {
  // Компонент todo-item теперь принимает
  // "prop", то есть входной параметр.
  // Имя входного параметра todo.
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    dayPlanList: [
      { id: 0, text: "Сходить на работу" },
      { id: 1, text: "Поужинать" },
      { id: 2, text: "Поиграть в Overwatch" }
    ]
  }
});

app.message += " Стасик тут";
app3.seen = false;
app4.todos.push({ text: "Элемент добавлен в список через Push позже" });
