import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public counter: number = 0;
  childStatus!: string;
  public child = true;

  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.counter++;
  }
  destroy() {
    this.child = false;
  }

  openChild() {
    this.child = true;
    this.counter=0;
    this.childStatus = "available";
  }
  childDestroy(event: string) {
    this.childStatus = event;
    this.cd.detectChanges();
  }
}
