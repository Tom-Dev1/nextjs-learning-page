"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CURRICULUM_MODULES } from "@/lib/constants";

// Keywords quan trọng cần highlight
const KEYWORDS = [
  "định vị thương hiệu",
  "tỷ lệ chuyển đổi",
  "ROI",
  "lead",
  "ROAS",
  "CPL",
  "A/B test",
  "customer journey",
  "UVP",
  "CTA",
  "Meta Ads",
  "TikTok",
  "GA4",
  "Meta Pixel",
  "funnel",
  "landing page",
  "tracking",
  "analytics",
  "marketing",
  "nền tảng",
  "tối ưu",
  "chuyển đổi",
  "offer",
  "insight",
  "content",
  "campaign",
  "audience",
  "targeting",
  "creative",
  "conversion",
  "event",
  "UTM",
  "traffic",
  "báo cáo",
  "checklist",
  "templates",
  "brief",
  "repurpose",
  "hook",
  "viral",
  "trend",
  "thuật toán",
  "short-form",
];

// Function để highlight keywords trong text
function highlightKeywords(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  // Sắp xếp keywords theo độ dài giảm dần để match từ dài nhất trước
  const sortedKeywords = [...KEYWORDS].sort((a, b) => b.length - a.length);

  // Tìm tất cả matches
  const matches: Array<{ start: number; end: number; keyword: string }> = [];
  
  sortedKeywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "gi");
    let match;
    while ((match = regex.exec(text)) !== null) {
      // Kiểm tra xem có overlap với match khác không
      const overlaps = matches.some(
        (m) =>
          (match!.index >= m.start && match!.index < m.end) ||
          (match!.index + keyword.length > m.start &&
            match!.index + keyword.length <= m.end)
      );
      
      if (!overlaps) {
        matches.push({
          start: match.index,
          end: match.index + keyword.length,
          keyword: keyword,
        });
      }
    }
  });

  // Sắp xếp matches theo vị trí
  matches.sort((a, b) => a.start - b.start);

  // Loại bỏ overlaps
  const nonOverlappingMatches: typeof matches = [];
  matches.forEach((match) => {
    const hasOverlap = nonOverlappingMatches.some(
      (m) =>
        (match.start >= m.start && match.start < m.end) ||
        (match.end > m.start && match.end <= m.end) ||
        (match.start <= m.start && match.end >= m.end)
    );
    if (!hasOverlap) {
      nonOverlappingMatches.push(match);
    }
  });

  // Build React nodes
  nonOverlappingMatches.forEach((match) => {
    // Thêm text trước keyword
    if (match.start > lastIndex) {
      parts.push(text.slice(lastIndex, match.start));
    }
    // Thêm keyword với highlight
    parts.push(
      <span key={`keyword-${keyCounter++}`} className="keyword-highlight">
        {text.slice(match.start, match.end)}
      </span>
    );
    lastIndex = match.end;
  });

  // Thêm phần text còn lại
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // Nếu không có matches nào, trả về text gốc
  if (parts.length === 0) {
    return [text];
  }

  return parts;
}

export function LandingCurriculum() {
  const [activeTab, setActiveTab] = useState<string>(CURRICULUM_MODULES[0].id);

  return (
    <section
      id="lo-trinh"
      aria-labelledby="curriculum-title"
      className="border-t border-border bg-muted/20 py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="curriculum-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lộ trình 8 module
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {highlightKeywords("Từ nền tảng marketing đến tracking, funnel và tối ưu chuyển đổi.")}
        </motion.p>

        <div className="mt-10">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4 flex h-auto flex-wrap gap-1 bg-transparent p-0">
              {CURRICULUM_MODULES.map((m) => (
                <TabsTrigger
                  key={m.id}
                  value={m.id}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-left text-sm data-[state=active]:border-primary data-[state=active]:bg-primary/10"
                >
                  {m.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {CURRICULUM_MODULES.map((m) => (
              <TabsContent key={m.id} value={m.id}>
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
                  {m.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {highlightKeywords(m.description)}
                    </p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {m.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
