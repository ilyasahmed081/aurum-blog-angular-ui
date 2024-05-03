import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  cards: any = [
    {
      id: 1,
      img: 'https://rb.gy/rq0rwc',
      date: '2014 May 28',
      title: 'The Bonnaroo Experience',
      text: 'This did not seem to encourage the witness at all; he kept shifting from one foot to the other, looking uneasily at the Queen.',
    },
    {
      id: 2,
      img: 'https://rb.gy/up1ulj',
      date: '2014 May 27',
      title: 'Anthology of Interest',
      text: 'What kind of a father would I be if I said no? Leela, Bender, we are going grave robbing. Why am I sticky and naked?',
    },
    {
      id: 3,
      img: 'https://rb.gy/5dysna',
      date: '2014 May 26',
      title: 'Proscuitto turkey shankle ',
      text: 'Capicola short loin ham hock salami ground round proscuitto pork choup sausage fatback shoulder meatball biltong flank leberkas.',
    },
    {
      id: 4,
      img: 'https://rb.gy/4npu3n',
      date: '2014 May 25',
      title: 'The Phantom Menace',
      text: 'First place chick is hot, but has an attitude, does not date magicians. Michael! Steve Holt! Well, what do you except, mother?',
    },
    {
      id: 5,
      img: 'https://rb.gy/q6v9w8',
      date: '2014 May 24',
      title: 'Arrested Development',
      text: 'All right, Well, take care of yourself, Han. I guess thats what you are best at, aint it? I suggest you try it again, Luke.',
    },
    {
      id: 6,
      img: 'https://rb.gy/6lwzvv',
      date: '2014 May 23',
      title: 'Facinated by Rome',
      text: 'A sudden commotion among the goats brought the boys to their feet. The dogs about the fire rushed to join there.',
    },
  ];
}
