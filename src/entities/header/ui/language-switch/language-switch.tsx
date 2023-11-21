type LanguageSwitchItem = {
  key: string;
  title: string;
};

interface IProps {
  languages: LanguageSwitchItem[];
  onChange: (language: string) => void;
}

const LanguageSwitch = ({ languages, onChange }: IProps) => {
  return (
    <div className="flex gap-1">
      {languages.map((language) => (
        <button
          key={language.key}
          onClick={() => onChange(language.key)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 uppercase transition-colors active:bg-white/30"
        >
          {language.title}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
