const app = new Vue (
  {
    el: "#root",
    data: {
      contacts: [
      	{
      		name: 'Michele',
      		avatar: 'https://www.jakweb.ch/hd3//package/modern/avatar/5.jpg',
      		// visible: true,
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
      ],
    }

  }
);
