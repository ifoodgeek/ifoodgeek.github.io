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
		x = width*(2.08/11.29)+widthgap;
		y = height*(2.36/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/init_title.png" style="height:'+height*((4.83-2.36)/20.04)+'px;width:'+width*((9.91-2.08)/11.29)+'px;"></img>'+'</div>';
		
		t += 0.6;
		x = width*(0/11.29)+widthgap;
		y = height*(9.28/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += 'animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/init_desc.png" style="height:'+height*((17.67-9.28)/20.04)+'px;width:'+width*((11.29-0)/11.29)+'px;"></img>'+'</div>';
		
		t += 0.6;
		x = width*(2.68/11.29)+widthgap;
		y = height*(16.79/20.04);
		genHTML += '<div id="init_start" class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += '-moz-animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += '-ms-animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += 'animation: inLeft 1s linear '+t+'s infinite;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img src="images/init_start.png" style="height:'+height*((18.38-16.79)/20.04)+'px;width:'+width*((8.57-2.68)/11.29)+'px;"></img>'+'</div>';
		
		document.getElementById("page_init").innerHTML=genHTML;
	}
	
	// qa
	{
		genHTML = '';
		t = 0;
		x = width*(0/11.29)+widthgap;
		y = height*(0/20.04);
		genHTML += '<div id="qa_outer" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '">'+'<img src="images/bg_qa.jpg" style="height:'+height*1+'px;width:'+width*1+'px;"></img>'+'</div>';
		
		x = width*(1.59/11.29)+widthgap;
		y = height*(1.02/20.04);
		genHTML += '<div id="qa_top" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '">'+'<img src="images/qa_top.png" style="height:'+height*((3.53-1.02)/20.04)+'px;width:'+width*((9.63-1.59)/11.29)+'px;"></img>'+'</div>';
		
		x = width*(1.59/11.29)+widthgap;
		y = height*(2.62/20.04);
		genHTML += '<div id="qa_num_user" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'font-weight:normal;color:#ffffff;">0</div>';
		
		x = width*(6.33/11.29)+widthgap;
		y = height*(2.62/20.04);
		genHTML += '<div id="qa_num_money" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'font-weight:normal;color:#ffffff;">100</div>';
		
		x = width*(1.59/11.29)+widthgap;
		y = height*(5.61/20.04);
		genHTML += '<div id="qa_q" class = "appear-row element" style="z-index:3;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'padding:0px;';
		genHTML += 'width:'+width*((9.63-1.59)/11.29)+'px;';
		genHTML += 'font-weight:bold;color:#ffffff;';
		genHTML += '-webkit-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-moz-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-ms-animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += 'animation: fadeInUp 0.4s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '"></div>';
		
		x = width*(1.59/11.29)+widthgap;
		y = height*(8.82/20.04);
		genHTML += '<div id="qa_a" class = "appear-row element" style="z-index:3;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'padding:0px;';
		genHTML += 'width:'+width*((9.63-1.59)/11.29)+'px;';
		genHTML += 'font-weight:bold;color:#000000;';
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
		x = width*(0/11.29)+widthgap;
		y = height*(0/20.04);
		genHTML += '<div id="over_outer" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '">'+'<img src="images/bg_qa.jpg" style="height:'+height*1+'px;width:'+width*1+'px;"></img>'+'</div>';

		x = width*(1.59/11.29)+widthgap;
		y = height*(1.02/20.04);
		genHTML += '<div id="over_top" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '">'+'<img src="images/qa_top.png" style="height:'+height*((3.53-1.02)/20.04)+'px;width:'+width*((9.63-1.59)/11.29)+'px;"></img>'+'</div>';
		
		x = width*(1.59/11.29)+widthgap;
		y = height*(2.62/20.04);
		genHTML += '<div id="over_num_user" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'font-size:32px;font-weight:normal;color:#ffffff;">0</div>';
		
		x = width*(6.33/11.29)+widthgap;
		y = height*(2.62/20.04);
		genHTML += '<div id="over_num_money" class = "appear-row element" style="opacity:1;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'font-size:32px;font-weight:normal;color:#ffffff;">100</div>';
		
		t += 0.2;
		x = width*(2.43/11.29)+widthgap;
		y = height*(4.80/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img id="over_title" src="images/over_db.png" style="height:'+height*((5.61-4.80)/20.04)+'px;width:'+width*((8.82-2.43)/11.29)+'px;"></img>'+'</div>';

		t += 0.2;
		x = width*(2.61/11.29)+widthgap;
		y = height*(6.46/20.04);
		genHTML += '<div class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img id="over_img" src="images/over_db_img.png" style="height:'+height*((11.57-6.46)/20.04)+'px;width:'+width*((8.71-2.61)/11.29)+'px;"></img>'+'</div>';

		t += 0.1;
		x = width*(1.78/11.29)+widthgap-10;
		y = height*(12.41/20.04);
		genHTML += '<div id="over_jq" class = "appear-row element" style="z-index:3;position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += 'padding:10px;text-align: center;';
		genHTML += 'width:'+width*((9.55-1.78)/11.29)+'px;';
		genHTML += 'font-weight:normal;color:#ffffff;';
		genHTML += '-webkit-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += 'animation: bounceIn 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '"></div>';

		t += 0.6;
		x = width*(2.68/11.29)+widthgap;
		y = height*(14.68/20.04);
		genHTML += '<div id = "over_again" class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += 'animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img id="over_again_img"  src="images/over_again.png" style="height:'+height*((16.26-14.68)/20.04)+'px;width:'+width*((8.57-2.68)/11.29)+'px;"></img>'+'</div>';

		x = width*(2.68/11.29)+widthgap;
		y = height*(16.79/20.04);
		genHTML += '<div id = "over_mijiorcaidan" class = "appear-row element" style="position:absolute;left:'+x+'px;top:'+y+'px;';
		genHTML += '-webkit-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-moz-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-ms-animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += 'animation: tada2 0.3s linear '+t+'s 1;';
		genHTML += '-webkit-animation-fill-mode: forwards;';
		genHTML += '">'+'<img id="over_mijiorcaidan_img"  src="images/over_miji.png" style="height:'+height*((18.38-16.79)/20.04)+'px;width:'+width*((8.57-2.68)/11.29)+'px;"></img>'+'</div>';

		document.getElementById("page_over").innerHTML=genHTML;
	}
});


