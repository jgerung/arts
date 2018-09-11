/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'artsBack',
            type:'image',
            rect:['0','0','800','600','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"artsBack.jpg"]
         },
         {
            id:'leafLoop',
            type:'rect',
            rect:['0','0','0','0','auto','auto']
         },
         {
            id:'leafLoop3',
            type:'rect',
            rect:['825','210','0','0','auto','auto']
         },
         {
            id:'leafLoop4',
            type:'rect',
            rect:['438','364','0','0','auto','auto']
         }],
         symbolInstances: [
         {
            id:'leafLoop',
            symbolName:'leafLoop'
         },
         {
            id:'leafLoop3',
            symbolName:'leafLoop'
         },
         {
            id:'leafLoop4',
            symbolName:'leafLoop'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '600px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px']
         ],
         "${_leafLoop}": [
            ["style", "top", '-113px'],
            ["style", "left", '713px']
         ],
         "${_leafLoop3}": [
            ["style", "top", '-113px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "rotateZ", '53deg'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '753px']
         ],
         "${_leafLoop4}": [
            ["style", "top", '-77px'],
            ["style", "left", '813px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         labels: {
            "looper": 30000
         },
         timeline: [
            { id: "dg6", tween: [ "style", "${_leafLoop3}", "top", '573px', { fromValue: '-113px'}], position: 500, duration: 2000 },
            { id: "dg5", tween: [ "transform", "${_leafLoop3}", "scaleX", '0.8', { fromValue: '0.8'}], position: 500, duration: 0 },
            { id: "dg2", tween: [ "style", "${_leafLoop}", "left", '-232px', { fromValue: '713px'}], position: 0, duration: 2000 },
            { id: "dg8", tween: [ "style", "${_leafLoop4}", "top", '543px', { fromValue: '-77px'}], position: 1000, duration: 2000 },
            { id: "dg7", tween: [ "transform", "${_leafLoop3}", "scaleY", '0.8', { fromValue: '0.8'}], position: 500, duration: 0 },
            { id: "dg3", tween: [ "style", "${_leafLoop3}", "left", '-226px', { fromValue: '753px'}], position: 500, duration: 2000 },
            { id: "dg1", tween: [ "style", "${_leafLoop}", "top", '384px', { fromValue: '-113px'}], position: 0, duration: 2000 },
            { id: "dg9", tween: [ "style", "${_leafLoop4}", "left", '-242px', { fromValue: '813px'}], position: 1000, duration: 2000 },
            { id: "dg4", tween: [ "transform", "${_leafLoop3}", "rotateZ", '53deg', { fromValue: '53deg'}], position: 500, duration: 0 }         ]
      }
   }
},
"leafLoop": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'leaf0001',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0001.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0002',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0002.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0003',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0003.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0004',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0004.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0005',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0005.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0006',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0006.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0007',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0007.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf00082',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0008.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf00093',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0009.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0010',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0010.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0011',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0011.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0012',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0012.png'],
      r: [0,0,300,225]
   },
   {
      id: 'leaf0013',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0013.png'],
      r: [0,0,300,225]
   },
   {
      r: [0,0,300,225],
      id: 'leaf0014',
      t: 'image',
      o: 0.98,
      f: ['rgba(0,0,0,0)','images/leaf0014.png']
   },
   {
      id: 'leaf0015',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/leaf0015.png'],
      r: [0,0,300,225]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_leaf0003}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0015}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0002}": [
            ["style", "opacity", '0']
         ],
         "${_leaf00082}": [
            ["style", "opacity", '0']
         ],
         "${_leaf00093}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0006}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0011}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0007}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0013}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0012}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0005}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '225px'],
            ["style", "width", '300px']
         ],
         "${_leaf0004}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0010}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0014}": [
            ["style", "opacity", '0']
         ],
         "${_leaf0001}": [
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1903.4375,
         autoPlay: true,
         timeline: [
            { id: "dg42", tween: [ "style", "${_leaf0004}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "dg43", tween: [ "style", "${_leaf0004}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 0 },
            { id: "dg44", tween: [ "style", "${_leaf0004}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "dg16", tween: [ "style", "${_leaf00082}", "opacity", '0', { fromValue: '0'}], position: 750, duration: 0 },
            { id: "dg17", tween: [ "style", "${_leaf00082}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 0 },
            { id: "dg18", tween: [ "style", "${_leaf00082}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "dg45", tween: [ "style", "${_leaf0010}", "opacity", '0', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "dg46", tween: [ "style", "${_leaf0010}", "opacity", '1', { fromValue: '0'}], position: 1138, duration: 0 },
            { id: "dg47", tween: [ "style", "${_leaf0010}", "opacity", '0', { fromValue: '1'}], position: 1263, duration: 0 },
            { id: "dg13", tween: [ "style", "${_leaf0002}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "dg14", tween: [ "style", "${_leaf0002}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 0 },
            { id: "dg15", tween: [ "style", "${_leaf0002}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 0 },
            { id: "dg27", tween: [ "style", "${_leaf0007}", "opacity", '0', { fromValue: '0'}], position: 625, duration: 0 },
            { id: "dg28", tween: [ "style", "${_leaf0007}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 0 },
            { id: "dg29", tween: [ "style", "${_leaf0007}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 0 },
            { id: "dg48", tween: [ "style", "${_leaf0014}", "opacity", '0', { fromValue: '0'}], position: 1513, duration: 0 },
            { id: "dg49", tween: [ "style", "${_leaf0014}", "opacity", '1', { fromValue: '0'}], position: 1638, duration: 0 },
            { id: "dg50", tween: [ "style", "${_leaf0014}", "opacity", '0', { fromValue: '1'}], position: 1763, duration: 0 },
            { id: "dg33", tween: [ "style", "${_leaf0012}", "opacity", '0', { fromValue: '0'}], position: 1263, duration: 0 },
            { id: "dg34", tween: [ "style", "${_leaf0012}", "opacity", '1', { fromValue: '0'}], position: 1388, duration: 0 },
            { id: "dg35", tween: [ "style", "${_leaf0012}", "opacity", '0', { fromValue: '1'}], position: 1513, duration: 0 },
            { id: "dg22", tween: [ "style", "${_leaf0006}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "dg23", tween: [ "style", "${_leaf0006}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 0 },
            { id: "dg24", tween: [ "style", "${_leaf0006}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 0 },
            { id: "dg51", tween: [ "style", "${_leaf0001}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "dg52", tween: [ "style", "${_leaf0001}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 0 },
            { id: "dg39", tween: [ "style", "${_leaf00093}", "opacity", '0', { fromValue: '0'}], position: 875, duration: 0 },
            { id: "dg40", tween: [ "style", "${_leaf00093}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "dg41", tween: [ "style", "${_leaf00093}", "opacity", '0', { fromValue: '1'}], position: 1138, duration: 0 },
            { id: "dg10", tween: [ "style", "${_leaf0003}", "opacity", '0', { fromValue: '0'}], position: 125, duration: 0 },
            { id: "dg11", tween: [ "style", "${_leaf0003}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "dg12", tween: [ "style", "${_leaf0003}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 0 },
            { id: "dg36", tween: [ "style", "${_leaf0005}", "opacity", '0', { fromValue: '0'}], position: 375, duration: 0 },
            { id: "dg37", tween: [ "style", "${_leaf0005}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "dg38", tween: [ "style", "${_leaf0005}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 0 },
            { id: "dg19", tween: [ "style", "${_leaf0011}", "opacity", '0', { fromValue: '0'}], position: 1138, duration: 0 },
            { id: "dg20", tween: [ "style", "${_leaf0011}", "opacity", '1', { fromValue: '0'}], position: 1263, duration: 0 },
            { id: "dg21", tween: [ "style", "${_leaf0011}", "opacity", '0', { fromValue: '1'}], position: 1388, duration: 0 },
            { id: "dg25", tween: [ "style", "${_leaf0015}", "opacity", '0', { fromValue: '0'}], position: 1638, duration: 0 },
            { id: "dg26", tween: [ "style", "${_leaf0015}", "opacity", '1', { fromValue: '0'}], position: 1763, duration: 0 },
            { id: "dg30", tween: [ "style", "${_leaf0013}", "opacity", '0', { fromValue: '0'}], position: 1388, duration: 0 },
            { id: "dg31", tween: [ "style", "${_leaf0013}", "opacity", '1', { fromValue: '0'}], position: 1520, duration: 0 },
            { id: "dg32", tween: [ "style", "${_leaf0013}", "opacity", '0', { fromValue: '1'}], position: 1638, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-315315009");
