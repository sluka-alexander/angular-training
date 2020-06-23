import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('inputRef', { static: true }) inputRef: ElementRef

  title: string;
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    if(this.title.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      }
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
  focusRef() {
   this.inputRef.nativeElement.focus();
  }
}
