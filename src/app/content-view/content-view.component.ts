
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { Subscription, timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ifError } from 'assert';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit, AfterViewInit {
  content: string;
  constructor(private route: ActivatedRoute) { }
  contents: string[];
  subscription: Subscription;
  statusText: string;
  @ViewChild('paperFrame') iframe: ElementRef;


  ngOnInit() {
    console.log('CONTET_VIEW:ROUTE:', this.route);
    this.route.data.subscribe(data => {
      // this.content = data['contentString'];
      this.content = this.splitUrl(data['contentString']);
    });

  }

  ngAfterViewInit() {
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;

    this.subscription = timer(0, 100).pipe(
    ).subscribe(result => {

      let fr = document.getElementById('iframe') as HTMLIFrameElement;
      console.log(fr.querySelector('story-headline'));
    });

    console.log(doc);
  }

  splitUrl(str: string): string {
    return str.split('-').join(' ');
  }

  onLoadHandler() {
    console.log('onload');
  }





}
