import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, Users, DollarSign, Target, Zap, Building, Info } from "lucide-react";

const pipelineData = [
  { name: "Q1", value: 0.45, fill: "hsl(var(--primary))" },
  { name: "Q2", value: 0.72, fill: "hsl(var(--primary))" },
  { name: "Q3", value: 1.15, fill: "hsl(var(--primary))" },
  { name: "Q4", value: 2.35, fill: "hsl(var(--chart-1))" },
];

const revenueGrowthData = [
  { year: "Y1", sunya: 100, unacademy: 0 },
  { year: "Y2", sunya: 145, unacademy: 1500 },
];

const customerData = [
  { name: "Institutional Customers", value: 30, fill: "hsl(var(--chart-1))" },
  { name: "B2C Pipeline", value: 70, fill: "hsl(var(--chart-2))" },
];

const subscriberGrowthData = [
  { month: "M1", subscribers: 0 },
  { month: "M2", subscribers: 800 },
  { month: "M3", subscribers: 1500 },
  { month: "M4", subscribers: 2200 },
  { month: "M5", subscribers: 3100 },
  { month: "M6", subscribers: 3800 },
  { month: "M7", subscribers: 4400 },
  { month: "M8", subscribers: 5000 },
];

const satisfactionData = [
  { metric: "Before", score: 70 },
  { metric: "After", score: 100 },
];

const kpiCards = [
  {
    title: "Qualified Pipeline",
    value: "$2.35M",
    change: "+20%",
    icon: Target,
    description: "DriveX Network",
    color: "text-chart-1",
    tooltip: "Total qualified sales pipeline built through outbound prospecting, Clay automation, and strategic account targeting over 4 quarters.",
  },
  {
    title: "Revenue Generated",
    value: "$1.5M+",
    change: "+45% YoY",
    icon: DollarSign,
    description: "Combined Impact",
    color: "text-chart-2",
    tooltip: "Cumulative revenue impact across Unacademy's Iconic program expansion and Sunya IAS institutional sales.",
  },
  {
    title: "Subscribers Added",
    value: "5,000+",
    change: "Iconic Program",
    icon: Users,
    description: "Unacademy",
    color: "text-chart-3",
    tooltip: "New paid subscribers acquired through the Iconic subscription program launch and retention optimization strategies.",
  },
  {
    title: "Institutional Clients",
    value: "30+",
    change: "B2B GTM",
    icon: Building,
    description: "Sunya IAS",
    color: "text-chart-4",
    tooltip: "Coaching institutes, colleges, and educational institutions onboarded through B2B go-to-market strategy.",
  },
  {
    title: "Satisfaction Lift",
    value: "+30%",
    change: "CSAT Improvement",
    icon: TrendingUp,
    description: "Unacademy",
    color: "text-chart-5",
    tooltip: "Customer satisfaction score improvement achieved through learner success interventions and support process optimization.",
  },
  {
    title: "Pipeline Boost",
    value: "+20%",
    change: "Clay Automation",
    icon: Zap,
    description: "DriveX Network",
    color: "text-primary",
    tooltip: "Incremental pipeline growth from implementing Clay for automated lead enrichment and personalized outreach sequences.",
  },
];

const chartConfig = {
  value: { label: "Pipeline ($M)" },
  sunya: { label: "Sunya IAS", color: "hsl(var(--chart-1))" },
  unacademy: { label: "Unacademy", color: "hsl(var(--chart-2))" },
  subscribers: { label: "Subscribers", color: "hsl(var(--chart-3))" },
  score: { label: "Satisfaction", color: "hsl(var(--chart-4))" },
};

const StatsDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="stats" className="section-container bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Metrics
          </p>
          <h2 className="section-title">Impact Dashboard</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Quantified results across GTM, growth, and operations roles
          </p>
        </motion.div>

        {/* KPI Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-help">
                      <CardContent className="p-4 relative">
                        <Info className="w-3 h-3 text-muted-foreground/50 absolute top-2 right-2" />
                        <kpi.icon className={`w-5 h-5 ${kpi.color} mb-2`} />
                        <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                        <p className="text-xs text-primary font-medium">{kpi.change}</p>
                        <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs text-center">
                    <p className="text-sm">{kpi.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Key performance metrics from GTM and growth roles at DriveX Network, Unacademy, and Sunya IAS (2022-2024)
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Pipeline Growth (DriveX)
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Outbound sales pipeline built through strategic prospecting and Clay automation
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                      <BarChart data={pipelineData}>
                        <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Quarterly qualified pipeline build ($M) — Q4 spike from Clay implementation
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5 text-chart-3" />
                      Subscriber Growth (Unacademy)
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Paid subscribers acquired through Iconic program launch and retention optimization
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                      <AreaChart data={subscriberGrowthData}>
                        <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="subscribers"
                          stroke="hsl(var(--chart-3))"
                          fill="hsl(var(--chart-3))"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ChartContainer>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      8-month subscriber acquisition curve — steady growth through program expansion
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pipeline" className="space-y-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Sales pipeline metrics from DriveX Network and Sunya IAS — built through outbound, inbound, and partnership channels
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Customer Segment Distribution</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Split between institutional B2B clients and B2C subscription pipeline at Sunya IAS
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[250px] w-full">
                      <PieChart>
                        <Pie
                          data={customerData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {customerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                    <div className="flex justify-center gap-6 mt-4">
                      {customerData.map((item) => (
                        <div key={item.name} className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.fill }}
                          />
                          <span className="text-sm text-muted-foreground">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Pipeline Metrics</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Key sales metrics from GTM initiatives at DriveX Network
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Pipeline</span>
                        <span className="text-2xl font-bold text-foreground">$2.35M</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70">Cumulative qualified pipeline over 4 quarters</p>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "85%" } : {}}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Pipeline Increase (Clay)</span>
                        <span className="text-2xl font-bold text-chart-1">+20%</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70">Lift from automated lead enrichment & outreach</p>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "20%" } : {}}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full bg-chart-1 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">B2B Clients Acquired</span>
                        <span className="text-2xl font-bold text-chart-2">30+</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70">Coaching institutes & colleges at Sunya IAS</p>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "60%" } : {}}
                          transition={{ duration: 1, delay: 0.9 }}
                          className="h-full bg-chart-2 rounded-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="growth" className="space-y-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Revenue and growth metrics demonstrating impact on top-line business outcomes
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-chart-1" />
                      Revenue Growth Comparison
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Year-over-year revenue trajectory across two EdTech companies
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                      <BarChart data={revenueGrowthData}>
                        <XAxis dataKey="year" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="sunya" fill="hsl(var(--chart-1))" name="Sunya IAS" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="unacademy" fill="hsl(var(--chart-2))" name="Unacademy" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-chart-1" />
                        <span className="text-sm text-muted-foreground">Sunya IAS (% Index)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-chart-2" />
                        <span className="text-sm text-muted-foreground">Unacademy ($K)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Growth Highlights</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Key revenue milestones achieved through GTM and growth initiatives
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-chart-1/10 border border-chart-1/20">
                      <p className="text-3xl font-bold text-chart-1">45%</p>
                      <p className="text-sm text-muted-foreground">YoY Revenue Growth at Sunya IAS</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        Achieved through integrated demand generation, institutional GTM, and B2B partnership development
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-chart-2/10 border border-chart-2/20">
                      <p className="text-3xl font-bold text-chart-2">$1.5M</p>
                      <p className="text-sm text-muted-foreground">Revenue Generated at Unacademy</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        Through Iconic subscription program expansion and learner success optimization
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-6">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Customer engagement and satisfaction metrics from learner success initiatives
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-chart-4" />
                      Customer Satisfaction Improvement
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      CSAT score improvement through learner success programs at Unacademy
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                      <BarChart data={satisfactionData} layout="vertical">
                        <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis dataKey="metric" type="category" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="score" fill="hsl(var(--chart-4))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ChartContainer>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Score indexed: Before (70) → After (100) intervention programs
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Key engagement KPIs across all roles
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-muted/30">
                        <p className="text-3xl font-bold text-foreground">5,000+</p>
                        <p className="text-xs text-muted-foreground">New Subscribers</p>
                        <p className="text-[10px] text-muted-foreground/60 mt-1">Iconic program</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/30">
                        <p className="text-3xl font-bold text-foreground">30+</p>
                        <p className="text-xs text-muted-foreground">B2B Institutions</p>
                        <p className="text-[10px] text-muted-foreground/60 mt-1">Sunya IAS GTM</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/30">
                        <p className="text-3xl font-bold text-foreground">+30%</p>
                        <p className="text-xs text-muted-foreground">CSAT Lift</p>
                        <p className="text-[10px] text-muted-foreground/60 mt-1">Learner success</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/30">
                        <p className="text-3xl font-bold text-foreground">+20%</p>
                        <p className="text-xs text-muted-foreground">Pipeline Boost</p>
                        <p className="text-[10px] text-muted-foreground/60 mt-1">Clay automation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsDashboard;
