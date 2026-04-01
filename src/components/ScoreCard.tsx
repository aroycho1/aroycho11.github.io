import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

interface ScoreCardProps {
  result: Record<string, any>;
  fields: { key: string; label: string }[];
  tabId: string;
}

const getScoreKey = (tabId: string): string => {
  const map: Record<string, string> = {
    migration: "migrationScore",
    newlogo: "icpFitScore",
    renewal: "riskScore",
    pipeline: "pipelineHealthScore",
  };
  return map[tabId] || "score";
};

const getScoreColor = (score: number) => {
  if (score >= 70) return "text-green-400";
  if (score >= 40) return "text-yellow-400";
  return "text-red-400";
};

const getScoreBg = (score: number) => {
  if (score >= 70) return "bg-green-400/10 border-green-400/20";
  if (score >= 40) return "bg-yellow-400/10 border-yellow-400/20";
  return "bg-red-400/10 border-red-400/20";
};

const getConfidenceBadgeColor = (tier: string) => {
  const t = tier?.toLowerCase();
  if (t === "high" || t === "yes" || t === "healthy") return "bg-green-400/15 text-green-400 border-green-400/30";
  if (t === "medium" || t === "monitor") return "bg-yellow-400/15 text-yellow-400 border-yellow-400/30";
  return "bg-red-400/15 text-red-400 border-red-400/30";
};

const isScoreField = (key: string) =>
  key.toLowerCase().includes("score");

const isBadgeField = (key: string) =>
  ["confidenceTier", "outreachPriority", "csmFlag", "dealRiskFlag"].includes(key);

const isReasoningField = (key: string) =>
  key.toLowerCase().includes("reasoning") || key.toLowerCase().includes("summary") || key.toLowerCase().includes("fitsummary");

const isActionField = (key: string) =>
  key.toLowerCase().includes("action") || key.toLowerCase().includes("flag");

const ScoreCard = ({ result, fields, tabId }: ScoreCardProps) => {
  const scoreKey = getScoreKey(tabId);
  const score = result[scoreKey] ?? 0;

  return (
    <div className={`rounded-xl border p-6 ${getScoreBg(score)}`}>
      {/* Score display */}
      <div className="flex items-start gap-6 mb-6">
        <div className="flex flex-col items-center">
          <span className={`text-6xl font-bold tabular-nums ${getScoreColor(score)}`}>
            {score}
          </span>
          <span className="text-xs text-muted-foreground mt-1">/ 100</span>
        </div>
        <div className="flex-1 pt-2">
          {fields
            .filter((f) => isBadgeField(f.key))
            .map((f) => (
              <Badge
                key={f.key}
                className={`${getConfidenceBadgeColor(result[f.key])} border text-xs font-medium mr-2 mb-2`}
              >
                {f.label}: {result[f.key]}
              </Badge>
            ))}
        </div>
      </div>

      {/* Detail fields */}
      <div className="space-y-4">
        {fields
          .filter((f) => !isScoreField(f.key) && !isBadgeField(f.key))
          .map((f) => {
            if (isActionField(f.key) && !isBadgeField(f.key)) {
              return (
                <div
                  key={f.key}
                  className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4"
                >
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {f.label}
                    </span>
                    <p className="text-sm text-foreground mt-1">{result[f.key]}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={f.key}>
                <div className="flex items-center gap-2 mb-1">
                  <Info className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {f.label}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed pl-5">
                  {result[f.key]}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ScoreCard;
