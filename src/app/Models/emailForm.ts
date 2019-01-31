export class EmailForm {
    fromName:string;
    fromEmail:string;
    EmailSubject:string;
    message:string;
    constructor(EmailSubject:string,FromName: string, FromEmail: string, Message: string) {
        this.fromName = FromName;
        this.fromEmail = FromEmail;
        this.EmailSubject =EmailSubject;
        this.message = Message;
      }
}
