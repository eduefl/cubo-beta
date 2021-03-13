import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubao',
  templateUrl: './cubao.component.html',
  styleUrls: ['./cubao.component.css']
})
export class CubaoComponent implements OnInit {
  static readonly _AZUL = 'rgb(10, 10, 102)';
  static readonly _VERMELHO = '#BD0202';
  static readonly _LARANJA = 'orangered';
  static readonly _AMARELO = '#FFFF00';
  static readonly _BRANCO = 'whitesmoke';
  static readonly _VERDE = 'green';

  aCubo = new Array();
  atext = new Array();
  lSelected = false;
  nCuboYini = 0;
  nCuboYFim = 0;
  nCuboXini = 0;
  nCuboXFim = 0;

  nCelYini = 0;
  nCelYFim = 0;
  nCelXini = 0;
  nCelXFim = 0;

  aclasse = new Array();
  classeCelula = "a svgtxt";

  nColSele = 0;
  nLinSele = 0;
  // nXsel = 0;
  // nYsel = 0;

  constructor(

  ) { }

  ngOnInit() {
    this.atext = this.inicializaVar();
    this.aclasse = this.inicializaVar(2);
    console.log("CubaoComponent -> ngOnInit -> this.aclasse", this.aclasse)
    this.aCubo.push(this.montaFaces());

    // console.log('CubaoComponent -> ngOnInit -> aFaceRet', this.aCubo);

  }

  fizzBuzz(n) {
    let nMod3 = 0;
    let nMod5 = 0;
    let cResult = '';
    let aRet = new Array();
    for (let index = 1; index <= n; index++) {
      cResult = "";
      nMod5 = index % 5;
      nMod3 = index % 3;

      if (nMod3 === 0) {
        cResult = cResult.concat('Fizz');
      }
      if (nMod5 === 0) {
        cResult = cResult.concat('Buzz');
      }
      if (cResult.length === 0 || !cResult.trim()) {
        cResult = index.toString();
      }
      aRet.push(cResult);


      console.log(cResult);
    }

    return aRet;
  }
  AtualizaSeta(nLin = null, nCol = null, cContent = "") {
    this.atext = this.inicializaVar();
    this.aclasse = this.inicializaVar(2);

    if (nLin !== null) {
      for (let i = 0; i < this.atext[nLin].length; i++) {
        this.atext[nLin][i] = cContent;
        this.aclasse[nLin][i] = "a2 svgtxt"
      }

    }
    if (nCol !== null) {
      for (let i = 0; i < this.atext.length; i++) {
        this.atext[i][nCol] = cContent;
        this.aclasse[i][nCol] = "a2 svgtxt"
      }
    }



  }

  entrou(event) {
    // if (this.lSelected) {
    //   this.nLinSele
    //   console.log("CubaoComponent -> entrou -> this.nLinSele", this.nLinSele)
    //   this.nColSele
    //   console.log("CubaoComponent -> entrou -> this.nColSele", this.nColSele)

    //   var nAtuLin = event.path[1].rowIndex;
    //   console.log("CubaoComponent -> entrou -> nAtuLin", nAtuLin)
    //   var nAtuCel = event.path[0].cellIndex;
    //   console.log("CubaoComponent -> entrou -> var nAtuCel", nAtuCel)

    //   if (this.nLinSele === nAtuLin) {
    //     if (nAtuCel > this.nColSele) {
    //       this.AtualizaSeta(nAtuLin, null, '\u27a1');
    //       console.log('\u27a1')

    //     } else if (nAtuCel < this.nColSele) {
    //       console.log('\u2B05')
    //       this.AtualizaSeta(nAtuLin, null, '\u2B05');

    //     } else {
    //       console.log('no lugar')
    //     }

    //   } else if (this.nColSele === nAtuCel) {
    //     if (nAtuLin < this.nLinSele) {
    //       this.AtualizaSeta(null, nAtuCel, '\u2B06')
    //       console.log('\u2B06')
    //     } else if (nAtuLin > this.nLinSele) {
    //       this.AtualizaSeta(null, nAtuCel, '\u2B07')
    //       console.log('\u2B07')
    //     } else {
    //       console.log('no lugar')
    //     }



    //   }


    //   // console.log("CubaoComponent -> saiu -> event", event)
    //   // var id = event.fromElement.id
    //   // var dimCel = document.getElementById(id).getBoundingClientRect();
    //   // console.log("CubaoComponent -> saiu -> dimCel", dimCel)

    //   // console.log("CubaoComponent -> saiu -> event.fromElement.id", event.fromElement.id)
    //   // console.log("CubaoComponent -> saiu -> event.fromElement", event.fromElement)
    //   // console.log("saiu");
    // }
  }

