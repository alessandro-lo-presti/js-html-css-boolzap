var app = new Vue({
  el: "#app",
  data: {
    user:{
      name: "Jane",
      img: "img/avatar_io.jpg"
    },
    contacts: [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        current_chat: true
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        current_chat: false
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        current_chat: false
      },
      {
        name: "Giorgio",
        img: "img/avatar_4.jpg",
        current_chat: false
      }
    ]
  },
  methods: {
    // cambiare utente in chatbox
    changeChat(index) {
      if(this.contacts[index].current_chat != true) {

        this.contacts.forEach((element) => {
          if(element.current_chat == true) {
            element.current_chat = false;
          }
        });

        this.contacts[index].current_chat = true;
      }
    }
  }
});
