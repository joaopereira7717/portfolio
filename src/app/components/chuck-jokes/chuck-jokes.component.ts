import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AskChuckService } from 'src/app/services/ask-chuck.service';

@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.css'],
})
export class ChuckJokesComponent implements OnInit {
  //chuckS : AskChuckService;
  constructor(private ChuckService: AskChuckService) {
    // this.chuckS = ChuckService;
  }

  ngOnInit(): void {}

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGitHub = faGithub;

  piada: string = 'Wait for it';

  resultado: any;
  piadas: any;

  getJoke() {
    //this.piada = this.ChuckService.piadaDoServico;
    this.ChuckService.getJoke().subscribe((data) => {
      this.resultado = data;
      this.piada = this.resultado.value;
    });
  }

  getMorePiadas(valorAPesquisar: string) {
    this.ChuckService.getJokeFromCat(valorAPesquisar).subscribe((data) => {
      this.piadas = data;
    });
  }
}
