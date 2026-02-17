const CALENDLY_URL = 'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

/**
 * Inline Calendly scheduler embed. Use on the contact page; requires CalendlyScripts in layout.
 */
export function CalendlyInline() {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname -- Calendly widget required class
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
