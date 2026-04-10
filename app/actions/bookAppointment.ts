"use server";

import { Resend } from "resend";

export async function submitBooking(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;

  if (!name || !email || !phone || !date || !time) {
    return { success: false, error: "Please fill out all fields." };
  }

  // Generate a random appointment ID
  const appointmentId = `AROHA-${Math.floor(10000 + Math.random() * 90000)}`;

  try {
    // If the user hasn't added RESEND_API_KEY, just mock the process.
    // In a production app, the key must be in .env (e.g. RESEND_API_KEY=re_123456789)
    if (!process.env.RESEND_API_KEY) {
      console.warn("No RESEND_API_KEY found, mocking email send via server action.");
      console.log(`[MOCK EMAIL] To: raghavendan2528@gmail.com, ${email}. Subject: New Booking ${appointmentId}`);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, appointmentId };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1. Send to the Clinic
    await resend.emails.send({
      from: "Aroha Notifications <onboarding@resend.dev>", // using Resend's testing domain
      to: ["raghavendan2528@gmail.com"], // Using the email requested
      subject: `New Appointment Booking: ${appointmentId}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Appointment ID:</strong> ${appointmentId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date & Time:</strong> ${date} at ${time}</p>
      `,
    });

    // 2. Send confirmation to the User
    await resend.emails.send({
      from: "Aroha Clinic <onboarding@resend.dev>", 
      to: [email],
      subject: `Your Appointment is Confirmed! (${appointmentId})`,
      html: `
        <h2>Thank you for choosing Aroha Wellness!</h2>
        <p>Hi ${name},</p>
        <p>Your appointment has been successfully scheduled. Here are the details:</p>
        <ul>
          <li><strong>Booking ID:</strong> ${appointmentId}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>If you need to reschedule, please contact us.</p>
        <p>Warm regards,<br>The Aroha Team</p>
      `,
    });

    return { success: true, appointmentId };

  } catch (error: any) {
    console.error("Booking Error:", error);
    return { success: false, error: error.message || "Failed to book appointment" };
  }
}
