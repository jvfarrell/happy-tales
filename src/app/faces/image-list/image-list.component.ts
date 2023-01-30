import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { ImageListItem } from '../../models/image-list-item';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  @Input()
  images: ImageListItem[] = [];

  @Output()
  click = new EventEmitter<ImageListItem>();

  @Input()
  get layoutGap() {
    return this._layoutGap;
  }
  set layoutGap(value: number) {
    // default to 5
    this._layoutGap = (value !== undefined) ? coerceNumberProperty(value) : 5;
  }
  private _layoutGap = 5;

  onImageListItemClick(imageListItem: ImageListItem) {
    this.click.emit(imageListItem);
  }
}
