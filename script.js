'use strict'
let knygos = {
    "Grožinė": [
        {"ISBN": 9736090125458, "Pavadinimas": "Kelias iš labirinto", "Kaina": 3.9, "Metai": 2016},
        {"ISBN": 9786090149354, "Pavadinimas": "Ritualai", "Kaina": 2.5, "Metai": 2011},
        {"ISBN": 9716080145457, "Pavadinimas": "Slaptieji takai", "Kaina": 16.4, "Metai": 2020},
        {"ISBN": 9786090245859, "Pavadinimas": "21 paimti banką", "Kaina": 2.5, "Metai": 2018}
    ],
    "Mokslo": [
        {"ISBN": 9736190125454, "Pavadinimas": "Žemė – žmonijos buveinė", "Kaina": 1, "Metai": 1985},
        {"ISBN": 9336092128498, "Pavadinimas": "Didieji pasaulio išradimai", "Kaina": 11.1, "Metai": 2018},
        {"ISBN": 9738091125650, "Pavadinimas": "Mokslo didvyriai ir kankiniai", "Kaina": 5.9, "Metai": 2011},
        {"ISBN": 9716090125351, "Pavadinimas": "Iliustruotas enciklopedinis žinynas", "Kaina": 25.5, "Metai": 2018}
    ],
    "Istorija": [
        {"ISBN": 9736095155455, "Pavadinimas": "Kernavė", "Kaina": 8.4, "Metai": 2010},
        {"ISBN": 9736690625458, "Pavadinimas": "Vilniaus architektūra ", "Kaina": 45.1, "Metai": 2012},
        {"ISBN": 9736098128488, "Pavadinimas": "Vilniaus pilies kokliai", "Kaina": 9.8, "Metai": 2018},
        {"ISBN": 9737070175758, "Pavadinimas": "Žalgirio mūšis", "Kaina": 14.2, "Metai": 2019}
    ],
    "Informatika": [
        {"ISBN": 9736090145453, "Pavadinimas": "Kompiuterinė inžinerinė geometrija ir grafikae", "Kaina": 10, "Metai": 2004},
        {"ISBN": 9736190135452, "Pavadinimas": "Java programavimas", "Kaina": 16.7, "Metai": 2018},
        {"ISBN": 9136090125554, "Pavadinimas": "Grafų teorija", "Kaina": 4.4, "Metai": 2005},
        {"ISBN": 9735090126668, "Pavadinimas": "Algoritmai", "Kaina": 10.3, "Metai": 2018}
    ]
}

console.log("Užduotis. 2018 m. išleistos knygos");
for(let pirmas in knygos){
  console.log("\n /////"+pirmas+"/////");
  for(let antras in knygos[pirmas]){
    if (knygos[pirmas][antras].Metai == 2018){
      for(let trecias in knygos[pirmas][antras]){ 
      console.log(trecias+ ": " + knygos[pirmas][antras][trecias]);  
      }
    }
  }
}
console.log("\n \n \n \n ");



let min;
console.log("Užduotis. Pigiausios knygos pagal kategorijas:");
for(let pirmas in knygos){  //pirmas ciklas
  console.log("\n/////////////////"+pirmas+"/////////////////");


for(let antras in knygos[pirmas]){//antras ciklas paiimti pirmai knygos kainai kategorijoje palyginimui 
  min=knygos[pirmas][antras].Kaina; //paiima pirma kaina knygu kategorijoje, kuri toliau bus naudojama palyginimui

  for(let antras in knygos[pirmas]){ //ciklas surasti mažiausią kainą kategorijoje
    for(let trecias in knygos[pirmas][antras]){    
        if (trecias=='Kaina' && knygos[pirmas][antras][trecias]<=min){ 
          min=knygos[pirmas][antras][trecias]; //prasukus cikla, kint. min saugos maziausia kategorijos kaina
        }  
    }
  }
  break; // cikla nutraukiam ir einam isvest kategorijos knygu saraso 
}
  for(let antras in knygos[pirmas]){ ///ciklas knygu isvedimui kategorijoje pagal min reikšmę 
    if (knygos[pirmas][antras].Kaina==min){ //jei kaina lygi maziausiai - spausdinam knyga
      for(let trecias in knygos[pirmas][antras]){    
      console.log(trecias+": "+knygos[pirmas][antras][trecias]);
      } 
    }
  }
} //pirmo ciklo pabaiga





//kitas variantas 

////let min;
//console.log("Užduotis. Pigiausios knygos pagal kategorijas:");
//for(let pirmas in knygos){
 // console.log("\n/////////////////"+pirmas+"/////////////////");
 // min=100000; //algoritmui sakes, jei atsiras brangesne knyga 
 // for(let antras in knygos[pirmas]){ //ciklas surasti mažiausią kainą
 //   for(let trecias in knygos[pirmas][antras]){    
  //      if (trecias=='Kaina' && knygos[pirmas][antras][trecias]<=min){
  //        min=knygos[pirmas][antras][trecias];
 //       }  
 //   }
 // }
 /// for(let antras in knygos[pirmas]){ ///ciklas knygu isvedimui pagal reikšmę min
  //  if (knygos[pirmas][antras].Kaina==min){
  //    for(let trecias in knygos[pirmas][antras]){    
 //     console.log(trecias+": "+knygos[pirmas][antras][trecias]);
 //     } 
 //   }
//  }
//} //pirmo ciklo pabaiga

