export class farmerDetails{
    _id: String;
    fname: String;
    lname: String;
    farmer_type: String;
    location: String;
    description: String;
    phone: String;
    email: String;
    image: File;

    constructor(_id?:String, fname?: String, lname?: String, farmer_type?: String, location?: String, description?: String, phone?: String, email?:String, image?: File){
        this._id = _id!;
        this.description = description!;
        this.email = email!;
        this.fname = fname!;
        this.farmer_type = farmer_type!;
        this.lname = lname!;
        this.location = location!;
        this.phone = phone!;
        this.image = image!;
    }
}