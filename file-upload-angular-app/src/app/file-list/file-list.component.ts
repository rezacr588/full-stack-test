import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(response => {
      this.files = response;
    });
  }

}
