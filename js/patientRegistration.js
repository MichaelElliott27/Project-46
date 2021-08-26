class PatientRegistration {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter patient name");
      this.playButton = createButton("appointment set");
      this.titleImg = createImg("./images/Title.jpg", "hospital");
      this.greeting = createElement("h2");
      this.reset = createButton("Have a nice day");
    }
  
    setElementsPosition() {
      this.titleImg.position(120,10);
      this.input.position(width / 2-70, height / 2 - 50);
      this.playButton.position(width / 2-47, height / 2 +10);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.reset.position(displayWidth-200,20);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
      this.reset.class("reset");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
    handleMousePressed(){
   this.playButton.mousePressed(() => { 
    this.input.hide(); 
    this.playButton.hide(); 
    patient.name = this.input.value();
    patientCount = patientCount+1;
    patient.index = patientCount;
    patient.update();
    patient.updatepatientCount(patientCount);
    var message = ` Hello ${this.input.value()}
    </br>The doctor will be with you shortly.`;
    this.greeting.html(message);

   })
}

handleReset(){
  this.reset.mousePressed(() =>{
  patient.updatepatientCount(0);
  game.update(0);
})
}


display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
      this.handleReset();
    }
  }