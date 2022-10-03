import { Component } from '@angular/core';
import {
  IMapData,
  MAP_DATA_MOCK,
} from '../../../utils/mock-data/map-data.mock';

@Component({
  selector: 'littil-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  public selectedMarker!: any;
  public mapData: any[] = MAP_DATA_MOCK.map((data: IMapData) => {
    return {
      ...data,
      options: {
        position: {
          lat: data.lat,
          lng: data.lng,
        },
        visible: true,
        icon: {
          size: { width: 25, height: 25 },
          url: 'assets/marker.svg',
        } as google.maps.Icon,
      },
    };
  });
  public ownLocation: any = {
    options: {
      position: {
        lat: 52.0989904,
        lng: 5.1135757,
      },
      visible: true,
      icon: {
        size: { width: 25, height: 25 },
        url: 'assets/user-location.svg',
      } as google.maps.Icon,
    },
  };
  public center: google.maps.LatLngLiteral = {
    lat: 52.098191,
    lng: 5.111859,
  } as google.maps.LatLngLiteral;
  public zoom: number | MapZoomLevels = MapZoomLevels.LOCATION_FOCUS;
  public mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDefaultUI: true,
    keyboardShortcuts: false,
    maxZoom: MapZoomLevels.SELECTION_FOCUS,
    minZoom: MapZoomLevels.WHOLE_NL,
    styles: [
      {
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ],
  };

  public onMarkerClick(marker: IMapData) {
    this.selectedMarker = marker;
  }
}

export enum MapZoomLevels {
  WHOLE_NL = 8,
  LOCATION_FOCUS = 15,
  SELECTION_FOCUS = 17,
}
