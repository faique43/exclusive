const SectionLabels = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-5 h-10 bg-secondary2 rounded"></div>
      <p className="title-16px-semibold text-secondary2">{text}</p>
    </div>
  );
};

export default SectionLabels;
