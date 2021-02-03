var app = new Vue({
  el: "#app",
  data: {
    notification: false,
    user:{
      name: "Gianna",
      img: "img/avatar_io.jpg"
    },
    userMessage: "",
    contacts: [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        current_chat: true,
        messages: [
          {
            date:   '10/01/2020   15:30',
            text:   'Hai   portato   a   spasso   il   cane?',
            status:   'sent',
            setting: false
          },
          {
            date:   '10/01/2020   15:50',
            text:   'Ricordati   di   dargli   da   mangiare.', status:   'sent',
            setting: false
          },
          {
            date:   '10/01/2020   16:15',
            text:   'Tutto   fatto!',
            status:   'received',
            setting: false
          }
        ]
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        current_chat: false,
        messages: [
          {
            date:   '20/03/2020   16:30',
            text:   'Ciao   come   stai?',
            status:   'sent',
            setting: false
          },
          {
            date:   '20/03/2020   16:30',
            text:   'Bene   grazie!   Stasera   ci   vediamo?',
            status:   'received',
            setting: false
          },
          {
            date:   '20/03/2020   16:35',
            text:   'Mi   piacerebbe   ma   devo   andare   a   fare   la   spesa.',
            status:   'sent',
            setting: false
          }
        ]
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        current_chat: false,
        messages: [
          {
            date:   '28/03/2020   10:10',
            text:   'La   Marianna   va   in   campagna', status:   'received',
            setting: false
          },
          {
            date:   '28/03/2020   10:20',
            text:   'Sicuro   di   non   aver   sbagliato   chat?',
            status:   'sent',
            setting: false
          },
          {
            date:   '28/03/2020   16:15',
            text:   'Ah   scusa!',
            status:   'received',
            setting: false
          }
        ]
      },
      {
        name: "Giorgio",
        img: "img/avatar_4.jpg",
        current_chat: false,
        messages: [
          {
            date:   '10/01/2020   15:30',
            text:   'Lo   sai   che   ha   aperto   una   nuova   pizzeria?',
            status:   'sent',
            setting: false
          },
          {
            date:   '10/01/2020   15:50',
            text:   'Si,   ma   preferirei   andare   al   cinema',
            status:   'received',
            setting: false
          }
        ]
      },
    ]
  },
  created() {
    moment.locale('it');
  },
  methods: {

    // accendere/spegnere notifiche
    switchNotification() {
      console.log(this.notification);
      (this.notification) ? this.notification = false : this.notification = true;
    },

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
    },

    // risposta del contatto
    sendContactMessage(contact) {
      const timeMessage = moment().format('L') + " " + moment().format('LT');
      const newMessage = {
        date: timeMessage,
        text: "ok",
        status: "received"
      };
      contact.messages.push(newMessage);
    },

    // invio messaggio dell'utente
    sendUserMessage(contact) {
      if(this.userMessage != "") {
        const timeMessage = moment().format('L') + " " + moment().format('LT');
        const newMessage = {
          date: timeMessage,
          text: this.userMessage,
          status: "sent"
        };
        contact.messages.push(newMessage);
        setTimeout(this.sendContactMessage, 1000, contact);
        this.userMessage = "";
      }
    },

    // switch impostazioni messaggio
    switchSettingMessage(message) {
      message.setting ? message.setting = false : message.setting = true;
    },

    // elimina messaggio
    deleteMessage(contact, index) {
      contact.messages.splice(index, 1);
      /*
        Visualizzazione chat vuota
      */
    }

  }
});
