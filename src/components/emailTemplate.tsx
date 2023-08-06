import React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  phone: string;
  email: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  message,
  phone,
  email,
}) => {
  const emailTemplateStyles: React.CSSProperties = {
    display: "block",
    margin: "auto",
    border: "2px solid #000000",
    // minHeight: "100vh",
    borderRadius: "8px",
    backgroundColor: "#171616",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Inter, Arial, sans-serif",
    maxWidth: "600px",
    padding: "24px",
  };

  const headerStyles: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "16px",
  };

  const titleStyles: React.CSSProperties = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const contentStyles: React.CSSProperties = {
    marginBottom: "16px",
    textAlign: "center", // Centering the text within the content
    color: "#ffffff",
  };

  const infoListStyles: React.CSSProperties = {
    listStyleType: "none",
    padding: "0",
  };

  const infoItemStyles: React.CSSProperties = {
    marginBottom: "8px",
    fontSize: "18px", // Increasing the font size for phone and email
  };

  const messageStyles: React.CSSProperties = {
    lineHeight: "1.6",
    fontSize: "18px", // Increasing the font size for the message
  };

  const footerStyles: React.CSSProperties = {
    textAlign: "center",
    color: "#666",
    marginTop: "16px",
    fontSize: "12px",
    borderTop: "1px solid #ccc",
    paddingTop: "8px",
  };

  const phoneRegex = /[-\s]/g; // Matches any hyphen or space
  const formattedPhone = phone.replace(phoneRegex, "");

  return (
    <div style={emailTemplateStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Inquiry from: {name}</h1>
      </div>
      <div style={contentStyles}>
        <ul style={infoListStyles}>
          <li style={infoItemStyles}>
            Phone:{" "}
            <span>
              <a href={`tel:+1${formattedPhone}`}>{phone}</a>
            </span>
          </li>
          <li style={infoItemStyles}>Email: {email}</li>
        </ul>
        <p style={messageStyles}>Message: {message}</p>
      </div>
      <div style={footerStyles}>
        <p>
          This email template is brought to you by{" "}
          <a href="https://www.jpswebdesign.dev/">JPS Web Design.</a>
        </p>
      </div>
    </div>
  );
};

export { EmailTemplate };
