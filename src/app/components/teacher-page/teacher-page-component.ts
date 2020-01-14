
emails = [{name: "Potolea Rodica", topic: "Department meeting at 16"},{name: "Fried Johanna", topic: "Student complaints"}];
  


seeEmails() {
	this.viewEmails = this.viewEmails !== true;
	this.selected = this.emails;
  }

composeEmail() {
	  this.viewComposeEmail = this.viewComposeEmail !== true;
	  
  }
