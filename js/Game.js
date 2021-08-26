class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    start(){
        patientregistrations = new PatientRegistration();
        patientregistrations.display();
        patient = new Patient();
        patient.getpatientCount();

        doctor1 = createSprite(100,200);
        doctor1.addImage("doctor1",doctorImg);
        doctor2 = createSprite(300,200);
        doctor2.addImage("doctor2",doctorImg1);
        doctor3 = createSprite(500,200);
        doctor3.addImage("doctor3",doctorImg2);
        doctor4 = createSprite(700,200);
        doctor4.addImage("doctor4",doctorImg3);
        doctors = [doctor1, doctor2, doctor3, doctor4];

        if(frameCount%90 ===0 ){

          patient1 = createSprite(Math.round(random(100,500)),200,50,50);
          
                 first = Math.round(random(1,4));
             switch(first){
               case 1: patient1.addImage("patient1",patientImg);
               break;
               case 2: patient1.addImage("patient2",patientImg1);
               break;
               case 3: patient1.addImage("patient3",patientImg2);
               break;
               case 4: patient1.addImage("patient4",patientImg3);
               break;
               default: break;
               
             }
          
            }
        }
      play (){
      patientregistrations.hide();
      Patient.patients();
      if(allpatients!== undefined){
       background(backgroundImg)
       patient1.velocityX = 7;
      }
      
    }
   
}