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

  nColSele = 0;
  nLinSele = 0;
  // nXsel = 0;
  // nYsel = 0;

  constructor(

  ) { }

  ngOnInit() {
    this.atext = this.montaaSeta();
    this.aCubo.push(this.montaFaces());
    console.log('CubaoComponent -> ngOnInit -> aFaceRet', this.aCubo);

  }

  montaaSeta() {
    let aSeta = new Array();
    let aLisSeta = new Array();

    for (let j = 0; j < 3; j++) {
      aSeta = [];
      for (let i = 0; i < 3; i++) {
        aSeta.push(' ');
      }
      aLisSeta.push(aSeta);
    }

    return aLisSeta;




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
    console.log('CubaoComponent -> ngOnInit -> aFaceRet', aFaceRet);



    return aFaceRet;



  }
  desceMouse(event) {
    this.lSelected = true;
    console.log(event);
    console.log(event.path[0].cellIndex + ',' + event.path[1].rowIndex);
    var dimCubo = document.getElementById("cuboprin").getBoundingClientRect();
    console.log("CubaoComponent -> desceMouse -> dimCubo", dimCubo)

    console.log("CubaoComponent -> desceMouse -> dimCubo.bottom", dimCubo.bottom)

    this.nLinSele = event.path[1].rowIndex;
    this.nColSele = event.path[0].cellIndex;
    // this.nXsel = event.screenX;
    // this.nYsel = event.screenY;
    this.nCuboYini = dimCubo.top;
    this.nCuboYFim = dimCubo.bottom;
    this.nCuboXini = dimCubo.left;
    this.nCuboXFim = dimCubo.right;

//    console.log("CubaoComponent -> desceMouse -> navbar ", navbar )
//    var sticky = navbar.getBoundingClientRect();


    console.log('CubaoComponent -> this.nColSele', this.nColSele);
    console.log('CubaoComponent -> this.nLinSele', this.nLinSele);

    // console.log("CubaoComponent -> event.screenY", event.screenY)
    // console.log("CubaoComponent -> event.screenX", event.screenX)
    // console.log("CubaoComponent -> path[2].offsetLeft", event.path[2].offsetLeft)
    // console.log("CubaoComponent -> path[2].offsetWidth", event.path[2].offsetWidth)
    // console.log("CubaoComponent -> path[2].offsetTop", event.path[2].offsetTop)
    // console.log("CubaoComponent -> path[2].offsetHeight", event.path[2].offsetHeight)
  }
  emcima(event) {
    //    console.log(event);
    //   console.log( event.path[0].cellIndex + ','+  event.path[1].rowIndex);

  }

  sobemousepagia(event) {
    if (this.lSelected) {
      console.log('CubaoComponent -> this.nCuboYini', this.nCuboYini);
      event.clientY
      console.log("CubaoComponent -> sobemousepagia -> event.clientY", event.clientY)
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

      if(event.clientX < this.nCuboXini)
      {
        console.log('no final Saiu pra esquerda');
      } else if (event.clientX > this.nCuboXFim) {
        console.log('no final Saiu pra Direita');

      } else {
        console.log('Fico na largura do cubo');

      }



      this.lSelected = false;

    }


    console.log(event);
  }
  teste(event) {

    console.log('CubaoComponent -> event', event);
  }
  sobemouse(event) {
    console.log(event);
    if (this.nColSele === event.path[0].cellIndex) {

      if (this.nLinSele < event.path[1].rowIndex) {
        console.log('no final Desceu');
      } else if (this.nLinSele > event.path[1].rowIndex) {
        console.log('no final subiu');
      } else {
        console.log('no final fico iguau');

        // event.path[0].click();
      }
    }
    else if(this.nLinSele == event.path[1].rowIndex)
    {
      if(this.nColSele < event.path[0].cellIndex)
      {
        console.log('no final foi pa direita');
      } else if (this.nColSele > event.path[0].cellIndex) {
        console.log('no final foi pa exquerda');
      }else {
        console.log('no final fico iguau');
      }


    }
    console.log(document.getSelection());
    // event.path[0].reload();
    this.lSelected = false;

  }
}