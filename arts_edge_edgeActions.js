
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym,e){sym.play(1);});
//Edge binding end
})("stage");
//Edge symbol: 'leafLoop'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1903, function(sym,e){sym.play(1);});
//Edge binding end
})("leafLoop");
   //Edge symbol end:'leafLoop'

   //=========================================================
   
   //Edge symbol: 'stage'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-315315009");