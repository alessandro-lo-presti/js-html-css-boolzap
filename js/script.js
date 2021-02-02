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
        current_chat: true,
        messages: [
          {
            date:   '10/01/2020   15:30',
            text:   'Hai   portato   a   spasso   il   cane?',
            status:   'sent'
          },
          {
            date:   '10/01/2020   15:50',
            text:   'Ricordati   di   dargli   da   mangiare', status:   'sent'
          },
          {
            date:   '10/01/2020   16:15',
            text:   'Tutto   fatto!',
            status:   'received'
          }
        ]
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        current_chat: false,
        messages: [
          {
            date:   '20/03/2020   16:30:00',
            text:   'Ciao   come   stai?',
            status:   'sent'
          },
          {
            date:   '20/03/2020   16:30:55',
            text:   'Bene   grazie!   Stasera   ci   vediamo?',
            status:   'received'
          },
          {
            date:   '20/03/2020   16:35:00',
            text:   'Mi   piacerebbe   ma   devo   andare   a   fare   la   spesa.',
            status:   'sent'
          }
        ]
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        current_chat: false,
        messages: [
          {
            date:   '28/03/2020   10:10:40',
            text:   'La   Marianna   va   in   campagna', status:   'received'
          },
          {
            date:   '28/03/2020   10:20:10',
            text:   'Sicuro   di   non   aver   sbagliato   chat?',
            status:   'sent'
          },
          {
            date:   '28/03/2020   16:15:22',
            text:   'Ah   scusa!',
            status:   'received'
          }
        ]
      },
      {
        name: "Giorgio",
        img: "img/avatar_4.jpg",
        current_chat: false,
        messages: [
          {
            date:   '10/01/2020   15:30:55',
            text:   'Lo   sai   che   ha   aperto   una   nuova   pizzeria?',
            status:   'sent'
          },
          {
            date:   '10/01/2020   15:50:00',
            text:   'Si,   ma   preferirei   andare   al   cinema',
            status:   'received'
          }
        ]
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
