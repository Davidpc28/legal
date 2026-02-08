import { NextRequest, NextResponse } from "next/server";

export type LeadPayload = {
  dateArrival: string;
  monthsInSpain: string;
  hasCriminalRecord: string;
  currentStatus: string;
  eligibilityResult: string;
  fullName: string;
  email: string;
  phone: string;
};

function validatePayload(body: unknown): body is LeadPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.dateArrival === "string" &&
    typeof b.monthsInSpain === "string" &&
    typeof b.hasCriminalRecord === "string" &&
    typeof b.currentStatus === "string" &&
    typeof b.eligibilityResult === "string" &&
    typeof b.fullName === "string" &&
    typeof b.email === "string" &&
    typeof b.phone === "string"
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        { message: "Payload inválido. Faltan campos requeridos." },
        { status: 400 },
      );
    }

    const row = [
      new Date().toISOString(),
      body.dateArrival,
      body.monthsInSpain,
      body.hasCriminalRecord,
      body.currentStatus,
      body.eligibilityResult,
      body.fullName,
      body.email,
      body.phone,
    ];

    // ——— Opción A: Google Apps Script Webhook ———
    // Configura GOOGLE_APPS_SCRIPT_WEBHOOK_URL en .env.local con la URL de tu script.
    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ row }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Google Apps Script error:", res.status, text);
        return NextResponse.json(
          { message: "Error al guardar en la hoja de cálculo." },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    // ——— Opción B: Google Sheets API (requiere credenciales de servicio) ———
    const sheetsApi = process.env.GOOGLE_SHEETS_API_ENABLED === "true";
    if (sheetsApi && process.env.GOOGLE_SHEET_ID) {
      // Aquí iría la lógica con googleapis (npm i googleapis).
      // Ejemplo: const sheets = google.sheets('v4'); sheets.spreadsheets.values.append(...)
      console.log("[Lead] Google Sheets API: append row", row);
      return NextResponse.json({ ok: true });
    }

    // ——— Sin integración: log y respuesta ok (para desarrollo) ———
    console.log("[Lead] No webhook/Sheets config. Row:", row);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Lead] Error:", err);
    return NextResponse.json(
      { message: "Error interno al procesar la solicitud." },
      { status: 500 },
    );
  }
}
