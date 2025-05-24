import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL || 'claudio.alcaman@gmail.com'; // Email de destino

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Puedes cambiar esto si tienes un dominio verificado
      to: [toEmail],
      subject: `Nuevo mensaje de contacto: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Error al enviar email con Resend:', error);
      return NextResponse.json({ error: 'Error al enviar el mensaje', details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Mensaje enviado con éxito', data });
  } catch (err) {
    console.error('Error en la ruta API:', err);
    // Asegurarse que err es un objeto Error
    const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
    return NextResponse.json({ error: 'Error interno del servidor', details: errorMessage }, { status: 500 });
  }
} 