  inicializaVar(nopc = 1) {
    let aValor = new Array();
    const aLisValor = new Array();
    let cInit = ""
    switch (nopc) {
      case 1:
        cInit = " ";
        break;
      case 2:
        cInit = 'a svgtxt';
        break;
    }
    for (let j = 0; j < 3; j++) {
      aValor = [];
      for (let i = 0; i < 3; i++) {
        aValor.push(cInit);

      }
      aLisValor.push(aValor);
    }

    return aLisValor;




  }

  montaFaces() {
    let aLine = new Array();
    let aFaceRet = new Array();
    aLine.push(CubaoComponent._AMARELO);
    aLine.push(CubaoComponent._BRANCO);
    aLine.push(CubaoComponent._VERDE);
    aFaceRet.push(aLine);

    aLine = [];
    // ----------------------------------------------------------------
    aLine.push(CubaoComponent._BRANCO);
    aLine.push(CubaoComponent._BRANCO);
    aLine.push(CubaoComponent._VERDE);

    aFaceRet.push(aLine);
    aLine = [];
    // ----------------------------------------------------------------

    aLine.push(CubaoComponent._AMARELO);
    aLine.push(CubaoComponent._LARANJA);
    aLine.push(CubaoComponent._AZUL);

    aFaceRet.push(aLine);
    // console.log('CubaoComponent -> ngOnInit -> aFaceRet', aFaceRet);



    return aFaceRet;



  }
  desceMouse(event) {
    this.lSelected = true;
     console.log(event);
     console.log(event.path[0].id);

         // console.log(event.path[0].cellIndex + ',' + event.path[1].rowIndex);
   var dimCel = document.getElementById(event.path[0].id).getBoundingClientRect();
   console.log("CubaoComponent -> desceMouse -> dimCel", dimCel)

    var dimCubo = document.getElementById("cuboprin").getBoundingClientRect();

     console.log("CubaoComponent -> desceMouse -> dimCubo", dimCubo)

    // console.log("CubaoComponent -> desceMouse -> dimCubo.bottom", dimCubo.bottom)

    this.nLinSele = event.path[1].rowIndex;
    this.nColSele = event.path[0].cellIndex;
    this.nCelYini = dimCel.top;
    this.nCelYFim = dimCel.bottom;
    this.nCelXini = dimCel.left;
    this.nCelXFim = dimCel.right;


    this.nCuboYini = dimCubo.top;
    this.nCuboYFim = dimCubo.bottom;
    this.nCuboXini = dimCubo.left;
    this.nCuboXFim = dimCubo.right;

    //    // console.log("CubaoComponent -> desceMouse -> navbar ", navbar )
    //    var sticky = navbar.getBoundingClientRect();


    // console.log('CubaoComponent -> this.nColSele', this.nColSele);
    // console.log('CubaoComponent -> this.nLinSele', this.nLinSele);

    // console.log("CubaoComponent -> event.screenY", event.screenY)
    // console.log("CubaoComponent -> event.screenX", event.screenX)
    // console.log("CubaoComponent -> path[2].offsetLeft", event.path[2].offsetLeft)
    // console.log("CubaoComponent -> path[2].offsetWidth", event.path[2].offsetWidth)
    // console.log("CubaoComponent -> path[2].offsetTop", event.path[2].offsetTop)
    // console.log("CubaoComponent -> path[2].offsetHeight", event.path[2].offsetHeight)
  }
  emcima(event) {
    if (this.lSelected)
    {
      // console.log("Clientx",event.clientX);
      // console.log("ClientY",event.clientY);

      // console.log("nCelYini",this.nCelYini);
      // console.log("nCelYFim",this.nCelYFim);
      // console.log("nCelXini",this.nCelXini);
      // console.log("nCelXFim",this.nCelXFim);

      if(this.between(event.clientX, this.nCelXini, this.nCelXFim))
      {
        if(event.clientY>this.nCelYFim)
        {
          console.log("baixo");
          this.AtualizaSeta(null, this.nColSele, '\u2B07')
          console.log('\u2B07')

        }
        else if(event.clientY<this.nCelYini)
        {
          this.AtualizaSeta(null, this.nColSele, '\u2B06')
          console.log('\u2B06')
          console.log("cima");
        }
      }
      if(this.between(event.clientY, this.nCelYini, this.nCelYFim))
      {
        if(event.clientX>this.nCelXFim)
        {
          this.AtualizaSeta(this.nLinSele, null, '\u27a1');
          console.log('\u27a1')
          console.log("direita");
        }
        else if(event.clientX<this.nCelXini)
        {
          console.log('\u2B05')
          this.AtualizaSeta(this.nLinSele, null, '\u2B05');
          console.log("esquerda");
        }

      }


    }

  }


