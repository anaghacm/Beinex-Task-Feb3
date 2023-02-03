import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy  {
  order: number = 1;
  example:string ='';

  constructor() {
    this.example='<p><strong>Constructor()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
   }

  ngOnChanges(changes: SimpleChanges) {
    this.example+='<p><strong>ngOnChanges()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngOnInit(): void {
    this.example+='<p><strong>ngOnInit()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngDoCheck() {
    this.example+='<p><strong>ngDoCheck()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngAfterContentInit() {
    this.example+='<p><strong>ngAfterContentInit()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngAfterContentChecked() {
    this.example+='<p><strong>ngAfterContentChecked()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngAfterViewInit() {
    this.example+='<p><strong>ngAfterViewInit()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngAfterViewChecked() {
    this.example+='<p><strong>ngAfterViewChecked()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }

  ngOnDestroy() {
    this.example+='<p><strong>ngOnDestroy()</strong> <i class="fa-solid fa-share"></i> order : '+this.order+'</p>';
    this.order++;
  }
}
