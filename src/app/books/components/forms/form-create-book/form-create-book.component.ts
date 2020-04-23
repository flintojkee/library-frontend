import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CreateBookForm, IFormComponent, formProperties } from '@library/app/models/forms';
import { FormGroup, AbstractControl } from '@angular/forms';
import { validateForm } from '@library/app/shared/decorators';
import { BaseFormComponent } from '@library/app/shared/utils';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'lbr-form-create-book',
  templateUrl: './form-create-book.component.html',
  styleUrls: ['./form-create-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreateBookComponent extends BaseFormComponent<CreateBookForm>
  implements OnInit, IFormComponent<CreateBookForm>, formProperties<CreateBookForm>, OnDestroy {
  name: AbstractControl;
  isbn: AbstractControl;
  publishingHouse: AbstractControl;
  publishingYear: AbstractControl;
  city: AbstractControl;
  numberOfPages: AbstractControl;
  price: AbstractControl;
  authors: AbstractControl;
  numberOfInstances: AbstractControl;
  category: AbstractControl;
  description: AbstractControl;
  pictureFile: AbstractControl;
  capturedPicture: string;
  constructor(private camera: Camera) {
    super();
  }

  ngOnInit() {
    this.initFormControls(Object.getOwnPropertyNames(new CreateBookForm()));
  }
  ngOnDestroy() {}
  readURL(file) {
    const reader = new FileReader();
    this.pictureFile.setValue(file[0]);
    reader.onload = (e) => {
      this.capturedPicture = e.target['result'] as string;
    };
    reader.readAsDataURL(file[0]);
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.capturedPicture = base64Image;
      },
      (err) => {
        // Handle error
      }
    );
  }
}
