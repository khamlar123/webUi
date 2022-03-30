import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modal: any;
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
