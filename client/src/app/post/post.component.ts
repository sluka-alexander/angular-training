import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit, OnChanges {

  @Input() myPost: Post
  @Output() onRemove = new EventEmitter<number>()

  constructor() { }

  removePost() {
    this.onRemove.emit(this.myPost.id);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("onChange", changes);
  }

  ngOnInit(): void {
    console.log("onInit")
  }

}
