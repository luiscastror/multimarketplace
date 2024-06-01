import { environment } from "src/environments/environment";
import { MainService } from "./services/main.service";

export class BaseComponent {

    public color1: string = '#ED144C'; //rojo
    public color2: string = '#FBC43A'; // amarillo
    public color3: string = '#74E65A'; // verde
    public color4: string = '#fff'; // blanco

    public logoBase: string = 'https://firebasestorage.googleapis.com/v0/b/marketplace-vivesucre.appspot.com/o/quillavende%2Fmultimedia%2Flogo%2FGroup.png?alt=media&token=939121e8-e26c-4bd3-9544-2b72e54fe734'

    public marketplace: string = 'Quilla Vende 2024';


    constructor() { }

}