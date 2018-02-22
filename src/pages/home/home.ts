import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import { SpeechKit } from '@ionic-native/speechkit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ttsInput: string;

  constructor(
    private _platform: Platform,
    private _speechKit: SpeechKit
  ) { }

  speak() {
    this._platform.ready().then(() => {
      this._speechKit.tts(this.ttsInput, 'ENG-GBR')
        .then((s) => console.log(s))
        .catch((e) => console.error(e));
    });
  }
}
