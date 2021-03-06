import { Component, OnInit, ViewChild } from '@angular/core';
import { IFile } from '../../interfaces/interfaces';

@Component({
  selector: 'app-txt-file-open',
  templateUrl: './txt-file-open.page.html',
  styleUrls: ['./txt-file-open.page.scss'],
})
export class TxtFileOpenPage implements OnInit {
  @ViewChild('fileInput') fileInput;
  file: IFile;
  constructor() {
    this.file = {
      name: '',
      content: '',
      type: '',
      size: 0
    };
  }

  ngOnInit() {
  }

  openFile() {
    this.fileInput.el.querySelector('input').click();
  }

  onClickClearVariables(e = null) {
    this.file.name = '';
    this.file.content = '';
    this.file.type = '';
    this.file.size = 0;
    this.fileInput.value = '';
  }

  onChangeFile(event) {
    console.log(event.target.files);
    const files = event.target.files;
    if (files && files.length > 0) {
      const file: File = files.item(0);
      this.file.name = file.name;
      this.file.type = file.type;
      this.file.size = file.size;
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.file.content = reader.result as string;
      };
    }
  }
}
