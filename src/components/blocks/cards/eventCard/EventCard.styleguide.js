'use strict';

import React from 'react';
import EventCard from './EventCard';
import Plus from '../../../elements/buttons/plus/Plus';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'EventCard',
    description: '...',
    code: `
// With Plus element
<EventCard name="[event_name]" imgURL="[image_url]">
  <Plus/>
</EventCard>

// Without Plus element
<EventCard name="[event_name]" imgURL="[image_url]" />
    `,
    exampleComponent: EventCard
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <div className="sg-inline-list">
          <EventCard size="small" label="Live" name="Event de la mort qui tue avec un titre bien trop long!" imgURL="/assets/img/no-cover.jpg" />
          <EventCard size="small" name="Event de la mort qui tue avec un titre bien trop long!" imgURL="/assets/img/no-cover.jpg" />
            <EventCard size="small" date="MAY, 26 2016 - 1:30 PM" isOnline={true} name="Event online" imgURL="/assets/img/no-cover.jpg" />
            <EventCard size="small" date="MAY, 26 2016 - 1:30 PM" isOnline={false} name="Event offline" imgURL="/assets/img/no-cover.jpg" />
        </div>
        <div className="sg-inline-list">
          <EventCard name="Event de la mort qui tue!" imgURL="/assets/img/no-cover.jpg">
            <Plus/>
          </EventCard>
          <EventCard name="Event de la mort qui tue avec un titre bien trop long!" imgURL="/assets/img/no-cover.jpg">
            <Plus/>
          </EventCard>
          <EventCard name="Event de la mort qui tue avec un titre bien trop long!" imgURL="/assets/img/no-cover.jpg" />
          <EventCard label="Live" name="Event de la mort qui tue avec un titre bien trop long!" imgURL="/assets/img/no-cover.jpg">
            <Plus/>
          </EventCard>
        </div>
      </div>
    );
  }
}
