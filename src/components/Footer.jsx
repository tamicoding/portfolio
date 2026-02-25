export default function Footer({ language }) {
  const isEnglish = language === "en-US";

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Tamiris Reis • {isEnglish ? "Built with React ☕" : "Feito com React ☕"}
        </p>
      </div>
    </footer>
  );
}