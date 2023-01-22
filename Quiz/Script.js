        
const x = {
    punkty: 0,
    pytania: [],
    gracze: []
}

            let core = [];
            let pytania = [];
            let wszystkiePytania = [];
            let gracze = [];
            let pkt = 0;
                
        function addQuestionToList(){
// 1. Jednokrotnego
// 2. Wielokrotnego
// 3. Prawda/Falsz
// 4. Odpowiedz z listy
// 5. Wypelnienie slow
            let kartka = {
                TypPytania:document.getElementById("QuizType").value,
                Tresc: document.getElementById("Tresc").value,
                OdpA: document.getElementById("OdpA").value,
                OdpB: document.getElementById("OdpB").value,
                OdpC: document.getElementById("OdpC").value,
                OdpD: document.getElementById("OdpD").value,
                PrawidlowaOdpowiedz: getRadioValue()
            };
            
            pytania.push(kartka);
            
            
            let tresc = document.getElementById("Tresc");
            let a = document.getElementById("OdpA");
            let b = document.getElementById("OdpB");
            let c = document.getElementById("OdpC");
            let d = document.getElementById("OdpD");
            
            a.value = '';
            b.value = '';
            c.value = '';
            d.value = '';
            tresc.value = '';
            
            alert("Dodano");
            
            
        }
                
        function show(){
            for(i=0;i<pytania.length;i++){

                     alert(Object.values(pytania[i]));
                     
                }
            }
           
        function change(){
            for(i=0;i<pytania.length;i++){
            console.log(Object.values(pytania[i]));
            }        
        }
        
        function getRadioValue() {
            const ele = document.getElementsByName('odp');
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                return ele[i].value;
            }
        } 
                
        function changeContent(){
            
            const QuestionValues = document.getElementById("QuestionOptions");
            let QuestionType = document.getElementById("QuizType").value;
            
            let Tresc = document.createElement("input");
            Tresc.id = "Tresc";
            Tresc.type ="Text"
            Tresc.placeholder = "Tresc";
            
            let OdpA = document.createElement("input");
            OdpA.id = "OdpA";
            OdpA.type ="Text";
            OdpA.placeholder = "OdpA";
            
            let OdpB = document.createElement("input");
            OdpB.id = "OdpB";
            OdpB.type = "Text";
            OdpB.placeholder = "OdpB";
            
            let OdpC = document.createElement("input");
            OdpC.id = "OdpC";
            OdpC.type ="Text";
            OdpC.placeholder = "OdpC";
            
            let OdpD = document.createElement("input");
            OdpD.id = "OdpD";
            OdpD.type ="Text";
            OdpD.placeholder = "OdpD";
            
            
            let RadioA = document.createElement("input");
            RadioA.id = "RadioA";
            RadioA.type ="Radio";
            RadioA.name = "odp";
            RadioA.value = "a";
            
            let RadioB = document.createElement("input");
            RadioB.id = "RadioB";
            RadioB.type ="Radio";
            RadioB.name = "odp";
            RadioB.value = "b";
            
            let RadioC = document.createElement("input");
            RadioC.id = "RadioC";
            RadioC.type ="Radio";
            RadioC.name = "odp";
            RadioC.value = "c";
            
            let RadioD = document.createElement("input");
            RadioD.id = "RadioD";
            RadioD.type ="Radio";
            RadioD.name = "odp";
            RadioD.value = "d";
            
            
            if(QuestionType==1){
             
            QuestionValues.innerHTML = '';
            QuestionValues.append(Tresc);
            QuestionValues.append(OdpA);
            QuestionValues.append(OdpB);
            QuestionValues.append(OdpC);
            QuestionValues.append(OdpD);
            QuestionValues.append(RadioA);
            QuestionValues.append(RadioB);
            QuestionValues.append(RadioC);
            QuestionValues.append(RadioD);
                
            }else if(QuestionType==2){
                QuestionValues.innerHTML = '';
                
                RadioA.type ="Checkbox";
                RadioB.type ="Checkbox";
                RadioC.type ="Checkbox";
                RadioD.type ="Checkbox";
                
                
                QuestionValues.append(Tresc);
                QuestionValues.append(OdpA);
                QuestionValues.append(OdpB);
                QuestionValues.append(OdpC);
                QuestionValues.append(OdpD);
                QuestionValues.append(RadioA);
                QuestionValues.append(RadioB);
                QuestionValues.append(RadioC);
                QuestionValues.append(RadioD);
                    
            }else if(QuestionType==3){
                
                QuestionValues.innerHTML = '';   
                QuestionValues.append(Tresc);
                QuestionValues.append(OdpA);
                QuestionValues.append(OdpB);
                QuestionValues.append(RadioA);
                QuestionValues.append(RadioB);
            }
            
        }

        function showAddQuestion(){
             document.getElementById("StartGame").style.display = "none";
             document.getElementById("QuestionAddionPanel").style.display="";
            
        }

        function showMainMenu(){
             document.getElementById("StartGame").style.display = "";
             document.getElementById("QuestionAddionPanel").style.display="none"; 
        }

        function showGame(){
            
            if(pytania.length!=0){
             document.getElementById("StartGame").style.display = "none";
             document.getElementById("Quiz").style.display=""; 
             During();
            }else{
                alert("Nie ma pytan");
            }

        }

        function During(){
            let x = pytania[0];
            
            let tresc = document.getElementById("tresc");
            let a = document.getElementById("QOdpA");
            let b = document.getElementById("QOdpB");
            let c = document.getElementById("QOdpC");
            let d = document.getElementById("QOdpD");
            
            let odp = x.PrawidlowaOdpowiedz;
            
            tresc.value = x.Tresc;
            a.value = x.OdpA;
            b.value = x.OdpB;
            c.value = x.OdpC;
            d.value = x.OdpD;
            a.name = "a";
            b.name = "b";
            c.name = "c";
            d.name = "d";
            
            a.style.color="black";
            b.style.color="black";
            c.style.color="black";
            d.style.color="black";
            
        }

        function getValue(button){
            let odp = button.name;
            let ans = pytania[0].PrawidlowaOdpowiedz;
            
            if(odp==""){
                
            }
            else if(odp==ans){
                button.style.color="green";
                loadNextQuestion();
                During();
                pkt++;
            }else{
                 button.style.color="red";
                pkt--;
            }
            
            console.log(pkt);
           
        }

        function loadNextQuestion(){
                wszystkiePytania.push(pytania[0]);
                pytania.shift();
        }