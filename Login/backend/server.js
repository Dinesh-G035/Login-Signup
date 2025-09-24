const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"Dinesh",
    password:"Dinesh@3778",
    database:"students",

})
db.connect(err => {
    if (err) {
        console.log("❌ MySQL connection error:", err);
    } else {
        console.log("✅ MySQL connected...");
    }
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const q = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(q, [email, password], (err, results) => {
        if (err) return res.json({ success: false, error: err });
        if (results.length > 0) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }
    });
});
app.post("/signup", (req, res) => {
    const q = "INSERT INTO users(`name`, `email`, `password`) VALUES(?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ];
    db.query(q, values, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, message: "User has been created successfully" });
    });
});
app.listen(8800,()=>{
    console.log("Connected to backend");
})
