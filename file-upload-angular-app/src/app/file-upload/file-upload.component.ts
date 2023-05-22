import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    this.fileService.uploadFile(file).subscribe(response => {
      console.log(response);
    });
  }

}
