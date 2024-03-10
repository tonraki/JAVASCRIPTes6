const customerName = "Ton"
const age = 30
const address = "SNO"
const tel = "033030303"

const customer = {
    customerName,
    age,
    address,
    tel,
    showData(){
        console.log("ลูกค้ามีชื่อว่า " + customerName)
    }
}
customer.showData();