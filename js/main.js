const app = new Vue (
  {
    el: "#root",
    data: {
      sentClass: 'sent_mess',
      receivedClass: 'received_mess',
      contacts: [
        // Oggetto Michele
      	{
      		name: 'Michele',
      		avatar: 'https://www.jakweb.ch/hd3//package/modern/avatar/5.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},

        //Oggetto Fabio
      	{
      		name: 'Fabio',
      		avatar: 'https://assets.puzzlefactory.pl/puzzle/249/520/original.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},

        //Oggetto Samuele
      	{
      		name: 'Samuele',
      		avatar: 'https://www.vanzzptotbv.nl/eigen/img/avatars/s6.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},

        //Oggetto Luisa
      	{
      		name: 'Luisa',
      		avatar: 'https://cdn5.vectorstock.com/i/thumb-large/50/44/woman-portrait-cartoon-avatar-vector-30245044.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ],
      //Fine array contacts
      currentChat: 0,
      newMessage: {},
      myNewMessage: '',
      newReceived: {},
      yourNewMessage: '',
      searchNameContact: '',

    },
    methods: {

      chat: function(index) {
        this.currentChat = index;
      },

      sendMessage: function() {
        //Devo creare una var che mi faccia entrare nell'array messages
        let objnewMessage = this.contacts[this.currentChat].messages;
        console.log(objnewMessage);

        if(this.myNewMessage == '') {
          alert("Attenzione!Non puoi inviare un messaggio vuoto!")
        } else {
          this.newMessage.text = this.myNewMessage;
          this.myNewMessage = '';
          this.newMessage.status = 'sent';
          this.newMessage.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
          objnewMessage.push(this.newMessage);

          setTimeout(
            () => {
              this.newReceived.text = 'ok!';
              this.newReceived.status = 'received';
              this.newReceived.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
              objnewMessage.push(this.newReceived);
            }
            ,1000)
        }
      },

      search: function() {
        this.contacts.forEach(
          (element) => {
           element.visible = false; //Parto dal presupposto che sia falso per poi portarlo a vero con un if
           if(element.name.includes(this.searchNameContact)) {
             element.visible = true;
           }
           console.log(element.visible);
          }
        );
      },

      removeMessage: function(index) {
        let objnewMessage = this.contacts[this.currentChat].messages;
        objnewMessage.splice(index, 1);
      }

    }


  }
);
