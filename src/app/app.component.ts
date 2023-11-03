import { Component, ViewChild } from '@angular/core';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SyncfusionImageEditor';
  base64: string = "";
  width: number;
  height: number;
  imageActualHeight: number;
  imageActualWidth: number;
  url: string = 'assets/images/cat-7344042_960_720.jpg';
  @ViewChild("imageEditor") imageEditorObj: ImageEditorComponent | undefined;
  async openImage() {
    debugger
     var result = await this.loadAndProcessImage(this.url);
    this.imageEditorObj?.open(result.base64);
  }
  async loadAndProcessImage(url: string): Promise<{ width: number, height: number, base64: string }> {
    try {
      const canvas = document.getElementById('ej2-image-editor_0_lowerCanvas') as HTMLCanvasElement;
      var context = canvas.getContext('2d', { willReadFrequently: true });
      const originalImage = new Image();
      context.clearRect(0, 0, canvas.width, canvas.height);
      originalImage.onload = () => {
        context.drawImage(originalImage, 0, 0, canvas.width, canvas.height);  
      };
      originalImage.setAttribute('crossorigin', 'anonymous'); // works for me
      originalImage.src = url;
      const base64Image = canvas.toDataURL();
      this.base64 = base64Image;
    } catch (error) {
      console.error(error);
    }
    return { width: this.width, height: this.height, base64: this.base64 };
  }
}
