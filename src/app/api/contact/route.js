export const runtime = "nodejs"
import nodemailer from "nodemailer"
export async function POST(req){
    try{
        let {name, email, subject, message, phone} =await req.json()
        name = name?.trim()
        email = email?.trim()
        subject = subject?.trim()
        message = message?.trim()
        phone = phone?.trim()

        if(!name || !email || !subject || !message || !phone){
            return new Response(
                JSON.stringify({
                    success:false,
                    error:"All fields are required!",

                }),
                {status:400}
            );
        }
        if(!/^\d+$/.test(phone)){
            return new Response(
                JSON.stringify({ success: false, error: "Phone number must contain only digits!" }),
        { status: 400 }
            )
        }
        if(phone.length<10){
            return new Response(
        JSON.stringify({ success: false, error: "Phone number must be between 10 digits!" }),
        { status: 400 }
      );
        }
        const transporter = nodemailer.createTransport({
            host : "smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
        })
        const mailOptions ={
            from:`"Two Prints"<${process.env.SMTP_USER}>`,
            to:process.env.RECEIVER_EMAIL,
            subject:`New Contact From Submission:${subject}`,
            text:`
            Name:${name}
            Email:${email}
            Subject:${subject}
            Message:${message}
            Phone:${phone}
            `,
        }
        await transporter.sendMail(mailOptions)
        return new Response(JSON.stringify({success:true}),{status:200})
    }catch(err){
        console.error("Email send Error",err)
        return new Response(JSON.stringify({success:false,error:err.message}),{status:500})
    }
}