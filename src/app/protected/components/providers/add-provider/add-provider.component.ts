import { ChangeDetectorRef, Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';
import { GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {

  formData = new FormData();
  resMsg!: string;
  placeholder: any | undefined;
  // google maps 

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild(GoogleMap)
  public map!: GoogleMap; // google.maps.Map

  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    // mapTypeId: 'hybrid',     
    // maxZoom:this.maxZoom,
    // minZoom:this.minZoom,
  };
  markers = [] as any;
  infoContent = ''
  info!: MapInfoWindow;
  infoWindow?: google.maps.InfoWindow;
  marker!: google.maps.Marker;
  latitude!: any;
  longitude!: any;
  lenghtErorr: boolean = false;
  // enableMap: boolean = false;

  constructor(private fb: FormBuilder, private _ser: SuppliersService, private cd: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit() {

    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        // showMap();
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // marker
          this.markers.push({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            label: {
              color: 'blue',
              text: 'provider',
            },
            title: 'Marker title ' + (this.markers.length + 1),
            info: 'Marker info ' + (this.markers.length + 1),
            options: {
              animation: google.maps.Animation.DROP,
            },
          })
        })
        console.log('granted')
      } else if (result.state === 'prompt') {
        // showButtonToEnableMap();
        // this.enableMap = true;
      }
      // Don't do anything if the permission was denied.
    });
    // maps get current location
  }

  getMyLoc() {
    this.markers = [];
    // if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // marker
      this.markers.push({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        label: {
          color: 'blue',
          text: 'provider',
        },
        title: 'Marker title ' + (this.markers.length + 1),
        info: 'Marker info ' + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.DROP,
        },
      })
    })
    // }
  }
  addSuppliersForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    password_confirmation: ['', Validators.required],
    phone: ['', Validators.required ],
    description: [''],
    location: [''],
    image: ['', Validators.required], //making the image required here
    cover: ['', Validators.required], //making the image required here
    done: [false]
  })

  addSuppliers() {
    console.log("length", this.addSuppliersForm.get('phone')?.value?.length)
    if (!this.addSuppliersForm.valid) {
      this.addSuppliersForm.markAllAsTouched();
    }
    Object.entries(this.addSuppliersForm.value).forEach(
      ([key, value]: any[]) => {
        this.formData.append(key, value);
        console.log(key + ':' + value);
      }
    )

    this._ser.addSuppliers(this.formData).subscribe((res: any) => {
      this.resMsg = res.msg;
    });
  }

  // on file select event
  onFileChange(event: any, inputName: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      this.addSuppliersForm.patchValue({
        [inputName]: file
      });
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }
  deleteForm() {
    this.addSuppliersForm.controls.name.setValue('')
    this.addSuppliersForm.controls.email.setValue('')
    this.addSuppliersForm.controls.password.setValue('')
    this.addSuppliersForm.controls.phone.setValue('')
    this.addSuppliersForm.controls.image.setValue('')
    this.addSuppliersForm.controls.description.setValue('')
    this.addSuppliersForm.controls.location.setValue('')
    this.addSuppliersForm.controls.cover.setValue('')
  }

  onInput(event: any) {
    this.placeholder = this.destroyMask(event.target.value);
    event.target.value = this.createMask(this.placeholder);
  }
  destroyMask(event: any) {
    return event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }
  createMask(event: any) {
    return event.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );

    autocomplete.setComponentRestrictions({
      country: ["jo"],
    });

    // Align search box to center
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );

    autocomplete.addListener('place_changed', () => {

      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.onPlaceChanges(place);
        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat());

        //set latitude, longitude 
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };

        // marker
        this.markers = [];
        this.markers.push({
          position: {
            lat: place.geometry.location?.lat(),
            lng: place.geometry.location?.lng(),
          },
          label: {
            color: 'blue',
            text: 'provider' + (this.markers.length + 1),
          },
          title: 'Marker title ' + (this.markers.length + 1),
          info: 'Marker info ' + (this.markers.length + 1),
          options: {
            animation: google.maps.Animation.DROP,
          },
        });
      });
    });

  }

  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom', this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  eventHandler(event: any, name: string) {
    console.log(event, name);

    // Add marker on double click event
    if (name === 'mapDblclick') {
      this.markers = [];
      this.dropMarker(event)
    }
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }
  // marker
  dropMarker(event: any) {
    this.markers.push({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      label: {
        color: 'blue',
        text: 'provider' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    debugger
    this.info.open(marker)
  }
  onPlaceChanges(place: any) {

  }
  initMap() {

  }
  must10Digit() {
    debugger
    if (this.addSuppliersForm.get('phone')?.value?.length !=10) {
      this.lenghtErorr = true;
    }else{
      this.lenghtErorr = false;
    }
  }

}
