
function clickAnswer(questionIdx, answerIdx) {
	if (user_delta[questionIdx][answerIdx] == 1) {
		user = 0;
	} else {
		user += user_delta[questionIdx][answerIdx];
	}
	money += money_delta[questionIdx][answerIdx];
	
	if (user < 0) {
		user = 0;
		showOver(20);
		return;
	}
	
	if (money < 0) {
		money = 0;
		showOver(19);
		return;
	}
	
	if (answer_set_condition[questionIdx].length != 0) {
		condition[answer_set_condition[questionIdx][answerIdx]] = true;
	}
	
	if (answer_next[questionIdx][answerIdx] > 0) {
		loadQA(answer_next[questionIdx][answerIdx]);
	} else {
		var conditionIdx = -answer_next[questionIdx][answerIdx];
		if (condition[conditionIdx]) {
			if (condition_go[conditionIdx][0] > 0) {
				loadQA(condition_go[conditionIdx][0]);
			} else {
				showOver(-condition_go[conditionIdx][0]);
			}
		} else {
			if (condition_go[conditionIdx][1] > 0) {
				loadQA(condition_go[conditionIdx][1]);
			} else {
				showOver(-condition_go[conditionIdx][1]);
			}
		}
	}
}

function showOver(ending_code) {
	$("#page_init").css("display", "none");
	$("#page_qa").css("display", "none");
	$("#page_over").css("display", "block");
	
	document.getElementById("over_jq").innerHTML = ending_desc[ending_code];
	document.getElementById("over_num_user").innerHTML = user/10000;
	document.getElementById("over_num_money").innerHTML = money/10000;
	
	if (ending_code == 17) {
		// 卖掉结局
		document.getElementById('over_title').setAttribute('src','images/over_cs.png');
		document.getElementById('over_img').setAttribute('src','images/over_cs_img.png');
		document.getElementById('over_mijiorcaidan_img').setAttribute('src','images/over_caidan.png');
		$("#over_mijiorcaidan").click(function(){
			window.location.href="https://mp.weixin.qq.com/s?__biz=MzIxNTEyMzkwMg==&mid=506298435&idx=1&sn=ae1ef15b83379ca4799cc8fbfdebb74c&pass_ticket=5ox89tah8%2FTkaETKCYyw6wTnCXySF9WqBMUxlh%2FlHCcxQbKL%2Fw4gnV1of2aTq27l#rd";
		});
	}
	if (ending_code == 18) {
		// 开出结局
		document.getElementById('over_title').setAttribute('src','images/over_kc.png');
		document.getElementById('over_img').setAttribute('src','images/over_kc_img.png');
		document.getElementById('over_mijiorcaidan_img').setAttribute('src','images/over_caidan.png');
		$("#over_mijiorcaidan").click(function(){
			window.location.href="https://mp.weixin.qq.com/s?__biz=MzIxNTEyMzkwMg==&mid=506298435&idx=1&sn=ae1ef15b83379ca4799cc8fbfdebb74c&pass_ticket=5ox89tah8%2FTkaETKCYyw6wTnCXySF9WqBMUxlh%2FlHCcxQbKL%2Fw4gnV1of2aTq27l#rd";
		});
	}
}

function loadQA(questionNum) {
	money += special_money_delta[questionNum];

	document.getElementById("qa_num_user").innerHTML = user/10000;
	document.getElementById("qa_num_money").innerHTML = money/10000;
	
	var questions = question[questionNum];
	document.getElementById("qa_q").innerHTML=questions;
	
	var answers = "";
	for (var i = 0; i < answer[questionNum].length; ++i) {
		answers += '<li class="qa_a" id="qa_a_1" onclick= clickAnswer(' + questionNum + ',' + i + ')>';
		answers += String.fromCharCode(65 + i) + ') ';
		answers += answer[questionNum][i];
		answers += '</li>';
	}
	document.getElementById("answer_ul").innerHTML=answers;
}

$(document).ready(function(){ 
	
	$("#init_start").click(function(){
		$("#page_init").css("display", "none");
		$("#page_qa").css("display", "block");
		$("#page_over").css("display", "none");
		
		money = startMoney;
		user = startUser;
		condition = pure_condition.slice(0);
		document.getElementById("qa_num_user").innerHTML = user/10000;
		document.getElementById("qa_num_money").innerHTML = money/10000;

		document.getElementById('over_title').setAttribute('src','images/over_db.png');
		document.getElementById('over_img').setAttribute('src','images/over_db_img.png');
		document.getElementById('over_again_img').setAttribute('src','images/over_again.png');
		document.getElementById('over_mijiorcaidan_img').setAttribute('src','images/over_miji.png');
		
		$("#over_mijiorcaidan").click(function(){
			window.location.href="https://mp.weixin.qq.com/s?__biz=MzIxNTEyMzkwMg==&mid=506298432&idx=1&sn=6a4d27fb58e191f013465d13e5fb8d02&pass_ticket=5ox89tah8%2FTkaETKCYyw6wTnCXySF9WqBMUxlh%2FlHCcxQbKL%2Fw4gnV1of2aTq27l#rd";
		});

		
		loadQA(0);
	});
	
	

	$("#over_mijiorcaidan").click(function(){
		window.location.href="https://mp.weixin.qq.com/s?__biz=MzIxNTEyMzkwMg==&mid=506298432&idx=1&sn=6a4d27fb58e191f013465d13e5fb8d02&pass_ticket=5ox89tah8%2FTkaETKCYyw6wTnCXySF9WqBMUxlh%2FlHCcxQbKL%2Fw4gnV1of2aTq27l#rd";
	});

	$("#qa_a_2").click(function(){
		$("#qa_q").css("display", "none");
		$("#qa_a").css("display", "none");
		setTimeout(function () {
			$("#qa_q").css("display", "block");
			$("#qa_a").css("display", "block");
		}, 100);
		
	});

	$("#qa_a_3").click(function(){
	});

	$("#qa_a_4").click(function(){
	});

	$("#over_again").click(function(){
		$("#page_init").css("display", "block");
		$("#page_qa").css("display", "none");
		$("#page_over").css("display", "none");
	});

});