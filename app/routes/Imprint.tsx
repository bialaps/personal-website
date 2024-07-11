import PrivacyPolicy from "./PrivacyPolicy";

export default function Imprint() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-3">Imprint</h1>
      <ul className="text-lg">
        <li>Marcel Bialas</li>
      </ul>
      <h2 className="text-2xl font-bold py-3">Contact</h2>
      <ul className="text-lg pb-6">
        <li>E-Mail: info@mbialas.de</li>
      </ul>
      <PrivacyPolicy />
    </div>
  );
}
