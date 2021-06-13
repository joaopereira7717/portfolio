import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-fourofour',
  templateUrl: './fourofour.component.html',
  styleUrls: ['./fourofour.component.css'],
})
export class FourofourComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGitHub = faGithub;
}
