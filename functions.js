/*------------------------------------------------------------------------------------------------윤년 여부 계산 함수*/


	function leapCal(year){
		return (((year % 4 === 0) && (year % 100 !==0)) || (year % 400 === 0));
	}


/*----------------------------------------------------------------------------해당 월은 날짜가 몇 일로 구성되어 있는가*/



	function dateCal(year){
		
		if(leapYear === true){
			return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		}

		else if(leapYear === false){
			return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		}

	}


/*----------------------------------------------------------------------------------해당 월은 몇 주로 구성되어 있는지*/	



	function weekCal(year, month){
		
		if((leapYear === false) && (mm === 1) && (firstDay === 0)) {
			return 4;
		}

		else if((leapYear === false) && (mm === 1) && (firstDay !== 0)){
			return 5;
		}
		
		else if((leapYear === true) && (mm === 1)) {
			return 5;
		}
		
		else if(numberOfDate[mm] + firstDay > 35) {
			return 6;
		}

		else if(numberOfDate[mm] + firstDay <= 35) {
			return 5;
		}
	}


/*-----------------------------------------------------------------------------------part 1. th(요일 표시 부분) 생성*/
function makeHeader(){

	for(i = 0 ; i < dayKorean.length ; i++){
		const thForHead = document.createElement("th");
		thForHead.textContent = dayKorean[i];
			if(i === 0) {

				thForHead.style.color = "red";
			
			}
			
			else if(i === dayKorean.length-1) {

				thForHead.style.color = "blue";
			}
			
			else {

				thForHead.style.color = "black";
			}
		trForHead.appendChild(thForHead);

	}
}

function makeCalendar(){
/*-------------------------------------------------------------------------------------------------1개월 달력 만들기*/	





	const pContent = document.querySelector("#name");
	pContent.textContent = yyyy + "년 " + (mm+1) + "월";

/*-------------------------------------------------------------------------------part 2. td(날짜 표시 부분) 생성 관련*/
/*---------------------------------------------------------------------------------------------part 2-1. tr(행) 추가*/	

	const trForCalender = document.createElement("tr");
	tbody.appendChild(trForCalender);



/*--------------------------------------------------------part 2-2. 1일이 무슨요일이냐에 따라 공백 and 첫째주 날짜 기입*/

	for(x = 0 ; x < firstDay ; x ++){
	const tdForCalender = document.createElement("td");
	trForCalender.appendChild(tdForCalender);								//1일이 시작하기 전까지 공백을 추가하는 논리
	}


	for(j = 0 ; j < 7-firstDay ; j++){

		const tdForCalender = document.createElement("td");
		tdForCalender.textContent = j + 1;
			


			if(j === 6 - firstDay){

				tdForCalender.style.color = "blue";

			}

			else if((j === 0 && (j+1) % 7 === 0) || (j === 0) && (firstDay === 0)) {

				tdForCalender.style.color = "red";	
							
			}


			else {

				tdForCalender.style.color = "black";

			}



		trForCalender.appendChild(tdForCalender);							//1일이 해당하는 요일부터 첫째주 날짜 기입										
	}


/*-------------------------------------------------------------------------------------part 2-3. 둘째주 ~ 날짜 기입*/


	for(k = 1 ; k < numberOfWeek ; k++){					 //해당 월이 몇주로 구성되어 있냐에 따라 행 반복 횟수 달라짐	
		const trForCalender = document.createElement("tr");
		tbody.appendChild(trForCalender);	


		for(l = 1 ; l < dayKorean.length +1 ; l++){

			const tdForCalender = document.createElement("td");
			var writtenDate = 7*k+l - firstDay;

			tdForCalender.textContent = writtenDate;


			if(l === dayKorean.length){

				tdForCalender.style.color = "blue";
			
			}

			else if(l === 1) {

				tdForCalender.style.color = "red";				
							
			}

			else {

				tdForCalender.style.color = "black";
				
			}

			trForCalender.appendChild(tdForCalender);						

			if(writtenDate >= numberOfDate[mm]) {				  //해당 월이 무슨 요일에 끝나느냐에 따라 공백 갯수 달라짐
				for(y = 0 ; y < 7-l ; y++){
					const tdForCalender = document.createElement("td");
					trForCalender.appendChild(tdForCalender);
	
			}			
			
			break;															//해당 월의 마지막 날짜가 도래하면 for문 종료
															
			}

		}
	}
}
