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
      currentMex: 0,
    },
    methods: {
      addNumber: function() {
        this.currentMex++;
        console.log(this.currentMex);
      }
    }



  }
);
