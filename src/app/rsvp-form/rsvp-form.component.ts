import { Component, OnInit } from '@angular/core';
import { Rsvp } from 'src/app/rsvp';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.scss']
})

export class RsvpFormComponent {

  attendances = ['All events', 'Welcome dinner only',
            'Main ceremony only', 'Unable to attend'];

  model = new Rsvp(18, '', '', '', '', '');

  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newRsvp() {
    this.model = new Rsvp(42, '', '', '', '', '');
  }
}
