import { useState } from "react";
import { Search, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScoreCard from "./ScoreCard";

interface TabConfig {
  id: string;
  label: string;
  description: string;
  fields: { key: string; label: string }[];
}

interface AnalysisTabProps {
  tab: TabConfig;
}

const WEBHOOK_URL = "https://your-webhook-url.example.com/analyze";

const AnalysisTab = ({ tab }: AnalysisTabProps) => {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, any> | null>(null);

  const handleAnalyze = async () => {
    if (!domain.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domain.trim(), analysisType: tab.id }),
      });
      const data = await response.json();
      setResult(data);
    } catch {
      // Demo fallback data
      const score = Math.floor(Math.random() * 100);
      const demoData: Record<string, any> = {
        migration: {
          migrationScore: score,
          confidenceTier: score > 70 ? "High" : score > 40 ? "Medium" : "Low",
          reasoning: `Based on analysis of ${domain}, we detected multiple signals indicating platform dissatisfaction including recent negative reviews, job postings for alternative platform skills, and contract renewal timing within the next 90 days.`,
          recommendedAction: score > 70 ? "Prioritize outreach — high migration likelihood. Schedule discovery call this week." : score > 40 ? "Add to nurture sequence and monitor for stronger signals." : "Low priority — no immediate migration signals detected.",
        },
        newlogo: {
          icpFitScore: score,
          icpMatchReasoning: `${domain} aligns with ICP criteria: enterprise segment, B2C vertical, 500+ employees, currently using a legacy platform with limited API capabilities.`,
          outreachPriority: score > 70 ? "High" : score > 40 ? "Medium" : "Low",
        },
        renewal: {
          riskScore: score,
          churnSignalSummary: `Account shows ${score > 70 ? "critical" : score > 40 ? "moderate" : "minimal"} churn signals: ${score > 70 ? "declining usage, support ticket spike, executive sponsor departure" : score > 40 ? "flat usage trends, delayed QBR scheduling" : "stable engagement metrics, positive NPS"}.`,
          csmFlag: score > 50 ? "Yes" : "No",
        },
        pipeline: {
          pipelineHealthScore: score,
          fitSummary: `Deal shows ${score > 70 ? "strong" : score > 40 ? "moderate" : "weak"} signals: ${score > 70 ? "multi-threaded engagement, clear timeline, budget confirmed" : score > 40 ? "single-threaded, timeline unclear" : "no executive sponsor, stalled progression"}.`,
          dealRiskFlag: score < 40 ? "At Risk" : score < 70 ? "Monitor" : "Healthy",
        },
      };
      setResult(demoData[tab.id] || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Input area */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Search className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Analyze Account</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          {tab.description}
        </p>
        <div className="flex gap-3">
          <Input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter company domain (e.g. acme.com)"
            className="flex-1 bg-muted/50 border-border"
            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
          />
          <Button
            onClick={handleAnalyze}
            disabled={loading || !domain.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-6"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze Account
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Running AI analysis on {domain}...</p>
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <ScoreCard result={result} fields={tab.fields} tabId={tab.id} />
      )}
    </div>
  );
};

export default AnalysisTab;
