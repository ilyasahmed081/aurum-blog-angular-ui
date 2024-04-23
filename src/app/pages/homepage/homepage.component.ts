import { Component } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  cards: any = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1511307172940-38ec278f7ce2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2014 May 28',
      title: 'The Bonnaroo Experience',
      text: 'This did not seem to encourage the witness at all; he kept shifting from one foot to the other, looking uneasily at the Queen.',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1489782419474-4d4221dc5b10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2014 May 27',
      title: 'Anthology of Interest',
      text: 'What kind of a father would I be if I said no? Leela, Bender, we are going grave robbing. Why am I sticky and naked?',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1520475244260-7fcbc6e7c8f7?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2014 May 26',
      title: 'Proscuitto turkey shankle ',
      text: 'Capicola short loin ham hock salami ground round proscuitto pork choup sausage fatback shoulder meatball biltong flank leberkas.',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1517601016600-fb06e68c476c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2014 May 25',
      title: 'The Phantom Menace',
      text: 'First place chick is hot, but has an attitude, does not date magicians. Michael! Steve Holt! Well, what do you except, mother?',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2014 May 24',
      title: 'Arrested Development',
      text: 'All right, Well, take care of yourself, Han. I guess thats what you are best at, aint it? I suggest you try it again, Luke.',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1446729444801-31245ddba81a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2014 May 23',
      title: 'Facinated by Rome',
      text: 'A sudden commotion among the goats brought the boys to their feet. The dogs about the fire rushed to join there.',
    },
  ];
}
