import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, UserCheck, RefreshCw, Activity } from "lucide-react";
import AnalysisTab from "./AnalysisTab";
import PoweredBySection from "./PoweredBySection";

const tabs = [
  {
    id: "migration",
    label: "Migration Intel",
    icon: BarChart3,
    description: "Score how likely an account is to migrate from a competitor platform.",
    fields: [
      { key: "migrationScore", label: "Migration Score" },
      { key: "confidenceTier", label: "Confidence Tier" },
      { key: "reasoning", label: "AI Reasoning" },
      { key: "recommendedAction", label: "Recommended Action" },
    ],
  },
  {
    id: "newlogo",
    label: "New Logo Qualifier",
    icon: UserCheck,
    description: "Score a prospect against your ICP and outreach priority tier.",
    fields: [
      { key: "icpFitScore", label: "ICP Fit Score" },
      { key: "icpMatchReasoning", label: "ICP Match Reasoning" },
      { key: "outreachPriority", label: "Outreach Priority" },
    ],
  },
  {
    id: "renewal",
    label: "Renewal Risk Scanner",
    icon: RefreshCw,
    description: "Assess churn signals for an existing customer account.",
    fields: [
      { key: "riskScore", label: "Risk Score" },
      { key: "churnSignalSummary", label: "Churn Signal Summary" },
      { key: "csmFlag", label: "CSM Flag" },
    ],
  },
  {
    id: "pipeline",
    label: "Pipeline Health",
    icon: Activity,
    description: "Grade an in-pipeline account's overall deal quality and flag risk.",
    fields: [
      { key: "pipelineHealthScore", label: "Pipeline Health Score" },
      { key: "fitSummary", label: "Fit Summary" },
      { key: "dealRiskFlag", label: "Deal Risk Flag" },
    ],
  },
];

const AccountIntelligenceHub = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">
              Account <span className="text-primary">Intelligence Hub</span>
            </h1>
          </div>
          <span className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1">
            AI_OPS_V1
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-muted-foreground text-sm mb-8 max-w-3xl">
          AI-powered account scoring for GTM teams — qualify leads, surface migration opportunities, flag churn risk, and grade pipeline health in real time.
        </p>

        <Tabs defaultValue="migration" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 h-auto p-1 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex flex-col items-start gap-1 px-4 py-3 text-left data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-md rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <AnalysisTab tab={tab} />
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <PoweredBySection />
    </div>
  );
};

export default AccountIntelligenceHub;
