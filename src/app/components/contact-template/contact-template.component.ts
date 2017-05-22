import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContactProvider } from '../../providers/contact-provider';
import { ActivatedRoute } from '@angular/router';

declare const naver: any;
declare const $ :any;

@Component({
  selector: 'app-contact-template',
  templateUrl: './contact-template.component.html',
  styleUrls: ['./contact-template.component.scss']
})
export class ContactTemplateComponent implements OnInit, AfterViewInit {
  contactNo: number = -1;
  contactList: Array<any> = [];
  title: string = '';

  map:any;
  markers:Array<any> = [];
  infoWindows:Array<any> = [];
  mapOptions = {
    center: new naver.maps.LatLng(36.0190335, 129.3433895),
    zoom: 7
  };

  constructor(private contactProvider: ContactProvider, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
      .map(data => JSON.parse(JSON.stringify(data)))
      .subscribe(
          data => {
            this.contactNo = data.contentNo;
            this.clearMap();
            this.getContact();
          }
      );
  }

  ngAfterViewInit(): void {
    // this.clearMap();
  }

  getContact() {
    this.contactProvider.getContact(this.contactNo)
    .map(data => data.json())
    .subscribe(
      data => {
        this.contactList = data.data;
        this.title = data.info[0].title;
        this.setMarker();
      }
    );
  }

  setMarker() {
    for(var i = 0; i < this.contactList.length; i++) {
      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(this.contactList[i].addY, this.contactList[i].addX),
        map: this.map,
      });
      
      var infoWindow = new naver.maps.InfoWindow({
        content: [
          '<div style="padding: 7px 10px; max-width: 300px;">',
          '   <div style="font-size: 18px; font-weight: 600; margin: 3px 0px;">'+this.contactList[i].title+' </div>',
          '   <div style="font-size: 15px; margin: 3px 0px;">'+'tel: ' +this.contactList[i].tel+'</div>',
          '</div>'].join(''),
        borderWidth: 1,
        borderColor: "#A3BDD7",
      });
      
      this.markers.push(marker);
      this.infoWindows.push(infoWindow);
    }
    
    for(var i = 0; i < this.markers.length; i++) {
      naver.maps.Event.addListener(this.markers[i], 'click', this.getClickHandler(i));
    }
  }

  getClickHandler(seq) {
    return (e) => {
      var marker = this.markers[seq],
        infoWindow = this.infoWindows[seq];

      if (infoWindow.getMap()) {
        infoWindow.close();
      } 
      else {
        infoWindow.open(this.map, marker);
      }
    }
  }

  openInfo(lat, lng, idx) {
    if(!lat || !lng || lat == 0 || lng == 0) {
      alert('위치정보가 없습니다.');
      return ;
    }
    else {
      this.infoWindows[idx].open(this.map, this.markers[idx]);
      var where = new naver.maps.LatLng(lat, lng);
      this.map.setCenter(where);
      this.map.setZoom(20, true);
    }
  }

  clearMap() {
    this.markers = [];
    this.infoWindows = [];
    this.map = new naver.maps.Map('map', this.mapOptions);
    for(var i = 0; i < this.markers.length; i++) {
      naver.maps.Event.removeEventListener(this.markers[i], 'click');
    }
  }
}
