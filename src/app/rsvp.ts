export class Rsvp {

    constructor(
        public id: number,
        public firstname: string,
        public surname: string,
        public email: string,
        public attendance: string,
        public dietary?: string, // optional
        public comment?: string
      ) {  }

}
