import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  base64: string = "Base64...";
  fileSelected?: Blob;
  imageUrl?: string;

  constructor(private sant: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  onSelectNewFiles(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.fileSelected = fileList[0];

      this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
      this.base64 = "Base64...";
    }
  }

  convertFileToBase64(): void {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    }

  }
}



