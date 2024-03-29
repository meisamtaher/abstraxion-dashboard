export const WalletIcon = ({
  color,
  backgroundColor,
  outlineColor,
}: {
  color: string;
  backgroundColor: string;
  outlineColor?: string;
}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill={backgroundColor} />
    <path
      stroke={outlineColor}
      d="M22.5967 20.5526V21.2895C22.5967 22.1 21.9335 22.7632 21.123 22.7632H10.8072C9.98929 22.7632 9.3335 22.1 9.3335 21.2895V10.9737C9.3335 10.1632 9.98929 9.5 10.8072 9.5H21.123C21.9335 9.5 22.5967 10.1632 22.5967 10.9737V11.7105H15.9651C15.1472 11.7105 14.4914 12.3737 14.4914 13.1842V19.0789C14.4914 19.8895 15.1472 20.5526 15.9651 20.5526H22.5967ZM15.9651 19.0789H23.3335V13.1842H15.9651V19.0789ZM18.9124 17.2368C18.3009 17.2368 17.8072 16.7432 17.8072 16.1316C17.8072 15.52 18.3009 15.0263 18.9124 15.0263C19.524 15.0263 20.0177 15.52 20.0177 16.1316C20.0177 16.7432 19.524 17.2368 18.9124 17.2368Z"
      fill={color}
    />
  </svg>
);
