import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy  {
  order: number = 1;
  example:string ='';
  @Input() counter!:number;
  @Output() childDestroy = new EventEmitter;
  public parentData :any;
  onInit!: string;
  doCheck: boolean=false;
  afterContentInit: boolean=false;
  afterContentChecked: boolean=false;
  afterViewInit: boolean=false;
  afterViewChecked: boolean=false;
  


  constructor() {
    this.example='<p><strong>Constructor()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
   }

  ngOnChanges(changes: SimpleChanges) {
    const dataFromParent : SimpleChange = changes['counter'];
    this.parentData = dataFromParent;
    console.log('ngOnChange and order : ',this.order);
    this.order++;
  }

  ngOnInit(): void {
    this.onInit =  "childOnInit";
    console.log('ngOnInit and order : ',this.order);
    this.order++;
  }

  ngDoCheck() {
    this.doCheck =  true;
    console.log('ngDoCheck and order : ',this.order);
    this.order++;
  }

  ngAfterContentInit() {
    this.afterContentInit =  true;
    console.log('ngAfterContentInit and order : ',this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    this.afterContentChecked =  true;
    console.log('ngAfterContentChecked and order : ',this.order);
    this.order++;
  }

  ngAfterViewInit() {
    this.afterViewInit =  true;
    console.log('ngAfterViewInit and order : ',this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    this.afterViewChecked =  true;
    console.log('ngAfterViewChecked and order : ',this.order);
    this.order++;
  }

  ngOnDestroy() {
    this.childDestroy.emit('childDestroyed');
    console.log('ngOnDestroy and order : ',this.order);
    this.order++;
  }
}
