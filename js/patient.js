class  Patient{
    constructor(){
    this.index = null;
    this.recover  = 0;
    this.name = null;
    this.saved = null;
    this.notsaved = null;
    }

    getpatientCount(){
     var patientCountref = database.ref("patientCount")
     patientCountref.on("value",(data)=>{
         patientCount = data.val();
     })
    }
    updatepatientCount(count){
    database.ref('/').update({
    patientCount: count
    })
}
    update(){
    var patientinfo = "patients/patient"+this.index;
    database.ref(patientinfo).set({
        name: this.name,
        recover: this.recover,
        saved: this.saved,
        notsaved: this.notsaved
    })

    }
   static patients(){
       var patientinformation = database.ref("patients")
       patientinformation.on("value",(data)=>{
           allpatients = data.val();
       })
   }

}

