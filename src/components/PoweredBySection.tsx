const tools = [
  { name: "React", icon: "⚛️" },
  { name: "n8n", icon: "🔗" },
  { name: "Apollo", icon: "🚀" },
  { name: "Claude AI", icon: "🤖" },
  { name: "Google Sheets", icon: "📊" },
];

const PoweredBySection = () => {
  return (
    <div className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-4">
          Powered By
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2 text-xs text-muted-foreground"
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoweredBySection;
