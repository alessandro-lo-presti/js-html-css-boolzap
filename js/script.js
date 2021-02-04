var app = new Vue({
  el: "#app",
  data: {
    notification: false,
    user:{
      name: "Gianna",
      img: "img/avatar_io.jpg"
    },
    userMessage: "",
    search: "",
    contacts: [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        current_chat: true,
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
    ],
    searchContacts: []
  },
  created() {
    moment.locale('it');
  },
  updated() {
    this.scrollBottom();
  },
  methods: {

    // accendere/spegnere notifiche
    switchNotification() {
      (this.notification) ? this.notification = false : this.notification = true;
    },

    // filtro per la ricerca
    contactsFilter() {
      const search = this.search.toLowerCase();

      this.searchContacts = this.contacts.filter((element) =>{
        if(search == ""){
          element.visible = true;
        }
        else {
          let visibility = false;
          const iLetters=[];
          const e = element.name.toLowerCase()

          // pusho in iLetters gli indici delle lettere uguali alla prima dell'input
          for(let i = 0; i < e.length; i++) {
            if (e[i] == search.charAt(0)) {
              iLetters.push(i);
            }
          };

          // per ogni indice che rispetta la condizione ottengo una sottostringa
          iLetters.forEach((i) => {
            // controllo per non superare la lungezza dell'array
            if( (i + search.length ) <= element.name.length) {
              element.name.toLowerCase().substring(i, i + search.length) == search ? visibility = true : visibility = false;
            }
          });

          element.visible = visibility;
        }

      });
    },

    // cambiare utente in chatbox
    changeChat(contact) {
      if(!contact.current_chat) {
        this.contacts.forEach((element) => {
          if(element.current_chat == true) {
            element.current_chat = false;
          }
        });
        contact.current_chat = true;
      }
    },

    // risposta del contatto
    sendContactMessage(contact) {
      const timeMessage = moment().format('L') + " " + moment().format('LT');
      const newMessage = {
        date: timeMessage,
        text: "Ok",
        status: "received",
        setting: false
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
          status: "sent",
          setting: false
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
    },

    // scroll in basso dopo l'invio dei messaggi
    scrollBottom() {
      const scroll = document.getElementById("chat");
      scroll.scrollTop = scroll.scrollHeight;
    }

  }
});
