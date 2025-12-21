import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishwakarama Engineering College Chatbot",
  description: "A chatbot to answer college-related FAQs using Google Gemini-2.0-Flash model.",
};
export default function RootLayout({ 
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <header
        style={{
          display: "flex",
          alignItems: "center",
            background: "#e3f2fd",
            padding: "10px 20px",
          }}
        >
          <h1>Vishwakarma Engineering College Chatbot</h1>
        </header>

        {children}
      </body>
    </html>
  );
}


