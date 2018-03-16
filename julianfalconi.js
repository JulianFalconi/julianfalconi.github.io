@font-face{
	font-family:'Avenir';
  src: url('Avenir.eot'); /* IE9 Compat Modes */
  src: url('Avenir.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('Avenir.woff2') format('woff2'), /* Super Modern Browsers */
       url('Avenir.woff') format('woff'), /* Pretty Modern Browsers */
       url('Avenir.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('Avenir.svg#svgAvenir') format('svg'); /* Legacy iOS */
}


*{
	font-family: 'Avenir' ;
}

html,body {
    padding:0;
    margin:0;
    height:100%;
}

body {
    width:100%;
}

.film{
	width: 50%;
	height: 50%;
	display: inline-block;
	float: left;
	position: static;
	background-color: #414141;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 4vw;
}

.music{
	width: 50%;
	height: 50%;
	display: inline-block;
	float: right;
	position: static;
	background-color: #CCDFCB;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 4vw;
}

.design{
	width: 50%;
	height: 50%;
	display: inline-block;
	float: left;
	position: static;
	background-color: #FF6A5C;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 4vw;
}


.contact{
	width: 50%;
	height: 50%;
	display: inline-block;
	float: right;
	position: static;
	background-color: #056571;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: white;
	font-size: 4vw;
}

.julian{
	background-color: white;
	display: block;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	z-index: 2;
	font-size: 6vw;
	font-weight: bold;
	height: 6vw;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

.bio{
	background-color: transparent;
	display: block;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.3vw;
	font-weight: bold;
	color: white;
	height: 30%;
	width: 100%;
	display: flex;
	font-weight: bold;
	z-index: 1;
}

.blurb1{
   position: absolute;
   bottom: 0;
   right: 0;
}
