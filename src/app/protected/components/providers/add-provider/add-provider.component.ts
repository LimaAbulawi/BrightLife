import { ChangeDetectorRef, Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';
import { GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps';
import { CustomValidators } from 'src/app/shared/validators';
import Swal from 'sweetalert2';
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
  resss: any;
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
          this.latitude= position.coords.latitude;
          this.longitude= position.coords.longitude;
          this.addSuppliersForm.controls.lat.setValue( this.latitude)
          this.addSuppliersForm.controls.lng.setValue( this.longitude)
          console.log("this.latitude1" ,  this.addSuppliersForm.controls.lat.value , "this.longitude1" ,  this.addSuppliersForm.controls.lng.value )
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
      this.latitude=position.coords.latitude;
      this.longitude= position.coords.longitude;
      
      this.addSuppliersForm.controls.lat.setValue(this.latitude)
      this.addSuppliersForm.controls.lng.setValue(this.longitude)
      
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
      console.log("this.markers" ,   this.markers)
      console.log("this.controls.lat" ,  this.addSuppliersForm.controls.lat.value , "this.controls.lng" ,  this.addSuppliersForm.controls.lng.value )
    })
    

    // }
  }

  addSuppliersForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
    role: new FormControl('admin', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    lat: new FormControl("", [Validators.required]),
    lng: new FormControl("", [Validators.required]),
    groups: this.fb.array([this.initgroups()]),
    image: new FormControl('', [Validators.required]), //making the image required here
    cover: new FormControl('', [Validators.required]), //making the image required here
    description: new FormControl(''),
    // done: new FormControl(false, [Validators.required]),
  },
    [CustomValidators.MatchValidator('password', 'password_confirmation')]
  );

  get passwordMatchError() {
    return (
      this.addSuppliersForm.getError('mismatch') &&
      this.addSuppliersForm.get('password_confirmation')?.touched
    );
  }

  initgroups() {
    return this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      delivery_fees: ['', Validators.required],
    });
  }

  getGroupsControls() {
    return (this.addSuppliersForm.get('groups') as FormArray).controls;
  }
  getGroupsControlsLenght() {
    return (this.addSuppliersForm.get('groups') as FormArray).controls.length > 1;
  }
  removegroup(i: number) {
    const control = <FormArray>this.addSuppliersForm.controls['groups'];
    control.removeAt(i);
  }
  addgroup() {
    const control = <FormArray>this.addSuppliersForm.controls['groups'];
    control.push(this.initgroups());
  }


  // submit
  addSuppliers() {

    // console.log("length", this.addSuppliersForm.get('phone')?.value?.length)
    console.log("addSuppliersForm", this.addSuppliersForm.value)
 

    if (!this.addSuppliersForm.valid) {
      this.addSuppliersForm.markAllAsTouched();
    }

    Object.entries(this.addSuppliersForm.value).forEach(
      ([key, value]: any[]) => {
        if(key == 'groups'){

          
          // this.formData.append(key, value);
         
        }
        this.formData.append(key, value);
        console.log(key + ':' + value);
      }
    )

    // console.log("formData", this.formData.get('groups') );

    // return;


    

    this._ser.addSuppliers(this.formData).subscribe((res: any) => {
      this.resMsg = res.msg;
      this.resss= res ;
      console.log("formData", res );
      if (res.code == 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'تم اضافة مزود خدمة ',
          showConfirmButton: false,
          timer: 1500
        })
        
        this.addSuppliersForm.reset();
      }
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

        this.addSuppliersForm.controls.lat.setValue( this.latitude)
        this.addSuppliersForm.controls.lng.setValue( this.longitude)

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

        console.log("this.markers2" , this.markers)

    console.log("this.lat.search" ,  this.addSuppliersForm.controls.lat.value , "this.lng.search" ,  this.addSuppliersForm.controls.lng.value )

        // console.log(" this.latitude" ,   this.latitude , "longitude" , this.longitude)

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

    this.latitude= event.latLng.lat();
    this.longitude= event.latLng.lng();

    console.log("this.markers3" , this.markers)
    console.log(" this.latitude" ,   this.latitude , "longitude" , this.longitude)

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
    if (this.addSuppliersForm.get('phone')?.value?.length != 10) {
      this.lenghtErorr = true;
    } else {
      this.lenghtErorr = false;
    }
  }

}
