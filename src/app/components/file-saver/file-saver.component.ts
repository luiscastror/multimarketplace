import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-file-saver',
  templateUrl: './file-saver.component.html',
  styleUrls: ['./file-saver.component.css']
})
export class FileSaverComponent implements OnInit {

  @Output() urlFile = new EventEmitter<string>();
  @Input() files: any = [];
  @Input() showImages: boolean = true;
  @Input() isString: boolean = false;
  @Input() path: string = '';
  @Input() title: string = 'Subir imagenes';

  progress: number = 0;
  displayProgress = false;

  constructor(
    private MainService: MainService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void { }

  onFileSelected(event: any) {
    this.displayProgress = true;
    this.progress = 1;
    let n = Date.now();
    // let path = this.MainService.ConfigService.token + '/' + n;
    let path = '/vivesucre/tiendas/' + this.MainService.AuthService.dataStore.Id + '/' + this.path + '/' + n;

    let file = event.target.files[0];
    let filePath = path;
    let fileRef = this.storage.ref(filePath);

    this.storage
      .upload(path, file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          let downloadURL = fileRef.getDownloadURL();
          downloadURL.subscribe((url: any) => {
            if (url) {
              if (this.isString) {
                this.files = url;
                this.urlFile.emit(this.files);
              } else {
                this.files.push(url);
                this.urlFile.emit(this.files);
              }
            }
          });
        })
      )
      .subscribe((url: any) => {
        this.progress =
          (url._delegate.bytesTransferred / url._delegate.totalBytes) * 100;
        if (url._delegate.state == 'running' && this.progress < 100) {
          this.displayProgress = true;
        } else {
          this.displayProgress = false;
        }
      });
  }

  remove(index: number) {
    let yes = confirm("Desea quitar esta imagen?");
    if (yes) {
      this.files.splice(index, 1);
      this.urlFile.emit(this.files);
    }

  }
}
