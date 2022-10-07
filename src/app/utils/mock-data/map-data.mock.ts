export interface IMapData {
  name: string;
  type: MapTypes;
  lat: number;
  lng: number;
  teachedModules: {
    modules: string[]
  };
}

export enum MapTypes {
  SCHOOL = 'SCHOOL',
  GUEST_TEACHER = 'GUEST_TEACHER',
}

export const MAP_DATA_MOCK: IMapData[] = [
  {
    name: 'Anja van Hagen',
    type: MapTypes.GUEST_TEACHER,
    lat: 52.0888900756836,
    lng: 5.11027765274048,
    teachedModules: {
      modules: [
        'Scratch',
        'Lego MindStorm',
        'Lego WeDo',
      ],
    }
  },
  {
    lat: 52.098191,
    lng: 5.111859,
    name: 'Anne Bos',
    type: MapTypes.GUEST_TEACHER,
    teachedModules: {
      modules: [
        'Scratch',
      ],
    }
  },
  {
    lat: 52.098495,
    lng: 5.111054,
    name: 'Yilmaz Kuzne',
    type: MapTypes.GUEST_TEACHER,
    teachedModules: {
      modules: [
        'Scratch',
        'CodeCombat',
        'MBot\'s',
        'HedyCode',
      ],
    }
  },
  {
    lat: 52.099161,
    lng: 5.115443,
    name: 'Marissa van  Sussem',
    type: MapTypes.GUEST_TEACHER,
    teachedModules: {
      modules: [
        'Scratch',
        'CodeCombat',
        'MBo\'s',
      ],
    }
  },
  {
    lat: 52.099856,
    lng: 5.108944,
    name: 'Koen van Duiten',
    type: MapTypes.GUEST_TEACHER,
    teachedModules: {
      modules: [
        'Scratch',
        'HedyCode',
      ],
    }
  },
  {
    lat: 52.099206,
    lng: 5.11556,
    name: 'Michelle Post',
    type: MapTypes.GUEST_TEACHER,
    teachedModules: {
      modules: [
        'Scratch',
        'MBot\'s',
        'Lego MindStorm',
      ],
    }
  },
  {
    lat: 52.100406,
    lng: 5.109627,
    name: 'David van der Mol',
    type: MapTypes.GUEST_TEACHER,
    teachedModules: {
      modules: [
        'Lego MindStorm',
        'Lego WeDo',
      ],
    }
  },
];
