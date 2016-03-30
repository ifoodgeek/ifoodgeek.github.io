$(document).ready(function(){

	var height=document.body.clientHeight;
	var realwidth=document.body.clientWidth;
	var should_width=height*320.0/568.0;
	var widthgap=(realwidth-should_width)/2;
	var width=should_width;
	var genHTML	= ""
	var x = 0;
	var y = 0;
	var t = 0;
	
	// init
	{
		genHTML = '';
		t = 0;
		x = width*(0/11.29)+widthgap;
		y = height*(0/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-moz-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-ms-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += 'animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/bg.jpg" style="height:'+height*1+'px;width:'+width*1+'px;"></img>'+'</div>';
		
		t += 0.6;
		x = width*(1.45/11.29)+widthgap;
		y = height*(1.83/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/init_title.png" style="height:'+height*((3.42-1.83)/20.04)+'px;width:'+width*((9.81-1.45)/11.29)+'px;"></img>'+'</div>';
		
		t += 0.6;
		x = width*(1.45/11.29)+widthgap;
		y = height*(6.00/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += 'animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/init_desc.png" style="height:'+height*((9.56-6.00)/20.04)+'px;width:'+width*((9.81-1.45)/11.29)+'px;"></img>'+'</div>';
		
		t += 0.6;
		x = width*(3.35/11.29)+widthgap;
		y = height*(15.73/20.04);
		genHTML += '<div id="init_start" class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += '-moz-animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += '-ms-animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += 'animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/init_start.png" style="height:'+height*((16.83-15.73)/20.04)+'px;width:'+width*((8.54-3.35)/11.29)+'px;"></img>'+'</div>';
		
		document.getElementById("page_init").innerHTML=genHTML;
	}
	
	// qa
	{
		genHTML = '';
		t = 0;
		x = width*(0/11.29)+widthgap;
		y = height*(0/20.04);
		genHTML += '<div id="qa_outer" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '">'+'<img src="images/bg.jpg" style="height:'+height*1+'px;width:'+width*1+'px;"></img>'+'</div>';
		
		x = width*(0.60/11.29)+widthgap;
		y = height*(1.16/20.04);
		genHTML += '<div id="qa_num_user" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'font-size:20px;font-weight:bold;color:#000000;">用户数：5</div>';
		
		x = width*(6.49/11.29)+widthgap;
		y = height*(1.16/20.04);
		genHTML += '<div id="qa_num_money" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'font-size:20px;font-weight:bold;color:#000000;">资金：1000000</div>';
		
		x = width*(0.78/11.29)+widthgap-10;
		y = height*(2.80/20.04);
		genHTML += '<div id="qa_q" class = "appear-row element" style="z-index:3;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'background-color:#ffa421;padding:10px;';
		genHTML += 'width:'+width*((10.55-0.78)/11.29)+'px;';
		genHTML += 'font-size:18px;font-weight:bold;color:#000000;';
		genHTML += '-webkit-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-moz-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-ms-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += 'animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '"></div>';
		
		x = width*(0.78/11.29)+widthgap-10;
		y = height*(8.00/20.04);
		genHTML += '<div id="qa_a" class = "appear-row element" style="z-index:3;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'padding:10px;';
		genHTML += 'width:'+width*((10.55-0.78)/11.29)+'px;';
		genHTML += 'font-size:18px;font-weight:bold;color:#000000;';
		genHTML += '-webkit-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-moz-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-ms-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += 'animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '"><ul id="answer_ul"></ul></div>';
		
		document.getElementById("page_qa").innerHTML=genHTML;
	}
	
	// over
	{
		genHTML = '';
		t = 0;
		x = width*(0/16.93)+widthgap;
		y = height*(0/30.06);
		genHTML += '<div id="over_outer" class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'background-color:#000000;';
		genHTML += '-webkit-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-moz-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-ms-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += 'animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;'
		genHTML += '"></div>';
						
		t += 0.2;
		x = width*(2.12/11.29)+widthgap;
		y = height*(2.50/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/over.jpg" style="height:'+height*((9.56-2.50)/20.04)+'px;width:'+width*((9.17-2.12)/11.29)+'px;"></img>'+'</div>';

		t += 0.2;
		x = width*(1.52/11.29)+widthgap;
		y = height*(10.44/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img id="over_db_img" src="images/over_db.png" style="height:'+height*((11.54-10.44)/20.04)+'px;width:'+width*((9.77-1.52)/11.29)+'px;"></img>'+'</div>';

		t += 0.1;
		x = width*(0.78/11.29)+widthgap-10;
		y = height*(11.92/20.04);
		genHTML += '<div id="over_jq" class = "appear-row element" style="z-index:3;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'padding:10px;text-align: center;';
		genHTML += 'width:'+width*((10.55-0.78)/11.29)+'px;';
		genHTML += 'font-size:18px;font-weight:bold;color:#ffffff;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '"></div>';

		

		t += 0.6;
		x = width*(1.91/11.29)+widthgap;
		y = height*(16.23/20.04);
		genHTML += '<div id = "over_again" class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += 'animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img id="over_again_img"  src="images/over_again.png" style="height:'+height*((17.82-16.23)/20.04)+'px;width:'+width*((9.38-1.91)/11.29)+'px;"></img>'+'</div>';

		document.getElementById("page_over").innerHTML=genHTML;
	}
});


