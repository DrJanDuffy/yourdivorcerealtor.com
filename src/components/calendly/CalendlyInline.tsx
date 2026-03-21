const CALENDLY_URL = 'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

/**
 * Inline Calendly scheduler embed. Use on the contact page; requires CalendlyScripts in layout.
 */
export function CalendlyInline() {
  return (
    <div
      className="calendly-inline-widget min-h-[700px] w-full min-w-[320px]" // eslint-disable-line tailwindcss/no-custom-classname -- Calendly widget API
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
