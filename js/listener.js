
function clickAnswer(questionIdx, answerIdx) {
	if (user_delta[questionIdx][answerIdx] == 1) {
		user = 0;
	} else {
		user += user_delta[questionIdx][answerIdx];
	}
	money += money_delta[questionIdx][answerIdx];
	
	if (user < 0) {
		showOver(20);
		return;
	}
	
	if (money < 0) {
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
	$(".swiper-container").css("background-color", "#000000");
	
	document.getElementById("over_jq").innerHTML = ending_desc[ending_code];
	
	if (ending_code == 17) {
		document.getElementById('over_db_img').setAttribute('src','images/ok_db.png');
		document.getElementById('over_again_img').setAttribute('src','images/ok_again.png');
	}
}

function loadQA(questionNum) {
	money += special_money_delta[questionNum];

	document.getElementById("qa_num_user").innerHTML='用户数：'+user;
	document.getElementById("qa_num_money").innerHTML='资金：'+money;
	
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
		document.getElementById("qa_num_user").innerHTML='用户数：'+user;
		document.getElementById("qa_num_money").innerHTML='资金：'+money;

		document.getElementById('over_db_img').setAttribute('src','images/over_db.png');
		document.getElementById('over_again_img').setAttribute('src','images/over_again.png');
		
		loadQA(0);
	});
	
	

	$("#qa_a_1").click(function(){
		
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
		$(".swiper-container").css("background-color", "#f8f35b");
	});

});