   between(x, min, max) {
    return x >= min && x <= max;
  }
  sobemousepagia(event) {
    if (this.lSelected) {
       console.log('CubaoComponent -> this.nCuboYini', this.nCuboYini);
      event.clientY
      // console.log("CubaoComponent -> sobemousepagia -> event.clientY", event.clientY)
      if (event.clientY < this.nCuboYini) {
         console.log('no final Subiu Pra fora');

      } else if (event.clientY > this.nCuboYFim) {
         console.log('no final Desceu Pra fora');

      } else {

         console.log('Fico na altura do cubo');

      }
      // console.log("CubaoComponent -> sobemousepagia -> event.clientY", event.clientY)

      // console.log("CubaoComponent -> sobemousepagia -> event.screenY", event.screenY)

      // console.log("CubaoComponent -> sobemousepagia -> this.nCuboYFim", this.nCuboYFim)

      if (event.clientX < this.nCuboXini) {
         console.log('no final Saiu pra esquerda');
      } else if (event.clientX > this.nCuboXFim) {
         console.log('no final Saiu pra Direita');

      } else {
         console.log('Fico na largura do cubo');

      }



      this.lSelected = false;

    }


    // console.log(event);
  }
  teste(event) {

    // console.log('CubaoComponent -> event', event);
  }
  sobemouse(event) {
    console.log(event);
    if (this.nColSele === event.path[0].cellIndex) {

      if (this.nLinSele < event.path[1].rowIndex) {
        // console.log('no final Desceu');
      } else if (this.nLinSele > event.path[1].rowIndex) {
        // console.log('no final subiu');
      } else {
        // console.log('no final fico iguau');

        // event.path[0].click();
      }
    }
    else if (this.nLinSele == event.path[1].rowIndex) {
      if (this.nColSele < event.path[0].cellIndex) {
        // console.log('no final foi pa direita');
      } else if (this.nColSele > event.path[0].cellIndex) {
        // console.log('no final foi pa exquerda');
      } else {
        // console.log('no final fico iguau');
      }


    }
    // console.log(document.getSelection());
    // event.path[0].reload();
    this.lSelected = false;
    this.atext = this.inicializaVar();
    this.aclasse = this.inicializaVar(2);



  }
}
